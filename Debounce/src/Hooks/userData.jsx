import { useQuery } from "@tanstack/react-query";
import { getUser } from "../service/userApi";


 
export const useUsers =()=>{
  return useQuery({
    queryKey:["users"],
    queryFn:getUser
  })
  
}