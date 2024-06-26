import axios from "axios";

export const isTokenValid = async () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (!token) {
    return false;
  }

  try {
    await axios.get("http://127.0.0.1:8000/api/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (err) {
    console.error("Token Validation Failed:\n", err);
    return false;
  }

  //   create axios request to http:127.0.0.1:8000/api/profile/ to check if the token is valid (by passing token to the authorization: bearer `token` in the header)
};
