export default {
	nowDate(format) {
		let date = Date.now();

		function add0(m) {
			return m < 10 ? '0' + m : m
		}
		let time = new Date(parseInt(date));
		let y = time.getFullYear();
		let m = time.getMonth() + 1;
		let d = time.getDate();
		let h = time.getHours();
		let mm = time.getMinutes();
		let s = time.getSeconds();
		if (format == 'yyyy-mm-dd hh:mm:ss') {
			return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
		} else {
			return y + '-' + add0(m) + '-' + add0(d);
		}
	},
	formatTimeStamp(fmt, timestamp) {
		//author: meizz
		timestamp = new Date(parseInt(timestamp))
		let o = {
			"M+": timestamp.getMonth() + 1, //月份
			"d+": timestamp.getDate(), //日
			"h+": timestamp.getHours(), //小时
			"m+": timestamp.getMinutes(), //分
			"s+": timestamp.getSeconds(), //秒
			"q+": Math.floor((timestamp.getMonth() + 3) / 3), //季度
			"S": timestamp.getMilliseconds() //毫秒
		}
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (timestamp.getFullYear() + "").substr(4 - RegExp.$1.length))
		for (let k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
		return fmt
	},

	formatSyl(val) {
		if (val) {} else {
			val = 0
		}
		if (val == 0) {
			return '--'
		} else {
			return val.toFixed(2)
		}
	},
	//取整
	formatVol(val) {
		if (val == 0) {
			return '--'
		} else {
			return val.toFixed(0)
		}
	}
}
