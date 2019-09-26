<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <input type="text" v-model="username" placeholder="请输入账号">
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <input type="text" password="true" v-model="password" placeholder="请输入密码">
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            <navigator url="../reg/reg">注册账号</navigator>

<!--            <text>|</text>
            <navigator url="../pwd/pwd">忘记密码</navigator> -->
        </view>
				<div class="box">

				<span class="line"></span>

				<span class="text">其他登录方式</span>

				<span class="line"></span>

				</div>
<!--        <view class="oauth-row" v-if="hasProvider" >
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @click="oauth(provider.value)"></image>
            </view>
        </view> -->
    </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            providerList: [],
            hasProvider: false,
            username: '',
            password: ''
        };
    },
    methods: {
        initProvider() {
            // const filters = ['weixin', 'qq', 'sinaweibo'];
            const filters=['weixin']
            uni.getProvider({
                service: 'oauth',
                success: res => {
                    if (res.provider && res.provider.length) {
                        for (let i = 0; i < res.provider.length; i++) {
                            if (~filters.indexOf(res.provider[i])) {
                                this.providerList.push({
                                    value: res.provider[i],
                                    image: '../../static/img/' + res.provider[i] + '.png'
                                });
                            }
                        }
                        this.hasProvider = true;
                    }
                },
                fail: err => {
                    // console.error('获取服务供应商失败：' + JSON.stringify(err));
                }
            });
        },
        initPosition() {
            /**
             * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
             * 反向使用 top 进行定位，可以避免此问题。
             */
            this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
        },
        bindLogin() {
            if (this.username.length < 1) {
                uni.showToast({
                    icon: 'none',
                    title: '用户名不允许为空'
                });
                return;
            }
            if (this.password.length < 0) {
                uni.showToast({
                    icon: 'none',
                    title: '密码不允许为空'
                });
                return;
            }
            uni.request({
                url: 'http://zhangzibao.xyz:8080/myqqServer/api/login',
                data: {
                    username: this.username,
                    password: this.password
                },
                header: {
                    'content-type': 'application/json'
                },
                method: 'POST'
            })
                .then(([err, res]) => {
                    uni.showLoading({
                        title: '登录中'
                    });
                    if (res.statusCode === 200) {
                        this.toMain(res.data);
                    } else {
                        uni.hideLoading()
                        uni.showToast({
                            icon: 'none',
                            title: res.data
                        });
                    }
                })
                .catch(e => {
                    uni.showToast({
                        icon: 'none',
                        title: '网络连接错误'
                    });
                });
        },
        oauth(value) {
            uni.showLoading({
                title: '登录中'
            });
            uni.login({
                provider: value,
                success: res => {
                    uni.getUserInfo({
                        provider: value,
                        success: infoRes => {
                            /**
                             * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                             * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                             */
                            uni.request({
                                url: 'http://zhangzibao.xyz:8080/myqqServer/api/oauth',
                                data:infoRes.userInfo,
                                header: {
                                    'content-type': 'application/json'
                                },
                                method: 'POST'
                            })
                                .then(([err, res]) => {

                                    if (res.statusCode === 200) {
                                        this.toMain(res.data);
                                    } else {
                                        uni.showToast({
                                            icon: 'none',
                                            title: res.data
                                        });
                                    }
                                })
                                .catch(e => {
                                    uni.hideLoading();
                                    uni.showToast({
                                        icon: 'none',
                                        title: '网络连接错误'
                                    });
                                });
                        }
                    });
                },
                fail: err => {
                    uni.hideLoading();
                    uni.showToast({
                        icon: 'none',
                        title: '授权登录失败，请使用其他登录方式'
                    });
                }
            });
        },
        toMain(userInfo) {
            this.$store.dispatch('Login', userInfo).then(res => {
                uni.hideLoading();
                uni.reLaunch({
                    url: '../user/user'
                });
                // console.log('登录成功');
            });
        }
    },
    onLoad() {
//         this.initPosition();
//         this.initProvider();
    }
};
</script>

<style lang="less" scoped>
.box {
    min-height: 40upx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
		margin: 40upx 0;
    .line {
        height: 1px;
        flex-grow: 1;
        background-color: #aaa;
    }
    .text {
        margin: 0 5px;
				color: #aaa;
    }
}

.action-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.action-row navigator {
    color: #007aff;
    padding: 0 20upx;
}

.oauth-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40upx;
}

.oauth-image {
    width: 100upx;
    height: 100upx;
    border: 1px solid #dddddd;
    border-radius: 100%;
    margin: 0 40upx;
    background-color: #ffffff;
}

.oauth-image image {
    width: 60upx;
    height: 60upx;
    margin: 20upx;
}
</style>
