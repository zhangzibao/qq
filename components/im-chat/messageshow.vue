<template>
	<view >
	<view class="m-item" :id="'message'+id" v-for="(message,key) in messageList_x" :key="key">
		<view class="m-left">
			<image class="head_icon" :src="userData.friend.uAvatar" v-if="message.isreceive&&showImg"></image>
		</view>
		<view class="m-content">
			<view class="m-content-head" :class="{'m-content-head-right':!message.isreceive}">
				<view :class="message.isreceive ? 'm-content-head-home' : 'm-content-head-customer'">{{message.messageContent}} </view>
			</view>
		</view>
		<view class="m-right">
			<image class="head_icon" :src="userData.self.uAvatar" v-if="!message.isreceive&&showImg"></image>
		</view>
	</view>
	</view>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
	onLoad() {
		// 		setTimeout(() => {
		// 			this.showImg = true;
		// 		}, 500);
	},
	data() {
		return {
			showImg: true
		};
	},
	computed: {
		...mapGetters(['nowMessageList', 'friend']),
		...mapState(['self', 'hasLogin']),
		userData() {
			return {
				self: this.self,
				friend: this.friend
			};
		},
		// 获取到当前的聊天记录
		messageList_x() {
			// 赛选信息
			let message = [];
			if (this.nowMessageList && this.friend) {
				message = this.nowMessageList.find(x => x.friendId === this.friend.id);
			}
			if (message) return message.list;
			else return [];
		}
	},
	updated() {
		this.$emit('scrollC');
	}
};
</script>

<style>
.m-item {
	display: flex;
	flex-direction: row;
	padding: 20upx 0;
}
.m-left {
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
}
.m-right {
	display: flex;
	width: 120upx;
	justify-content: center;
	align-items: flex-start;
}
.head_icon {
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.m-content-head {
	position: relative;
}
.m-content-head-right {
	display: flex;
	justify-content: flex-end;
}
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
</style>
