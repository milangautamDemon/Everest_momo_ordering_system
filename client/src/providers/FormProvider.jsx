/* eslint-disable react/prop-types */
import formContext from "../contexts/formContext";
import { useState } from "react";

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [image, setImage] = useState();
  const [errors, setErrors] = useState({});

  //form validation
  const formValidate = () => {
    const newErrors = {};

    const trimName = form.name.trim();
    const trimPrice = form.price.trim();
    const trimCategory = form.category.trim();
    const trimDescription = form.description.trim();
    const parsedPrice = parseInt(trimPrice, 10);

    if (!trimName) newErrors.name = "Menu Name is Required !!!";
    if (!trimPrice) newErrors.price = "Menu Price is Required !!!";
    if (!trimCategory) newErrors.category = "Menu Category is Required !!!";
    if (!trimDescription)
      newErrors.description = "Menu Description is Required !!!";
    if (isNaN(parsedPrice) || parsedPrice < 150 || parsedPrice > 1000)
      newErrors.price =
        "Price Should be number & minimum 150 & maximum 1000 !!!";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  return (
    <formContext.Provider
      value={{ form, setForm, image, setImage, errors, formValidate }}
    >
      {children}
    </formContext.Provider>
  );
};

export default FormProvider;
