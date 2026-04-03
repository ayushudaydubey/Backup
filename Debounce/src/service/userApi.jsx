import api from "../api/api";

export const getUsers  = async ({ pageParam = 0 } = {}) => {
	const limit = 10
	const response = await api.get(`?limit=${limit}&skip=${pageParam}`)

	return {
		users: response.data.users,
		total: response.data.total,
		nextSkip: response.data.skip + response.data.limit,
	}

}

export const searchUsers  = async(query)=>{
if(!query)  return []
const response = await api.get(`/search?q=${query}`)
return response.data.users

}