import {
	list,getInfo
} from '@/api/exhibition'

export default {
	state: {
		text: ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		exhibitionList({commit}, data) {
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
		exhibitionGet({commit}, data) {
			return new Promise((resolve, reject) => {
				getInfo(data).then(res => {
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
