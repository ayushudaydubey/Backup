import { useQuery } from "@tanstack/react-query";
import { getUsers} from "../service/userApi";


 
export const useUsers =()=>{
  return useQuery({
    queryKey:["users"],
    queryFn:getUsers
  })
  
}