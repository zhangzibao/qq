<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <input type="text" v-model="username" placeholder="请输入账号">
            </view>
            <view class="input-row border">
                <text class="title">密码：</text>
                <input type="text" password="true" v-model="password" placeholder="请输入密码">
            </view>
            <!--            <view class="input-row">
                            <text class="title">邮箱：</text>
                            <input type="text" v-model="email" placeholder="请输入邮箱">
                        </view> -->
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="register">注册</button>
        </view>
    </view>
</template>

<script>

    export default {
        data() {
            return {
                username: '',
                password: ''
                // email: ''
            }
        },
        methods: {
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.username.trim().length < 2) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 2 个字符'
                    })
                    return
                }
                if (this.password.trim().length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    })
                    return
                }
                //                 if (this.email.length < 3 || !~this.email.indexOf('@')) {
                //                     uni.showToast({
                //                         icon: 'none',
                //                         title: '邮箱地址不合法'
                //                     });
                //                     return;
                //                 }

                const data = {
                    username: this.username.trim(),
                    password: this.password.trim()
                    // email: this.email
                }

                uni.request({
                    url: 'http://zhangzibao.xyz:8080/myqqServer/api/register',
                    data: data,
                    header: {
                        'content-type': 'application/json'
                    },
                    method: 'POST'
                }).then(([err, res]) => {
                    if (res.statusCode == 200) {
                        // console.log(res.data);
                        uni.showToast({
                            title: '注册成功'
                        })

                        uni.navigateBack({
                            delta: 1
                        })
                    } else {
                        uni.showToast({
                            icon: 'none',
                            title: res.data
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
</style>
