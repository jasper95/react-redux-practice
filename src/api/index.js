import axios from 'axios'

export default (method= 'GET', data, url) => {
	let username = 'drumbi',
		password = 'F0nch3rt0'
	
	return axios({
		auth: {
			username,
			password
		},
		method,
		data,
		url
	})
}