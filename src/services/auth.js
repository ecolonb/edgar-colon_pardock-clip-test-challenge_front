const baseUrl = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json"
};

export const loginService = async ({ email, password }) => {
  let responseJson = undefined;
  const endPoint = baseUrl.concat("/auth/signin");
  try {
    const response = await window.fetch(endPoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, password })
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

export const signUpService = async (values) => {
  let responseJson = undefined;
  const endPoint = baseUrl.concat("/auth/signup");
  try {
    const response = await window.fetch(endPoint, {
      method: "POST",
      headers,
      body: JSON.stringify(values)
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
