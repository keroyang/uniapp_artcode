import {
	list
} from '@/api/banner'

export default {
	state: {
		text: ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		bannerList({commit}, data) {
			return new Promise((resolve, reject) => {
				list(data).then(res => {
					if (res.code == 200) {
						resolve(res.rows)
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
