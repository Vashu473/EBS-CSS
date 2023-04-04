import { useFetch, usePost } from "./Api"
import { pathToUrl } from "./pathCompiler"

export const useLogin = (params)=>{
return usePost(pathToUrl("/user/login"),params)
}
export const useSignup = (params)=>{
return usePost(pathToUrl("/user/signup"),params)
}
export const useGetProfile = (email,params)=>{
return useFetch(pathToUrl("/user/profile",{email}),params)
}