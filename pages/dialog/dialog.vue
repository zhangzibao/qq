<template>
    <view class="uni-column">
        <scroll-view
                id="scrollview"
                scroll-y
                :scroll-with-animation="animation_switch"
                :style="{height:style.contentViewHeight+'px'}"
                :scroll-top="scrollTop">
            <!-- 起始 -->
            <view id="scroll-content">
                <view class="m-item" :id="'message'+key" v-for="(message,key) in messageList_x" :key="key">
                    <view class="item-time">
                        <span>{{message.addTime}}</span>
                    </view>
                    <view class="item-content">
                        <view class="m-left">
                            <image class="head_icon" :src="userData.friend.uAvatar"
                                   v-if="message.isreceive"></image>
                        </view>
                        <view class="m-content">
                            <view class="m-content-head" :class="{'m-content-head-right':!message.isreceive}">
                                <view :class="message.isreceive ? 'm-content-head-home' : 'm-content-head-customer'">
                                    {{message.messageContent}}
                                </view>
                            </view>
                        </view>
                        <view class="m-right">
                            <image class="head_icon" :src="userData.self.uAvatar"
                                   v-if="!message.isreceive"></image>
                        </view>
                    </view>
                </view>
            </view>
            <!-- 结束 -->
        </scroll-view>
        <!--</view>-->
        <view class="footer-center">
            <view class="uni-icon uni-icon-mic" @tap="startRecognize"></view>
            <textarea class="input-text"
                      auto-focus
                      v-model="message_content"/>
            <button id='msg-type' type="default" @tap="sendMessge">发送</button>
        </view>
    </view>
