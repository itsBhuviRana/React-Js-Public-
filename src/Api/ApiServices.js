import axios from "axios";

const headerData = () => {
    return {
      "Content-Type": "application/json",
    };
  };
  
  const instance = axios.create({
    timeout: 60000,
    headers: headerData(),
  });

  const errorBody = (err) => {
    if (err.code === "ERR_NETWORK") {
      return {
        message: "Please check internet connectivity, then retry",
        status: 501,
      };
    } else if (err.code === "ERR_BAD_RESPONSE") {
      if (err.response.data.code) {
        return {
          message: "Please contact support, issue in server",
          status: 501,
        };
      } else if (err.response.data.message) {
        return {
          message: err.response.data.message,
          status: err.response.data.status,
        };
      } else {
        return {
          message: "Please contact support, something wrong with server",
          status: 501,
        };
      }
    } else if (err.code === "ERR_BAD_REQUEST") {
      if (err.response.data.message) {
        return {
          message: JSON.stringify(err.response.data.message),
          status: 400,
        };
      }
    }
  };
  
  const request = {
    get: (url, headers = { ...headerData() }) =>
      instance.get(url, { headers }).then(responseBody).catch(errorBody),
    post: (url, body, headers = { ...headerData() }) =>
      instance.post(url, body, { headers }).then(responseBody).catch(errorBody),
    put: (url, body, headers = { ...headerData() }) =>
      instance.put(url, body, { headers }).then(responseBody).catch(errorBody),
    delete: (url, headers = { ...headerData() }) =>
      instance.delete(url, { headers }).then(responseBody).catch(errorBody),
  };

 