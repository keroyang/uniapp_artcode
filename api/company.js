import request from '@/common/request';



export function list(data){
	return request({
		method:"get",
		url:"/company/list",
		data:data
	})
}