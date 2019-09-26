<template>
    <view class="page">
        <view class="head">
            <view class="segmented-control" :class="styleType" :style="wrapStyle">
                <view v-for="(item, index) in items" class="segmented-control-item" :class="styleType" :key="index"
                      :style="index === current ? activeStyle : itemStyle"
                      @tap="onClickItem(index)">
                    {{item}}
                </view>
            </view>
        </view>
        <view class="page-section">
            <view class="uni-list">
                <view class="uni-list-cell">
                    <view class="uni-icon uni-icon-search"></view>
                    <input class="uni-input"
                           confirm-type="search"
                           @confirm="searchfriend"
                           placeholder="输入用户名搜索" :value="inputClearValue" @input="bindClearInput"/>
                    <view class="uni-icon uni-icon-clear" v-if="showClearIcon" @tap="clearIcon"></view>
                    <button style="margin-left: 10upx;" id='msg-type' type="search" @tap="searchfriend">搜索</button>
                </view>
            </view>
        </view>
        <view class="title">{{outcome}}</view>
    </view>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex';
    export default {
    data() {
        return {
            outcome:"",
            showClearIcon: false,
            inputClearValue: '',
            items: ['找人', '找群', '找公众号'],
            styles: [
                {
                    value: 'text',
                    text: '文字',
                    checked: true
                },
                {
                    value: 'button',
                    text: '按钮'
                }
            ],
            colors: ['#007aff', '#4cd964', '#dd524d'],
            current: 0,
            activeColor: '#007aff',
            styleType: 'text'
        };
    },
    computed: {
        wrapStyle() {
            let styleString = '';
            switch (this.styleType) {
                case 'text':
                    styleString = `border:0;`;
                    break;
                default:
                    styleString = `border-color: ${this.activeColor}`;
                    break;
            }
            return styleString;
        },
        itemStyle() {
            let styleString = '';
            switch (this.styleType) {
                case 'text':
                    styleString = `color:#000;border-left:0;`;
                    break;
                default:
                    styleString = `color:${this.activeColor};border-color:${this.activeColor};`;
                    break;
            }
            return styleString;
        },
        activeStyle() {
            let styleString = '';
            switch (this.styleType) {
                case 'text':
                    styleString = `color:${
                        this.activeColor
                    };border-left:0;border-bottom-style:solid;`;
                    break;
                default:
                    styleString = `color:#fff;border-color:${this.activeColor};background-color:${
                        this.activeColor
                    }`;
                    break;
            }
            return styleString;
        }
    },
    methods: {
        ...mapMutations(['getActiveId','setStranger']),
        toman(man) {
            this.getActiveId(man.id)
            this.setStranger(man)
            uni.navigateTo({
                url: '../person/person'
            })
        },
        searchfriend() {
            if (this.inputClearValue.length) {
                uni.showLoading({
                    title: '加载中'
                });
                const url =
                    'http://zhangzibao.xyz:8080/myqqServer/api/Alluser/' + this.inputClearValue;
                uni.request({
                    url: url,
                    method: 'GET'
                }).then(([err, res]) => {
                    if (res.data.length) {
                        this.toman(res.data[0])
                    } else {
                        this.outcome = "没有找到结果"
                    }
                    uni.hideLoading()
                });
            }
        },
        onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
            }
        },
        bindClearInput: function(e) {
            this.inputClearValue = e.target.value;
            this.showClearIcon = e.target.value.length > 0;
        },
        clearIcon: function() {
            this.inputClearValue = '';
            this.showClearIcon = false;
            this.outcome = ""
        }
    }
};
</script>

<style lang="less" scoped>
.title {
    /*padding: 20upx;*/
    margin-top: 100upx;
    font-size: 1.1em;
    text-align: center;
}
.uni-list-cell {
    padding-left: 5%;
    padding-right: 2%;
    align-items: center;
    width: 93%;
    .uni-input {
        flex: 1;
        height: 65upx;
        width: auto;
        background: #fff;
        padding-left: 10upx;
        /* border: solid 1upx #ddd; */
        // padding: 10upx !important;
        font-family: verdana !important;
        overflow: hidden;
        // border-radius: 15upx;
    }
}

.head {
    padding: 0 40upx;
    margin-top: 20upx;
    height: 100upx;
}
.segmented-control {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-size: 30upx;
    border-radius: 12upx;
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
    // margin: 20upx;
}

.segmented-control.button {
    border: 1upx solid;
}

.segmented-control.text {
    border: 0;
    border-radius: 0upx;
}

.segmented-control-item {
    // flex: ;
    min-width: 150upx;
    text-align: center;
    line-height: 70upx;
    box-sizing: border-box;
    margin: 0 40upx;
}

.segmented-control-item.button {
    border-left: 1upx solid;
}

.segmented-control-item.text {
    border-left: 0;
}

.segmented-control-item:first-child {
    border-left-width: 0;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300upx;
    text-align: center;
}

.color-tag {
    width: 50upx;
    height: 50upx;
}
</style>
