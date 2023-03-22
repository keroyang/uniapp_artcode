import {
	list,
	add
} from '@/api/userFeedback'

export default {
	state: {
		text: ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		userFeedbackList({
			commit
		}, data) {
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
		userFeedbackAdd({
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				add(data).then(res => {
					if (res.code == 200) {
						resolve(res)
					} else {
						reject(res)
					}

				}).catch(err => {
					reject(err);
				})
			})
		}

	}
}
