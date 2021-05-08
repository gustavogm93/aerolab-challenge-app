import axios from 'axios'

const init = (baseURL, timeout = 20000) => {
    axios.defaults.baseURL = baseURL
    axios.defaults.timeout = timeout
}

export default {
    init,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
}


