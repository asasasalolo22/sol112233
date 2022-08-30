const getIsString = (s: unknown) => {
  if (typeof s !== "string") throw Error;
  return s;
};

export const getEnv = () => ({
  REACT_APP_LOCALHOST_KEY: getIsString(process.env.REACT_APP_LOCALHOST_KEY),
});
