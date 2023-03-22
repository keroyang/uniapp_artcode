import {
	list,getInfo
} from '@/api/question'

export default {
	state: {
		text: ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		questionList({commit}, data) {
			return new Promise((resolve, reject) => {
				list(data).then(res => {
					if (res.code == 200) {
						resolve(res)
					} else {
						reject(res)
					}

				}).catch(err => {
					reject(err);
				})
			})
		},
		questionGet({commit}, data) {
			return new Promise((resolve, reject) => {
				getInfo(data).then(res => {
					if (res.code == 200) {
						resolve(res)
					} else {
						reject(res)
					}
		
				}).catch(err => {
					reject(err);
				})
			})
		},

	}
}
