import request from '@/common/request';



export function list(data){
	return request({
		method:"get",
		url:"/question/list",
		data:data
	})
}


export function getInfo(data){
	return request({
		method:"get",
		url:"/question/"+data,
	})
}