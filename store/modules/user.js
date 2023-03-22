import {
	list,
	getInfo,
	register
} from '@/api/user'

export default {
	state: {
		text: ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		userList({
			commit
		}, data) {
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
		userGet({
			commit
		}, data) {
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
		userRegister({
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				register(data).then(res => {
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
