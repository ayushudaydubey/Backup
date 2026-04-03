import api from "../api/api";

export const getUser  = async({pageParam = 0}) =>{
  const limit =  10 ;
  const response   = await api.get(`/?limit=${limit}&skip=${pageParam}`)

  return {
    users:response.data.users,
    nextSkip:pageParam+limit,
    total:response.data.limit

  }

}