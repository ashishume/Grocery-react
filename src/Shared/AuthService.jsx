export const checkAuthStatus = () => {
  const type = localStorage.getItem("type");
  let checkUserType;
  if (type) checkUserType = type.toString().split("")[type.length - 1];
  if (checkUserType == 3) return true;

  return false;
};
