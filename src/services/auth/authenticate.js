export const authenticate = () => {
  return fetch("api/users/getUsername", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();

      throw new Error("Unauthorized");
    })
    .then((userResponse) => {
      return userResponse;
    })
    .catch(() => {
      return {};
    });
};

export const sighOut = async () => {
  await fetch("api/users/logout", {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
