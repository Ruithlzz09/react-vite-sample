const env = import.meta.env

const config =  {
  BASE_URL: env.VITE_BASE_URL || "http://localhost:8021",
  API_VERSION: env.VITE_API_VERSION || "/api/v1",
};

export default config
