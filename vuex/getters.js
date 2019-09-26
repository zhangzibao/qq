// 类似计算数据，根据state的数据，筛选或者暴露一格新数据

const getters = {
    // 根据当前选中的朋友的id来筛选出当前的friend的具体数据
    friend(state) {
        if (state.friends.length > 0) {
            return state.friends.find(x => x.id === state.activeId)
        }
    },
    // 对当前消息队列中的消息进行加工，添加对应的好友资料
    nowMessageList(state){
        return state.messageList.find(x => x.friendId === state.activeId)
            ? state.messageList.find(x => x.friendId === state.activeId).list
            : []
    // let list = state.messageList
    // 	list.forEach(x => {
    // 		// 由id筛选出对应的好友
    // 		x.friend = state.friends.find(i => i.id === x.friendId)
    // 		if(x.top === undefined){
    // 			x.top = 0
    // 		}
    //         if(x.slide_x === undefined){
    //             x.slide_x = 0
    //         }
    // 	})
    // 	return list
    }
}

export default getters
