export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expired_in || 3600 - 5 * 60) * 1000;
  const refreshtoken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expired_in || 3600 - 5 * 60) * 1000;
    console.log("newauthRes:", newAuthRes);
    console.log("new auth Token", newAuthRes.id_token);

    setTimeout(refreshtoken, refreshTiming);
  };
  setTimeout(refreshtoken, refreshTiming);
};
