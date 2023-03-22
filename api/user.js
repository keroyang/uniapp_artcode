import request from '@/common/request';



export function list(data) {
	return request({
		method: "get",
		url: "/appUser/list",
		data: data
	})
}


export function getInfo(data) {
	return request({
		method: "get",
		url: "/appUser/" + data,
	})
}


export function register(data) {
	return request({
		method: "post",
		url: "/appUser" ,
		data: data
	})
}
