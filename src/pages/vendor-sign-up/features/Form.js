import React, { useMemo, useState } from "react";
import CircleMark from "../../../../public/circle_mark.svg";
import { Button } from "components/general/button";
import PhoneNumber from "components/general/phoneNumber/phoneNumber";
import Input from "components/general/input/Input";
import Select from "components/general/input/Select";
import { STATES } from "utils/constants";
import cleanPayload from "utils/cleanPayload";
import { useApi } from "hooks/useApi";
import Link from "next/link";
const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    category: "Cleaning Service",
    address: "",
    country: "Nigeria",
    state: "",
    phoneNumber: "",
    email: "",
    state: "",
  });

  const [saveSuccess, setSaveSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await registerVendor();
    setSaveSuccess(true);
  };
  const handleChange = (prop, val) => {
    setForm({ ...form, [prop]: val });
  };
  const formDisabled = useMemo(
    () => !Object.values(form).every((x) => x),
    [form]
  );

  const vendorData = useMemo(() => {
    let payload = { ...form, state: form?.state?.value, country: "" };
    payload = cleanPayload(payload);
    return payload;
  }, [form]);

  const { registerVendor, vendorLoading } = useApi({
    vendorData,
  });

  const successPage = () => (
    <div className="flex flex-col mt-[-50px] md:mt-2 gap-2 items-center justify-center w-full min-h-[300px] h-screen">
      <span className="pb-2">
        <CircleMark />
      </span>

      <p className="text-grey-dark font-medium text-[14px] md:text-[18px]">
        Your details has been successfully collected
      </p>
      <p className="text-grey-label font-light text-[13px] md:text-[15px] pb-5">
        Our team will reach out to you soon
      </p>
      <Link href="/">
        <Button
          text="Go back to landing page"
          type="button"
          fullWidth
          onClick={() => {}}
        />
      </Link>
    </div>
  );
  return saveSuccess ? (
    successPage()
  ) : (
    <div className="flex flex-col justify-start items-start text-left w-full">
      <div className="w-full flex flex-col justify-start items-center mb-8 sm:mb-4 mt-20">
        <p className="text-grey-dark font-medium txt-title mb-1 ">
          Become a vendor
        </p>
        <p className="text-grey-dark font-light text-[13px] md:text-[15px]">
          Let’s help your business grow and reach more cusomers
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-start w-full h-full relative sm:px-5 gap-[20px] mb-24 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
          <Input
            label="First name"
            value={form?.firstName}
            onChangeFunc={(val) => handleChange("firstName", val)}
            placeholder="Enter first name"
            required
          />

          <Input
            label="Last name"
            value={form?.lastName}
            onChangeFunc={(val) => handleChange("lastName", val)}
            placeholder="Enter last name"
            required
          />
        </div>
        <Input
          label="Business name"
          value={form?.businessName}
          onChangeFunc={(val) => handleChange("businessName", val)}
          placeholder="Enter business name"
          required
        />

        <Input
          label="Business category"
          value={form?.category}
          onChangeFunc={(val) => handleChange("category", val)}
          placeholder="Enter business category"
          required
          isDisabled
        />
        <Input
          label="Business address"
          value={form?.address}
          onChangeFunc={(val) => handleChange("address", val)}
          placeholder="Enter business address"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full">
          <Input
            label="Country"
            value={form?.country}
            onChangeFunc={(val) => handleChange("country", val)}
            placeholder="Enter country"
            isDisabled
            required
          />

          <Select
            label="State"
            placeholder="Select state"
            options={STATES}
            onChange={(val) => handleChange("state", val)}
            value={form.state}
            fullWidth
          />
        </div>
        <Input
          label="Business email address"
          value={form?.email}
          onChangeFunc={(val) => handleChange("email", val)}
          placeholder="Enter business email address"
          type="email"
          required
        />

        <PhoneNumber
          label="Business phone number"
          value={form.phoneNumber}
          onPhoneChange={(val) => handleChange("phoneNumber", val)}
          placeholder="Enter business phone number"
          // labelClass="!text-black regular-font"
          required
        />

        <Button
          text="Sign up"
          isDisabled={formDisabled}
          onClick={handleSubmit}
          type="submit"
          isLoading={vendorLoading}
          fullWidth
        />
      </form>
    </div>
  );
};

export default Form;
