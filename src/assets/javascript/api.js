import axios from 'axios'

const api = 'https://todolist-api.hexschool.io'

export const apiPostSignup = (data) => axios.post(`${api}/users/sign_up`, data)
export const apiPostSignin = (data) => axios.post(`${api}/users/sign_in`, data)
export const apiCheckOut = (cookie) => axios.get(`${api}/users/checkout`, cookie)
export const apiPostSignOut = (data, cookie) => axios.post(`${api}/users/sign_out`, data, cookie)

// todoList
export const apiGetTodos = (cookie) => axios.get(`${api}/todos/`, cookie)
export const apiPostTodo = (data, cookie) => axios.post(`${api}/todos/`, data, cookie)
export const apiPutTodo = (id, data, cookie) => axios.put(`${api}/todos/${id}`, data, cookie)
export const apiDeleteTodo = (id, cookie) => axios.delete(`${api}/todos/${id}`, cookie)
export const apiPatchTodo = (id, cookie) => axios.patch(`${api}/todos/${id}/toggle`, {}, cookie)