</template>
<script>
    import {mapState, mapGetters, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapGetters(['friend','nowMessageList']),
            ...mapState(['self','messageList']),
            userData() {
                return {
                    self: this.self,
                    friend: this.friend
                }
            },
            style() {
                return {
                    pageHeight: uni.getSystemInfoSync().windowHeight,
                    contentViewHeight: uni.getSystemInfoSync().windowHeight
                }
            }
        },
        onBackPress() {
            uni.switchTab({
                url: '../main/main'
            })
            return true
        },
        onNavigationBarButtonTap(e) {
            uni.showToast({
                title: '菜单'
            })
        },
        data() {
            return {
                messageList_x: [],
                animation_switch: false,
                message_content: '',
                scrollTop: 0
            }
        },
        watch: {
            nowMessageList(newValue, oldValue) {
                this.messageList_x.push(this.nowMessageList[this.nowMessageList.length - 1])
                this.scrollToBottom()
            }
        },
        onReady() {
            this.scrollToBottom()
            setTimeout(() => {
                this.animation_switch = true
                // 消除切换动画开关的影响
                this.scrollTop = this.scrollTop - 1
            }, 500)
        },
        onLoad() {

            this.messageList_x = this.nowMessageList.length >= 15 ? this.nowMessageList.slice(-15) : this.nowMessageList.slice(0)
            uni.setNavigationBarTitle({
                title: this.userData.friend.nickname
            })

            //         setTimeout(() => {
            //             this.animation_switch = true;
            //         }, 400);
            // 将头像缓存到本地，然而没有卵用
            // console.log(this.friend.uAvatar);
            //         if (this.friend.uAvatar.startsWith('http')) {
            //             this.$my_diy.saveImage(this.friend.uAvatar).then(res => {
            //                 //change the url of image
            //                 const obj = {
            //                     friendId: this.friend.id,
            //                     value: resss
            //                 };
            //                 this.changefriend(obj);
            //             });
            //         }
        },
        methods: {
            // ...mapMutations(['changefriend']),
            startRecognize() {
                let options = {}
                options.engine = 'iFly'
                this.message_content = ''
                plus.speech.startRecognize(
                    options,
                    s => {
                        this.message_content += s
                    },
                    e => {
                        // console.log('语音识别失败：' + e.message)
                    }
                )
            },
            sendMessge() {
                const message_content = this.message_content
                this.message_content = ''
                if (message_content.length) {
                    if (this.friend.id!==undefined && this.friend.id === 6) {
                        this.$store.dispatch('sendRobotValue', {
                            friendId: this.friend.id,
                            messageContent: message_content,
                            isreceive: false
                        })
                    } else {
                        this.$store.dispatch('addMessage', {
                            friendId: this.friend.id,
                            messageContent: message_content,
                            isreceive: false
                        })
                    }
                }
            },
            scrollToBottom() {
                uni.createSelectorQuery()
                    .select('#scroll-content')
                    .boundingClientRect()
                    .exec(res => {
                        if (res[0] != null) {
                            this.scrollTop = res[0].height + 100
                            // console.log(res[0].height);
                        }
                    })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../common/icon.css';

    .uni-column {
        display: flex;
        flex-direction: column;

        #scrollview {
            // margin-top: 5upx;
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
            /*position: fixed;*/
            margin-bottom: 90upx;

            #scroll-content {
                display: flex;
                flex-direction: column;
                height: auto;
                width: 100%;

                .m-item {
                    display: flex;
                    flex-direction: column;
                    padding: 30upx 0;

                    .item-time {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 40upx;

                        span {
                            color: #aaa;
                            font-size: 0.8em;
                        }
                    }

                    .item-content {
                        display: flex;
                        width: 100%;
                        flex-direction: row;
                        // padding: 20upx 0;
                        .head_icon {
                            width: 80upx;
                            height: 80upx;
                            border-radius: 100%;
                        }

                        .m-left {
                            display: flex;
                            width: 120upx;
                            justify-content: center;
                            align-items: flex-start;
                        }

                        .m-right {
                            display: flex;
                            width: 120upx;
                            justify-content: center;
                            align-items: flex-start;
                        }

                        .m-content {
                            display: flex;
                            flex: 1;
                            flex-direction: column;
                            justify-content: center;
                            word-break: break-all;

                            .m-content-head-right {
                                display: flex;
                                justify-content: flex-end;
                            }

                            .m-content-head {
                                position: relative;

                                .m-content-head-home {
                                    text-align: left;
                                    background: #1482d1;
                                    border: 1px #1482d1 solid;
                                    border-radius: 20upx;
                                    padding: 20upx;
                                    color: white;
                                }

                                .m-content-head-home:before {
                                    border: 15upx solid transparent;
                                    border-right: 15upx solid #1482d1;
                                    left: -26upx;
                                    width: 0;
                                    height: 0;
                                    position: absolute;
                                    content: ' ';
                                }

                                .m-content-head-customer {
                                    border: 1upx white solid;
                                    background: white;
                                    border-radius: 20upx;
                                    padding: 20upx;
                                }

                                .m-content-head-customer:after {
                                    border: 15upx solid transparent;
                                    border-left: 15upx solid white;
                                    top: 20upx;
                                    right: -26upx;
                                    width: 0;
                                    height: 0;
                                    position: absolute;
                                    content: ' ';
                                }
                            }
                        }
                    }

                    /*bottom: 90upx;*/
                }
            }
        }

        .footer-center {
            position: fixed;
            width: 98%;
            height: 80upx;
            bottom: 0px;
            z-index: 10;
            display: flex;
            border: none;
            overflow: hidden;
            background: #d0d0d0;
            justify-content: center;
            padding: 5upx 1%;

            align-items: center;

            .input-text {
                flex: 1;
                height: 65upx;
                width: auto;
                background: #fff;
                /* border: solid 1upx #ddd; */
                // padding: 10upx !important;
                font-family: verdana !important;
                overflow: hidden;
                border-radius: 15upx;
            }

            button {
                // width: 80upx;
                // height: 60upx;
                font-size: 25upx;
            }
        }
    }
</style>
