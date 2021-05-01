import { post, get, handleResponse, handleError } from "../../api/apiUtils";

const baseUrl = "/api/users/";

export const authenticate = () => {
  return get(baseUrl + "getUsername")
    .then(handleResponse)
    .then((userResponse) => {
      return userResponse;
    })
    .catch(handleError);
};

export const sighOut = async () => {
  await post(baseUrl + "logout");
};

export const checkConfirmationToken = (email, token) => {
  return get(`${baseUrl}confirmEmail?email=${email}&token=${token}`)
    .then((response) => handleResponse(response).then(() => true))
    .catch((error) => handleError(error));
};
