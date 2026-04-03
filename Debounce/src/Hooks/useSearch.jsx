import { useQuery } from "@tanstack/react-query";
import { searchUsers } from "../service/userApi";

export const useSearchUser = (query)=>{
  return useQuery({
    queryKey:["users",query],
    queryFn:()=> searchUsers(query),
    enabled: !!query
  })
}

