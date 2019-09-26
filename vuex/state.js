// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
const state = {
	hasLogin: false,
	user_id: 0,
	Authorization:"",
	socketOpen:false,
	// 初始化基础数据
	friends:[],
	self:{},
	// 当前被选中或者在聊天中的friend的id
	activeId: 0,
	isAjax:false,
	// 聊天队列，这里为每个朋友添加了一个聊天队列，偷懒写法，如果有需要可以改成动态添加
	// id是作为聊天队列的标记，list是聊天内容，list里的数据格式{id:xx, message:xxx},组件内会根据id来将对话插入
	// 到左边，还是右边，判断message是自己还是ai发出的
	messageList: {},
	// 消息队列副本，由于没有数据库，所以采用这样折中的方法
	messageListFB: {},
	stranger:{}
}
export default state
