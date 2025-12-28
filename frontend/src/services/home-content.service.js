import api from "./axios"


export const getBanner = () => {
 

  return api.get("/home-content")
}

