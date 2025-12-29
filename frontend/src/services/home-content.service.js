import api from "./axios"

export const getBanner = async () => {
  const response = await api.get("/home-content")
  return response
}
