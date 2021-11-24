const baseUrl = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json"
};

export const getAllCustomers = async () => {
  const token = sessionStorage.getItem("token");
  let responseJson = undefined;
  headers.Authorization = token;
  const endPoint = baseUrl.concat("/customer/all");
  try {
    const response = await window.fetch(endPoint, {
      method: "GET",
      headers
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      ok: false,
      error
    };
  }
  return responseJson;
};

export const newCustomer = async (customerData) => {
  const token = sessionStorage.getItem("token");
  let responseJson = undefined;
  headers.Authorization = token;
  const endPoint = baseUrl.concat("/customer/new");
  const {
    name,
    last_name,
    email,
    phone_number,
    city,
    state,
    line1,
    line2,
    postal_code
  } = customerData;

  const sendData = {
    name,
    last_name,
    email,
    phone_number,
    address: {
      city,
      state,
      line1,
      line2,
      postal_code,
      country_code: "MX"
    }
  };

  try {
    const response = await window.fetch(endPoint, {
      method: "POST",
      headers,
      body: JSON.stringify(sendData)
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      ok: false,
      error
    };
  }
  return responseJson;
};

export const updateCustomer = async (customerId, customerData) => {
  const token = sessionStorage.getItem("token");
  let responseJson = undefined;
  headers.Authorization = token;
  const endPoint = baseUrl.concat("/customer/update/" + customerId);
  const {
    name,
    last_name,
    email,
    phone_number,
    city,
    state,
    line1,
    line2,
    postal_code
  } = customerData;

  const sendData = {
    name,
    last_name,
    email,
    phone_number,
    address: {
      city,
      state,
      line1,
      line2,
      postal_code,
      country_code: "MX"
    }
  };

  try {
    const response = await window.fetch(endPoint, {
      method: "PATCH",
      headers,
      body: JSON.stringify(sendData)
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      ok: false,
      error
    };
  }
  return responseJson;
};
