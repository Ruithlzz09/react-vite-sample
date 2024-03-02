const API_METHOD = {
  GET: "get",
  POST: "post",
};

const METHOD_TYPES = Object.values(API_METHOD);
const axiosApiConfig = (url, data, method = API_METHOD.GET) => {
  if (!METHOD_TYPES.includes(method)) {
    throw new Error(`Mentioned api call method${method} not supported`);
  }
  return {
    method,
    maxBodyLength: Infinity,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
};

export { API_METHOD, axiosApiConfig };