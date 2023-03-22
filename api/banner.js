import request from '@/common/request';



export function list(data){
	return request({
		method:"get",
		url:"/banner/list",
		data:data
	})
}