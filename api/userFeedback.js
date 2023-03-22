import request from '@/common/request';



export function list(data) {
	return request({
		method: "get",
		url: "/userFeedback/list",
		data: data
	})
}




export function add(data) {
	return request({
		method: "post",
		url: "/userFeedback" ,
		data: data
	})
}
