export const extractError = (error) => {
  return error.response
    ? error.response.data.message
    : error.message
    ? error.message
    : error.error;
};

export const orderStatus = [
  "Processing",
  "Received",
  "Dispatched",
  "Delivered",
  "Returned",
  "Cancelled",
];

export const units = [
  "piece",
  "kg",
  "gm",
  "hour",
  "day",
  "month",
  "year",
  "liter",
  "ml",
];
