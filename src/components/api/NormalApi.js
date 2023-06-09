import axios from "axios";
import { baseUrl } from "../Constants/Constants";

export const getFetch = async (url) => {
  const bearerToken = localStorage.getItem("token");
  try {
    const response = await axios({
      url: `${baseUrl}${url}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      return await response.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      return 401;
    } else {
      return error.response;
    }
  }
};
export const getOneFetch = async (url, id) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const response = await axios({
      url: `${baseUrl}${url}/${id}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      return await response.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      return 401;
    } else {
      return error.response;
    }
  }
};
export const postFetch = async (url, data) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${baseUrl}${url}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      data: data,
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      return 401;
    } else {
      return error.response;
    }
  }
};
export const postFetchById = async (url, id = "", data) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: `${baseUrl}${url}/${id}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
      data: data,
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      return 401;
    } else {
      return error.response;
    }
  }
};
export const patchFetch = async (url, data) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const response = await axios({
      method: "put",
      url: `${baseUrl}${url}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      data,
      withCredentials: true,
    });
    if (response.status === 200) {
      return await response.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      return 401;
    } else {
      return error.response;
    }
  }
};
export const deleteFetch = async (url, id) => {
  try {
    const bearerToken = localStorage.getItem("token");
    const response = await axios({
      method: "delete",
      url: `${baseUrl}${url}/${id}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response.status === 401) {
      return 401;
    } else {
      return error.response;
    }
  }
};
