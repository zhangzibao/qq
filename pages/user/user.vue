<template>
   <view class="content"  v-if="hasLogin">
		 <view class="me-mainer">
                <view class="user">
					<image :src="self.uAvatar" ></image>
                </view>
				<view style="width: 15%;height:20upx;"></view>
				<text>{{self.nickname}}</text>
		</view>
				<view class="btn-row">
						<button type="warn" @tap="bindLogout">退出登录</button>
				</view>
    </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
				}
    },
    computed: {
        ...mapState(['hasLogin', 'self'])
    },
    onLoad() {
        let userInfo = uni.getStorageSync('userInfo');
        if (userInfo) {
            this.$store.replaceState(userInfo);
            this.$store.dispatch("updateData");
			// 打开长链接
			uni.connectSocket({
				url: 'ws://zhangzibao.xyz:8080/myqqServer/websocket/' + userInfo.user_id
			})
        }
        if (!this.hasLogin) {
            try {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    showCancel: false,
                    success: res => {
                        if (res.confirm) {
                            uni.reLaunch({
                                url: '../login/login'
                            });
                        }
                    }
                });
            } catch (e) {
                // error
                // console.log(e);
            }
        }
    },
    methods: {
        ...mapMutations(['logout']),
        bindLogout() {
            this.logout();
            uni.reLaunch({ url: '../login/login' });
        }
    }
};
</script>

<style lang="less" scoped>
@header_size: 150upx;
.me-mainer {
    background: #efeff4;
    display: flex;
    flex-direction: row;
    width: 80%;
    padding: 20upx 10%;
    min-height: 20upx;
    justify-content: center;
    align-items: center;
    .user {
        width: @header_size;
        height: @header_size;
        border-radius: 100%;
        image {
            width: @header_size;
            height: @header_size;
            border-radius: 100%;
            // border: 1px solid #262626;
            margin-bottom: 0.1rem;
        }
    }
    text {
        font-weight: 600;
        font-size: 1em;
    }
}
</style>
