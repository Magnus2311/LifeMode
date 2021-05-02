export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export const get = (url) => {
  return fetch(
    (url,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
    })
  );
};

export const post = (url, params) => {
  return fetch(url, {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
