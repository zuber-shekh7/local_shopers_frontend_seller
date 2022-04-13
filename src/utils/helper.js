export const extractError = (error) => {
  return error.response ? error.response.data.message : error.message;
};
