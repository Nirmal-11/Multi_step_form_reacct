import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Names from "./stepForm/Names";
import Address from "./stepForm/Address";
import Contact from "./stepForm/Contact";
import { Review } from "./stepForm/Review";
import Submit from "./stepForm/Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  nickName: "",
  address: "",
  state: "",
  city: "",
  zip: "",
  phone: "",
  email: "",
};
const steps = [
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];
export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  console.log(step);
  const props = { formData, setForm, navigation };
  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }
  return (
    <div>
      <h1>Multistep forms</h1>
    </div>
  );
};
