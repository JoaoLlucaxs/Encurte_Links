import axios from 'axios'

export const key='4bf221c0926300991255cefe82a8d3d399a5ab19'

const api=axios.create({
    baseURL:"https://api-ssl.bitly.com/v4/",
    headers:{
        "Authorization":`Bearer ${key}`
    }
})

export default api