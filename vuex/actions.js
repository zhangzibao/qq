// actions里存放的是异步操作
// 由于vuex中的state的变更只能由mutations进行操作，所以actions不直接进行数据操作，而是调用mutations方法
// 以下出现的that都是vue实例对象，因为把axios绑定在了Vue原型上，vuex无法调用，所以这里需要传入this

import store from "./store"

const actions = {
    // 异步获取基础数据
    // 这里使用了es7的async函数，相当于封装了promis的generator
    async Login({
                    commit,
                    state
                }, userInfo) {
        //获取自己的数据
        await uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/api/user/' + userInfo.user_id, //仅为示例，并非真实接口地址。
        }).then(([err, res]) => {
            state.self = res.data
        })
        //获取朋友的数据
        await uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/api/friends/' + userInfo.user_id, //仅为示例，并非真实接口地址。
        }).then(([err, res]) => {
            state.friends = res.data
        })
        await uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/api/message/' + userInfo.user_id, //仅为示例，并非真实接口地址。
        }).then(([err, res]) => {
            commit("setMessageList", res.data)

        })
        state.Authorization = userInfo.token
        state.user_id = userInfo.user_id
        state.hasLogin = true
        state.isAjax = true
        // 存入缓存
        try {
            uni.setStorageSync('userInfo', state)
            // console.log("登录后更新数据")
        } catch (e) {
            // error
            // console.log(e)
        }
    },
    async updateData({
                         commit,
                         state
                     }) {
        await uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/api/friends/' + state.user_id, //仅为示例，并非真实接口地址。
        }).then(([err, res]) => {
            state.friends = res.data
        })
        await uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/api/message/' + state.user_id, //仅为示例，并非真实接口地址。
        }).then(([err, res]) => {
            commit("setMessageList", res.data)
        })
        try {
            uni.setStorageSync('userInfo', state)
            // console.log("数据更新成功")
        } catch (e) {
            // error
        }
    },
    // 正常聊天
    async addMessage({
                         commit
                     }, {
                         friendId,
                         isreceive,
                         messageContent
                     }) {
        const userId = store.state.user_id
        const sender = {
            userId,
            friendId,
            isreceive,
            messageContent
        }
        const reciver = {
            userId: friendId,
            friendId: userId,
            isreceive: !isreceive,
            messageContent
        }
        // 提交到我方消息记录
        uni.request({
            url: "http://zhangzibao.xyz:8080/myqqServer/api/addmessage",
            data: sender,
            method: "POST",
            header: {
                'content-type': 'application/json'
            }
        }).then(([err, res]) => {
            if (res.data === 1) {
                // console.log('已发送消息')
                commit('changeList', {
                    friendId,
                    messageContent,
                    isreceive
                })
            } else {
                commit('changeList', {
                    friendId,
                    messageContent: '发送失败',
                    isreceive
                })
                // console.log(err)
            }
        })
        //向对方发送消息
        uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/socket/push/' + friendId, //仅为示例，并非真实接口地址。
            data: {
                userId,
                messageContent
            },
            header: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then(([err, res]) => {
            if (res.statusCode === 200) {
                // console.log("success:", res.data)
            } else {
                // console.log("failed", res.data)
            }
        })
        //提交到对方消息记录
        uni.request({
            url: "http://zhangzibao.xyz:8080/myqqServer/api/addmessage",
            data: reciver,
            method: "POST",
            header: {
                'content-type': 'application/json'
            }
        }).then(([err, res]) => {
            if (res.data === 1) {
                // console.log('对方已收到消息')
            } else {
                // console.log(err)
            }
        })

    },
    // 聊天机器人
    async sendRobotValue({
                             commit
                         }, {
                             friendId,
                             messageContent,
                             isreceive
                         }) {
        // 我发过去的消息
        commit('changeList', {
            friendId,
            messageContent,
            isreceive
        })
        // 机器人发过来消息
        uni.request({
            url: 'http://zhangzibao.xyz:8080/myqqServer/api/robot', //仅为示例，并非真实接口地址。
            data: {
                info: messageContent,
                userid: friendId
            },
            header: {
                'content-type': 'application/json'
            },
            method: "POST"
        }).then(([err, res]) => {
            let robotData = res.data
            // 判断获取到的数据类型，在进行对应操作
            if (robotData.code === 100000) {
                commit('changeList', {
                    friendId,
                    messageContent: robotData.text,
                    isreceive: !isreceive
                })
            } else if (robotData.code === 200000) {
                let data = robotData.text + robotData.url
                commit('changeList', {
                    friendId,
                    messageContent: data,
                    isreceive: !isreceive
                })
            } else if (robotData.code === 302000) {
                commit('changeList', {
                    friendId,
                    messageContent: '暂不支持此类对话',
                    isreceive: !isreceive
                })
            } else {
                commit('changeList', {
                    friendId,
                    messageContent: '暂不支持此类对话',
                    isreceive: !isreceive
                })
            }
        })

    },
    async addnewfriend({
                           state
                       }) {
        const me_and_friend = {
            userId: state.self.id,
            friendId: state.stranger.id
        }
        const friend_and_me = {
            userId: state.stranger.id,
            friendId: state.self.id,
        }
        state.friends.push(state.stranger)
        state.stranger = {}
        // 加对方为好友
        uni.request({
            url: "http://zhangzibao.xyz:8080/myqqServer/api/friends",
            data: me_and_friend,
            method: "POST",
            header: {
                'content-type': 'application/json'
            }
        }).then(([err, res]) => {
            if (res.data === 1) {
            } else {
                console.log(err)
            }
        })
        //好友位都添加
        uni.request({
            url: "http://zhangzibao.xyz:8080/myqqServer/api/friends",
            data: friend_and_me,
            method: "POST",
            header: {
                'content-type': 'application/json'
            }
        }).then(([err, res]) => {
            if (res.data === 1) {
            } else {
                // console.log(err)
            }
        })

    }

}

export default actions
