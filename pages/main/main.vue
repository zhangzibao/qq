<template>
    <view>
        <view class="noMessage" v-if="commitInfo.length===0">

            <!--<mu-icon value="chat" size="80" color="#C3C3C3"/><br>-->
            <p style="color: #C3C3C3;">暂时没有新消息</p>
        </view>
        <view v-if="hasLogin&&commitInfo!==undefined" class="content">
            <div class="container_of_slide" v-for="(item,index) in commitInfo" :key="index"
                 @tap="todialog(item.friendId)">
                <div class="slide_list"
                     @touchstart="touchStart($event,index)"
                     @touchend="touchEnd($event,index)"
                     @touchmove="touchMove($event,index)"
                     :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}"
                >
                    <div class="now-message-info"
                         :style="{width:Screen_width+'px'}"
                    >
                        <div class="imgInfo" @click="recover(index)">
                            <image :src="item.uAvatar"></image>
                        </div>
                        <div class="centerInfo">
                            <p class="name">
                                {{item.nickname}}
                            </p>
                            <p class="message">
                                {{item.list.messageContent}}
                            </p>
                        </div>
                        <div class="timeInfo" @click="recover(index)">
                            <div class="time">
                                <text>
                                    {{item.list.addTime}}
                                </text>
                            </div>
                        </div>
                    </div>
                    <div class="group-btn">
                        <div class="top" @tap="top(index)" v-if="item.top">
                            取消置顶
                        </div>
                        <div class="top" @tap="top(index)" v-else>
                            置顶
                        </div>
                        <div class="removeM" @tap="removeM(index)">
                            删除
                        </div>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
        </view>
    </view>
</template>
<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapState(['hasLogin', 'friends', 'messageList']),
            nowMessageList() {
                let list = []
                this.messageList.forEach(x => {
                    // 由id筛选出对应的好友
                    const friend = this.friends.find(i => i.id === x.friendId)
                    if (friend !== undefined) {
                        const obj = {
                            friendId: friend.id,
                            uAvatar: friend.uAvatar,
                            nickname: friend.nickname,
                            list: x.list.slice(-1)[0],
                            top: 0,
                            slide_x: 0
                        }
                        list.push(obj)
                    }
                })
                return list
            },
            Screen_width() {
                return uni.getSystemInfoSync().windowWidth
            }
        },
        data() {
            return {
                startX: 0,
                LastX: 0,
                btnWidth: 0,
                commitInfo: []
            }
        },
        watch: {
            nowMessageList(newValue, oldValue) {
                this.commitInfo = this.nowMessageList.concat()
            }
        },
        onLoad() {
            this.commitInfo = this.nowMessageList.concat()
        },
        methods: {
            // 获取点击的friend的id
            ...mapMutations(['getActiveId']),
            todialog(friend_id) {
                // console.log(friend_id);
                this.getActiveId(friend_id)
                uni.navigateTo({
                    url: '../dialog/dialog'
                })
            },
            // 滑动开始
            touchStart(e, index) {
                // 获取当前按钮组宽度
                uni.createSelectorQuery()
                    .selectAll('.group-btn')
                    .boundingClientRect()
                    .exec(res => {
                        if (res[0] != null) {
                            this.btnWidth = res[0][index].width * -1
                        }
                    })
                // 记录上一次开始时手指所处位置
                this.startX = e.touches[0].pageX
                // console.log(e)
                // 记录上一次手指位置
                this.LastX = this.startX
                //初始化非当前滑动消息列的位置
                this.commitInfo.forEach((item, eq) => {
                    if (eq !== index) {
                        item.slide_x = 0
                    }
                })
            },
            // 滑动中
            touchMove(e, index) {
                const endX = e.touches[0].pageX
                const distance = endX - this.LastX
                // 预测滑块所处位置
                const duang = this.commitInfo[index].slide_x + distance
                // 如果在可行区域内
                if (duang <= 0 && duang >= this.btnWidth) {
                    this.commitInfo[index].slide_x += distance
                }
                // 记录上一次开始时手指所处位置
                this.LastX = endX
            },
            // 滑动结束
            touchEnd(e, index) {
                const end_distance = this.startX - this.LastX
                // 判断手指最终位置与手指开始位置的位置差距
                if (end_distance > 10) {
                    this.commitInfo[index].slide_x = this.btnWidth
                } else if (end_distance < -10) {
                    this.commitInfo[index].slide_x = 0
                }
            },
            // 点击回复原状
            recover(index) {
                this.commitInfo[index].slide_x = 0
                this.commitInfo.sort((a, b) => {
                    return b.top - a.top
                })
            },
            // 置顶
            top(index) {
                this.commitInfo[index].top = this.commitInfo[index].top ? 0 : 1
                this.recover(index)
            },
            // 删除
            removeM(index) {
                this.commitInfo.splice(index, 1)

            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .noMessage {
        height: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container_of_slide {
        width: 100%;
        overflow: hidden;

        .slide_list {
            transition: all 100ms;
            transition-timing-function: ease-out;
            min-width: 200%;
            height: 150rpx;
            border-bottom: 1px solid #e0eef1;

            .now-message-info {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .imgInfo {
                    width: 100rpx;
                    height: 100rpx;
                    border-radius: 50%;
                    background-color: #38a7fa;
                    margin-left: 4%;

                    image {
                        width: 100rpx;
                        height: 100rpx;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                }

                .centerInfo {
                    height: 150rpx;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: baseline;
                    text-align: left;
                    width: 55%;
                    padding-left: 5%;

                    p {
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        max-width: 100%;
                    }

                    .name {
                        font-size: 35rpx;
                    }

                    .message {
                        font-size: 24rpx;
                        color: #7c8489;
                    }
                }

                .timeInfo {
                    height: 150rpx;
                    display: flex;
                    /*min-width:15% ;*/
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-right: 2%;

                    .time {
                        color: #92a0a1;
                        font-size: 25rpx;
                    }
                }
            }

            .now-message-info,
            .group-btn {
                float: left;
            }

            .group-btn {
                display: flex;
                flex-direction: row;
                height: 100%;
                min-width: 100rpx;
                align-items: center;

                div {
                    height: 100%;
                    color: #fff;
                    text-align: center;
                    padding: 0 50rpx;
                    font-size: 34rpx;
                    line-height: 150rpx;
                }

                .top {
                    background-color: #c4c7cd;
                }

                .removeM {
                    background-color: #ff3b32;
                }
            }
        }
    }
</style>
