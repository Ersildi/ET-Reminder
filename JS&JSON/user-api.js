const userAPI = "http://localhost:3000/users";

async function getUsersAPI(filters = undefined) {
  let getUserAPI = userAPI;

  if (filters && Object.keys(filters).length) {
    getUserAPI += "?";
    getUserAPI += Object.keys(filters).reduce(
      (queryParamsString, key, i, array) => {
        queryParamsString += `${key}=${filters[key]}`;
        if (i < array.length - 1) {
          queryParamsString += "&";
        }
        return queryParamsString;
      },
      ""
    );
  }
  const fetchObjectResponse = await fetch(getUsersAPIRequest, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  return await fetchObjectResponse.json();
}

async function createUserAPI(user) {
  if (
    user &&
    user.usernameRegister &&
    user.emailRegister &&
    user.passwordRegister
  ) {
    const fetchObjectResponse = await fetch(userAPI, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}
