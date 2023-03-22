import {
	list
} from '@/api/company'

export default {
	state: {
		text: ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		companyList({commit}, data) {
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

	}
}
