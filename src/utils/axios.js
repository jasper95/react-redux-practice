import axios from 'axios'

export default (data, url, method= 'GET') => {
  return axios({
	method,
	data,
	url,
	proxy: {
	  host: 'localhost',
      port: 5000
    }
  })
}