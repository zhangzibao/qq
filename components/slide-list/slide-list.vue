<template>
    <div class="container">
        <!-- 内容 -->
        <div class="infoAll" v-for="(item,index) in commitInfo" :key="index">
            <ul v-if="item.top">
                <li @touchstart="touchStart($event)" @touchend="touchEnd($event,index)" :data-type="item.type"
                    style="background-color:#EDFBFE;">
                    <div class="imgInfo" @click="recover(index)">
                        <img :src="item.img">
                    </div>
                    <div class="centerInfo">
                        <div class="name">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="sonName">
                            <span>{{item.sonName}}</span>
                        </div>
                    </div>
                    <div class="timeInfo" @click="recover(index)">
                        <div class="time">
                            <text>{{item.time}}</text>
                        </div>
                        <div class="infoNum" style="">
                            <text style="font-size:12px;">{{item.infoNum}}</text>
                        </div>
                    </div>
                    <div class="top" @click="top(index)" style="width:30%">
                        取消置顶
                    </div>
                </li>
            </ul>
        </div>
        <div class="infoAll" v-for="(item,index) in commitInfo" :key="index">
            <!-- {{item.img}} -->
            <ul v-if="!item.top">
                <li @touchstart="touchStart($event)" @touchend="touchEnd($event,index)" :data-type="item.type">
                    <div class="imgInfo" @click="recover(index)">
                        <img :src="item.img">
                    </div>
                    <div class="centerInfo">
                        <div class="name">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="sonName">
                            <span>{{item.sonName}}</span>
                        </div>
                    </div>
                    <div class="timeInfo" @click="recover(index)">
                        <div class="time">
                            <text>{{item.time}}</text>
                        </div>
                        <div class="infoNum" style="">
                            <text style="font-size:12px;">{{item.infoNum}}</text>
                        </div>
                    </div>
                    <div class="top" @click="top(index)">
                        置顶
                    </div>
                    <div class="delect" @click="delect(index)">
                        删除
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slide-list",
        data() {
            return {
                userInfo: {},
                commitInfo: [
                    {
                        img: "http://img3.imgtn.bdimg.com/it/u=3067730600,935028889&fm=27&gp=0.jpg",
                        name: "旺财",
                        sonName: "今晚去吃饭吗?",
                        time: "19:08",
                        infoNum: "9",
                        top: false,
                        type: 0
                    },

                    {
                        img: "http://img1.imgtn.bdimg.com/it/u=1257196754,3171363795&fm=27&gp=0.jpg",
                        name: "前端学习群",
                        sonName: "hanber：异步与同步的问题",
                        time: "02:08",
                        infoNum: "99+",
                        top: false,
                        type: 0
                    },
                    {
                        img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1672209094,624238697&fm=27&gp=0.jpg",
                        name: "小学同学",
                        sonName: "好久不见，最近好吗？",
                        time: "02:08",
                        infoNum: "9",
                        top: false,
                        type: 0
                    },
                    {
                        img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1312347818,1612941824&fm=200&gp=0.jpg",
                        name: "老妈",
                        sonName: "啥时候回家一趟呀？",
                        time: "23:08",
                        infoNum: "1",
                        top: false,
                        type: 0
                    },
                    {
                        img: "http://img2.imgtn.bdimg.com/it/u=1093392508,3329264726&fm=27&gp=0.jpg",
                        name: "AD动漫群",
                        sonName: "ghost:《你的名字》求资源",
                        time: "02:08",
                        infoNum: "99+",
                        top: false,
                        type: 0
                    }
                ]
            }
        },
        methods: {
            // 滑动开始
            touchStart(e) {
                // 获取移动距离，可以通过打印出e，然后分析e的值得出
                this.startX = e.mp.changedTouches[0].clientX
            },
            // 滑动结束
            touchEnd(e, index) {
                // 获取移动距离
                this.endX = e.mp.changedTouches[0].clientX
                if (this.startX - this.endX > 10) {
                    for (let i = 0; i < this.commitInfo.length; i++) {
                        this.commitInfo[i].type = 0
                    }
                    this.commitInfo[index].type = 1
                } else if (this.startX - this.endX < -10) {
                    for (let i = 0; i < this.commitInfo.length; i++) {
                        this.commitInfo[i].type = 0
                    }
                }

            },
            // 点击回复原状
            recover(index) {
                this.commitInfo[index].type = 0
            },
            getUserInfo() {
                // 调用登录接口
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: (res) => {
                                this.userInfo = res.userInfo
                            }
                        })
                    }
                })
            },
            // 置顶
            top(index) {
                this.commitInfo[index].top = !this.commitInfo[index].top
                this.recover(index)
            },
            // 删除
            delect(index) {
                this.commitInfo.splice(index, 1)
            }
        },

        created() {
            // 调用应用实例的方法获取全局数据
            this.getUserInfo()
        }
    }
