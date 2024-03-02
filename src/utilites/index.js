import axios from "axios";
import config from "../config";
import { API_METHOD, axiosApiConfig } from "../constant";
import { AxiosError } from "axios";
const { BASE_URL, API_VERSION } = config;

// To be exclusively used for react-router loader/action api Call for axios call
export async function apiCall(
  endpoint,
  payload,
  prefix_baseUrl = false,
  methodType = API_METHOD.GET
) {
  try {
    endpoint = !prefix_baseUrl ? BASE_URL + API_VERSION + endpoint : endpoint;
    const config = axiosApiConfig(endpoint, payload, methodType);
    const result = await axios(config);
    return result.data;
  } catch (error) {
    // Following this approach its expected format for route loader/action error
    // refer https://github.com/remix-run/react-router/issues/10097
    throw {
      data: error,
      internal: false,
      status: error?.response?.status,
      statusText: "Loader error",
    };
  }
}

// Original Implementation to manage response from axios call
export async function apiRequest(
  endpoint,
  payload,
  prefix_baseUrl = false,
  methodType = API_METHOD.GET
) {
  try {
    endpoint = !prefix_baseUrl ? BASE_URL + API_VERSION + endpoint : endpoint;
    const config = axiosApiConfig(endpoint, payload, methodType);
    const result = await axios(config);
    return { data: result.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: {
        message: error?.response?.data?.message || "An error occurred",
        status: error?.response?.status || 500,
        stack: error?.stack || "An error occured",
        name: error?.name,
      },
    };
  }
}

export class ApiError extends Error {
  constructor(message, status, name, stack) {
    super(message);
    this.status = status;
    this.name = name || 'ApiError';
    this.stack = stack;
  }

  static parseError(error) {
    if (error instanceof AxiosError) {
      return {
        message: error?.response?.data?.message || "An error occurred",
        status: error?.response?.status || 500,
        stack: error?.stack || "An error occured",
        name: error?.name,
      };
    } else {
      return {
        message: error.message,
        status: error.status,
        stack: error.stack,
      };
    }
  }
}
