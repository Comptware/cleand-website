import { useState } from "react";
import apis from "services";
import { successToast } from "components/general/toast/toast";

export const useApi = ({ userData, vendorData }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [vendorLoading, setVendorLoading] = useState(false);

  const registerUser = async () => {
    try {
      setUserLoading(true);
      await apis.registerUser(userData);
      successToast(
        `Success!`,
        "Your email has been added to the waitlist. Thank you."
      );
    } finally {
      setUserLoading(false);
    }
  };

  const registerVendor = async () => {
    try {
      setVendorLoading(true);
      await apis.registerVendor(vendorData);
      successToast(`Success!`, "Your email has been registered. Thank you.");
    } finally {
      setVendorLoading(false);
    }
  };

  return {
    registerUser,
    registerVendor,
    userLoading,
    vendorLoading,
  };
};
