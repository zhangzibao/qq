// vuex中state的数据只能被mutations方法所更改
import util from '../utils/util';
const mutations = {
	logout(state) {
		state.hasLogin = false;
		// 关闭长链接
		uni.closeSocket()
		try {
			uni.removeStorageSync('userInfo');
		} catch (e) {
			// error
			// console.log(e)
		}
	},
	getself(state, self) {
		state.self = self
	},
	// ajax获取到用户数据
	getfriends(state, friends) {
		state.friends = friends
	},
	changefriend(state, {
		friendId,
		value
	}) {

		state.friends.forEach((friend) => {
			if (friend.id === friendId) {
				friend.uAvatar = value
				console.log()
				return
			}
		})

	},
	changeSelf(state, value) {
		state.self.uAvatar = value
	},
	setMessageList(state, messageList) {
		state.messageList = state.messageListFB = messageList
	},
	changesocket(state, status) {
		state.socketOpen = status;

	},
	// 获取当前获得关注的朋友的id
	getActiveId(state, activeId) {
		state.activeId = activeId
	},
	setStranger(state,stranger){
        state.stranger = stranger
	},
	// 消息队列，聊天队列处理
	changeList(state, obj) {
		let addTime = util.nowDate("yyyy-mm-dd hh:mm:ss")
		// 判断有没有聊天队列，没有就加一条

		if (state.messageList.find(x => x.friendId === obj.friendId) === undefined) {
			state.messageList.push({
				"friendId": obj.friendId,
				list: []
			})
		}
		// console.log(state.messageList)
		// 判断信息是自己的还是ai的，然后插入聊天队列中
		if (!obj.isreceive) {
			// 信息是自己发送的
			state.messageList.forEach((item, index, arr) => {
				if (item.friendId === obj.friendId) {
					// obj.friendId = 0
					item.list.push({
						isreceive: obj.isreceive,
						messageContent: obj.messageContent,
						addTime
					})
				}
			})
		} else {
			// 信息是ai发送的
			state.messageList.forEach((item, index, arr) => {
				if (item.friendId === obj.friendId) {
					// console.log(obj)
					// obj.friendId = 0
					item.list.push({
						isreceive: obj.isreceive,
						messageContent: obj.messageContent,
						addTime
					})
				}
			})
		}
	},
	// 删除消息
	removeMessage(state, {
		id
	}) {
		state.messageList.forEach((item, index, arr) => {
			// 判断信息列表中id与正在删除的信息id是否相同，如果相同，就删除信息
			if (item.friendId === id) {
				arr.splice(index, 1)
				// console.log(id)
				// console.log(index)
				// console.log(state.messageList)
			}
		})
	}
}

export default mutations