</script>

<style lang="scss" scoped>
    // 头部
    * {
        margin: 0px;
        padding: 0px;
    }

    .head {
        width: 100%;
        height: 130rpx;
        background-color: #38A7FA;
        margin-top: -195rpx;
        display: flex;
        align-items: center;

        .head-info {
            color: #fff;
            font-size: 30rpx;
            margin-left: 30%;
            margin-top: 20rpx;
            letter-spacing: 4rpx;
        }

        .userinfo-avatar {
            width: 80rpx;
            height: 80rpx;
            margin: 20rpx;
            border-radius: 50%;
            margin-top: 30rpx;

        }
    }

    .search {
        width: 90%;
        margin-top: 20rpx;
        margin-bottom: 20rpx;

        input {
            width: 100%;
            height: 20rpx;
            background-color: #F3F3F3;
            border-radius: 5rpx;
            z-index: 0;
        }

        span {
            position: absolute;
            color: #B5B5B5;
            font-size: 24rpx;
            margin-top: -44rpx;
            z-index: 999;
            margin-left: 42%;
            text-align: center;

        }
    }

    .infoAll {
        width: 100%;

        ul {
            width: 100%;
            overflow: hidden;
            // overflow-x: scroll;
            li {
                // overflow: hidden;
                -webkit-transition: all 0.2s;
                transition: all 0.2s;
                width: 1100rpx;
                height: 150rpx;
                //   background-color: red;
                line-height: 150rpx;
                border-bottom: 1px solid #E0EEF1;
                //   垂直居中，  // 子div水平排列
                display: flex;
                //   justify-content:center;
                align-items: center;

                .imgInfo {
                    width: 100rpx;
                    height: 100rpx;
                    border-radius: 50%;
                    background-color: #38A7FA;
                    margin-left: 2%;

                    img {
                        width: 100rpx;
                        height: 100rpx;
                        border-radius: 50%;
                        overflow: hidden;
                    }

                }

                .centerInfo {
                    width: 40%;
                    height: 150rpx;
                    margin-left: 2%;

                    .name {
                        margin-top: -20rpx;

                        span {
                            font-size: 35rpx;
                        }

                    }

                    .sonName {
                        margin-top: -110rpx;

                        span {
                            font-size: 24rpx;
                            color: #7C8489;
                        }

                    }

                }

                .timeInfo {
                    width: 15%;
                    height: 150rpx;
                    margin-left: 6%;

                    .time {
                        margin-top: -20rpx;
                        color: #92A0A1;
                        font-size: 25rpx;
                        position: absolute;

                    }

                    .infoNum {
                        width: 50rpx;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 30rpx;
                        border-radius: 10rpx;
                        background-color: #93D5ED;
                        margin-left: 10rpx;
                        margin-top: 70rpx;

                    }

                }

                .top {
                    width: 15%;
                    height: 150rpx;
                    background-color: #C4C7CD;
                    color: #fff;
                    font-size: 34rpx;
                    text-align: center
                }

                .delect {
                    width: 15%;
                    height: 150rpx;
                    background-color: #FF3B32;
                    color: #fff;
                    font-size: 34rpx;
                    text-align: center
                }
            }
        }
    }

    li[data-type="0"] {
        transform: translate3d(0, 0, 0);
    }

    li[data-type="1"] {
        transform: translate3d(-400rpx, 0, 0);
    }
</style>
