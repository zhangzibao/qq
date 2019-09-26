<template>
	<view class="page">
		<view class="img-view" v-if="hasLogin">
			<image :src="userData.uAvatar"></image>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" style="background-color: #fff">
			<view class="uni-media-list">
				<image class="uni-media-list-logo" src="../../static/icon/phone.png"></image>
				<view class="uni-media-list-body">
					<view class="uni-media-list-text-top">手机</view>
					<view class="uni-media-list-text-bottom">
						<text>{{userData.uPhone}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="uni-list-cell" hover-class="uni-list-cell-hover" style="background-color: #fff">
			<view class="uni-media-list">
				<image class="uni-media-list-logo" src="../../static/icon/address.png"></image>
				<view class="uni-media-list-body">
					<view class="uni-media-list-text-top">位置</view>
					<view class="uni-media-list-text-bottom">
						<text>{{userData.uAddress}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" style="background-color: #fff">
			<view class="uni-media-list">
				<image class="uni-media-list-logo" src="../../static/icon/birthday.png"></image>
				<view class="uni-media-list-body">
					<view class="uni-media-list-text-top">生日</view>
					<view class="uni-media-list-text-bottom">
						<text>{{userData.uBirthday}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="myfooter" v-if="activeId === self.id">
			<button type="primary" disabled="true" plain="true" style="width: 80%">这是我自己</button>
		</view>
		<view class="myfooter" v-else-if="friend !== undefined">
			<button type="primary" disabled="true" plain="true">打电话</button>
			<button type="primary" @tap="showDialog_x()">发消息</button>
		</view>
		<view class="myfooter" v-else>
			<button type="primary" @tap="addnewfriend()" style="width: 80%">加好友</button>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'person',
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['activeId', 'self','hasLogin','stranger']),
        ...mapGetters(['friend']),
        userData() {
            // 判断是否有当前活跃的friend，没有的话就获取自己的数据，展示个人页面，有的话就展示当前活跃朋友的页面
            if (this.activeId === this.self.id) {
                return this.self;
            } else if (this.friend !== undefined) {
                return this.friend
            }else{
                return this.stranger
			}
        }
    },
    onLoad() {
        // console.log(this.activeId)

    },
    methods: {
        addnewfriend(){
            if(this.stranger){
                this.$store.dispatch("addnewfriend").then(()=>{
                    uni.showToast({
                        title: '添加好友成功'
                    })
                })
			}
		},
        showDialog_x() {
            if (this.activeId !== this.self.id) {
                uni.navigateTo({
                    url: '../dialog/dialog'
                });
            }
        }
    }
};
</script>

<style lang="less" scoped>
.myfooter {
    width: 90%;
    position: fixed;
    padding: 0 5%;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    border-top: 2upx solid #efeff4;
    background-color: #fff;
    align-items: center;
    button {
        width: 40%;
        height: 60upx;
        line-height: 60upx;
    }
}
image,
.img-view {
    width: 750upx;
    height: 500upx;
    position: relative;
    border-bottom: 2upx solid #ff4081;
}
.page-section-title {
    margin-top: 50upx;
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
    width: 60upx;
    height: 60upx;
    padding: 20upx 0;
    margin-right: 50upx;
}
.uni-media-list-text-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
