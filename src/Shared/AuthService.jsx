export const checkAuthStatus = () => {
  const type = localStorage.getItem("userId");
  // let checkUserType;
  // if (type) checkUserType = type.toString().split("")[type.length - 1];
  if (type) return true;

  return false;
};
