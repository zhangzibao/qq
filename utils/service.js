
const saveImage = function(url) {
	return uni.downloadFile({
			url: url
		}).then(([err, res]) => {
			if (res.statusCode === 200) {
				return uni.saveFile({
					tempFilePath: res.tempFilePath
				}).then(([error, response]) => {
					return response.savedFilePath
				})
			}
		})
}
export default {
	saveImage
}
