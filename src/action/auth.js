import axios from "axios";
import { apiUrl } from "../utils/apiConfig";

export async function register(email, password) {
  const res = await axios.post(
    apiUrl("/register"),
    {
      email,
      password
    },
    { withCredentials: true }
  );
  if (!res.data || res.data.status === false) {
    throw new Error(res.data?.pesan || "Gagal registrasi");
  }
  return res.data;
}

export async function loginUser(email, password) {
  const res = await axios.post(
    apiUrl("/login"),
    {
      email,
      password
    },
    { withCredentials: true }
  );
  if (!res.data || res.data.status === false) {
    throw new Error(res.data?.pesan || "Gagal login");
  }
  return res.data;
}
