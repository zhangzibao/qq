<template>
    <view class="content">
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-media-list">
                    <view class="three-icon">
                        <view class="one-icon" @tap="toaddfriend">
                            <view class="one-image">
                                <image src="../../static/icon/addfriend.png"></image>
                            </view>
                            <p>添加朋友</p>
                        </view>
                        <view class="one-icon">
                            <view class="one-image">
                                <image src="../../static/icon/qun.png"></image>
                            </view>
                            <p>群聊</p>
                        </view>
                        <view class="one-icon">
                            <view class="one-image">
                                <image src="../../static/icon/guanxin.png"></image>
                            </view>
                            <p>特别关心</p>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="title">我的设备</view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" style="background-color: #fff">
            <view class="uni-media-list">
                <image class="uni-media-list-logo" src="../../static/icon/Mac.png"></image>
                <view class="uni-media-list-body">
                    <view class="uni-media-list-text-top">Mac</view>
                    <view class="uni-media-list-text-bottom">
                        <text>you are my destiny</text>
                        <text>20.34</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="title">我的好友</view>
        <view class="uni-list" v-if="hasLogin&&friends">
            <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in friends" :key="key">
                <view class="uni-media-list" @tap="toperson(value.id)">
                    <view class="uni-media-list-logo">
                        <image :src="value.uAvatar"></image>
                    </view>
                    <view class="uni-media-list-body">
                        <view class="uni-media-list-text-top">{{value.nickname}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="noMessage" v-if="friends.length===0">

            <p style="color: #C3C3C3;">您还没有好友，快去添加吧</p>
        </view>
    </view>
</template>
<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapState(['friends', 'hasLogin'])
        },
        data() {
            return {}
        },
        onReady() {
        },
        onNavigationBarButtonTap(e) {
            this.toaddfriend()
        },
        onLoad() {
        },
        methods: {
            ...mapMutations(['getActiveId']),
            toaddfriend() {
                uni.navigateTo({
                    url: '../addfriend/addfriend'
                })
            },
            toperson(friend_id) {
                this.getActiveId(friend_id)
                uni.navigateTo({
                    url: '../person/person'
                })
            },
            totest() {
                uni.navigateTo({
                    url: '../test/test'
                })
            }
        }
    }
</script>

<style lang="less">
    .noMessage {
        height: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .add {
        .mu-tab {
            color: black;
        }

        .add-people {
            width: 100%;
            margin-top: 0.5rem;
            background: white;

            .input-id {
                padding: 0.5rem 0.75rem;
                display: flex;
                align-items: center;

                input {
                    width: 80%;
                }

                button {
                    background: rgba(0, 0, 0, 0);
                    border: none;
                    color: #2196f3;
                    text-align: right;
                    width: 20%;
                }
            }
        }
    }

    .three-icon {
        width: 100%;
        padding: 20upx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .one-icon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .one-image {
                width: 70upx;
                height: 70upx;

                image {
                    width: 60upx;
                    height: 60upx;
                }
            }

            p {
                font-size: 0.25rem;
            }
        }
    }

    .page {
        background: #efeff4;
    }

    .title {
        padding: 20upx;
    }

    .uni-media-list-body {
        height: auto;
        justify-content: space-around;
    }

    .uni-media-list-text-top {
        // height: 74upx;
        font-size: 28upx;
        overflow: hidden;
    }

    .uni-media-list-logo {
        // 		width: 180upx;
        // 		height: 140upx;
        image {
            border-radius: 100%;
        }
    }

    .uni-media-list-text-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
