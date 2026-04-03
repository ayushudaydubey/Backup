import api from "../api/api";

export const getUser  = async()=>{
const response  = await api.get()
return response.data.users

}

export const searchUsers  = async(query)=>{
if(!query)  return []
const response = await api.get(`/search?q=${query}`)
return response.data.users

}