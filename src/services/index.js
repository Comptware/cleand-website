import { apiInstance2 } from "utils/apiInstance";

const apis = {
  registerUser: (data) =>
    apiInstance2("users/waitlist", {
      method: "POST",
      body: data,
    }),
  registerVendor: (data) =>
    apiInstance2("vendors/waitlist", {
      method: "POST",
      body: data,
    }),
};

export default apis;
