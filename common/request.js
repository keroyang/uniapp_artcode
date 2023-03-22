const BASE_URL = 'http://127.0.0.1:8090/api'; //域名抽取

const request = (config) => {
	// 处理 apiUrl
	config.url = BASE_URL + config.url;
	if(!config.data){
		config.data = {};
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(config).then(responses => {
			// 异常
			if (responses[0]) {
				reject({message : "网络超时"});
			} else {
				let response = responses[1].data; 
				resolve(response);
			}
		}).catch(error => {
			reject(error);
		})
	})
	return promise;
};
export default request;