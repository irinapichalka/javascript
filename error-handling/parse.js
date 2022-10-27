export const parseUser = (user) => {
  try {
    JSON.parse(user);
  } catch {
    return null;
  }
  return JSON.parse(user);
};
