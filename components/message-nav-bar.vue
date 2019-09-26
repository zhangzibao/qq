<template>
    <view class="uni-navbar" :class="{'uni-navbar-fixed':isFixed,'uni-navbar-shadow':hasShadow}" :style="{'background-color':backgroundColor}">
        <uni-status-bar v-if="insertStatusBar"></uni-status-bar>
        <view class="uni-navbar-header" :style="{color:color}">
            <view class="uni-navbar-btn uni-navbar-btn-left" @tap="onClickLeft">
                <view  class="uni-navbar-btn-icon" >
                    <uni-icon :type="leftIcon" :color="color" :size="24"></uni-icon>
                </view>
                <view  class="uni-navbar-btn-text" >{{leftText}}</view>
                <slot name="left"></slot>
            </view>
            <view class="uni-navbar-container">
                <view  class="uni-navbar-container-title"  v-if="typeof(friend) !== 'undefined'">{{friend.uName}}</view>
                <slot></slot>
            </view>
            <view class="uni-navbar-btn uni-navbar-btn-right" @tap="onClickRight">
                <!-- 优先显示图标 -->
                <view  class="uni-navbar-btn-text">{{rightText}}</view>
                <slot name="right"></slot>
            </view>
        </view>
    </view>
</template>

<script>
import uniStatusBar from './uni-status-bar.vue';
import uniIcon from './uni-icon.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    components: {
        uniStatusBar,
        uniIcon
    },
    props: {
        /**
         * 标题文字
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 左侧按钮文本
         */
        leftText: {
            type: String,
            default: ''
        },
        /**
         * 右侧按钮文本
         */
        rightText: {
            type: String,
            default: ''
        },
        /**
         * 左侧按钮图标
         */
        leftIcon: {
            type: String,
            default: ''
        },
        /**
         * 右侧按钮图标
         */
        rightIcon: {
            type: String,
            default: ''
        },
        /**
         * 是否固定在顶部
         */
        fixed: {
            type: [Boolean, String],
            default: false
        },
        /**
         * 按钮图标和文字颜色
         */
        color: {
            type: String,
            default: '#000000'
        },
        /**
         * 背景颜色
         */
        backgroundColor: {
            type: String,
            default: '#FFFFFF'
        },
        /**
         * 是否包含状态栏，默认固定在顶部时包含
         */
        statusBar: {
            type: [Boolean, String],
            default: ''
        },
        /**
         * 是否使用阴影，默认根据背景色判断
         */
        shadow: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapGetters(['friend']),
        ...mapState(['hasLogin']),
        isFixed() {
            return String(this.fixed) === 'true';
        },
        insertStatusBar() {
            switch (String(this.statusBar)) {
                case 'true':
                    return true;
                case 'false':
                    return false;
                default:
                    return this.isFixed;
            }
        },
        hasShadow() {
            var backgroundColor = this.backgroundColor;
            switch (String(this.shadow)) {
                case 'true':
                    return true;
                case 'false':
                    return false;
                default:
                    return backgroundColor !== 'transparent' && backgroundColor.indexOf('rgba') < 0;
            }
        }
    },
    methods: {
        /**
         * 左侧按钮点击事件
         */
        onClickLeft() {
            this.$emit('clickLeft');
            this.$emit('click-left');
        },
        /**
         * 右侧按钮点击事件
         */
        onClickRight() {
            this.$emit('clickRight');
            this.$emit('click-right');
        }
    }
};
</script>

<style>
  .uni-navbar {
        display: block;
        position: relative;
        width: 100%;
        background-color: #FFFFFF;
        overflow: hidden;
    }

    .uni-navbar-shadow {
        box-shadow: 0 1px 6px #ccc;
    }

    .uni-navbar.uni-navbar-fixed {
        position: fixed;
        z-index: 9;
    }

    .uni-navbar-header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 2.75em;
        line-height: 2.75em;
        /* font-size: 16px; */
		font-size: 1em;
    }

    .uni-navbar-btn {
        position: relative;
        width: 4.125em;
        text-align: center;
        display: flex;
        flex-direction: row;
        padding: 0 0.125em;
    }

    .uni-navbar-btn-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .uni-navbar-btn-icon-left {
        margin-left: 0.625em;
    }

    .uni-navbar-btn-icon-right {
        margin-right: 0.625em;
    }

    .uni-navbar-btn-text {
        padding: 0 0.25em;
        overflow: hidden;
    }

    .uni-navbar-btn-left {
        padding: 0 0 0 0.125em;
    }

    .uni-navbar-btn-right {
        padding: 0 0.125em 0 0;
        flex-direction: row-reverse;
    }

    .uni-navbar-container {
        position: relative;
        flex: 1;
    }

    .uni-navbar-container-title {
        text-align: center;
        color: #fff;
        padding: 0 0.3125em;
        overflow: hidden;
    }
</style>
