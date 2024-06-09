import { useContext, useState } from "react";
import Input from "../../../components/common/Input";
import PrimaryButton from "../../../components/common/PrimaryButton";
import talkContext from "../../../contexts/talkContext";
import toast from "react-hot-toast";
import axios from "axios";

const AddCustomerTalk = () => {
  const [name, setName] = useState("");
  const [words, setWords] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  // const [errors, setErrors] = useState("");

  const { setForm } = useContext(talkContext);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // Ensure `files` is not empty before accessing files[0]
      if (files && files.length > 0) {
        console.log("inside", files[0]);
        setImage(files[0]);
        if (previewUrl) {
          setPreviewUrl(URL.createObjectURL(files[0]));
        }
      } else {
        console.log("error data");
        // Handle case where no file is selected (optional)
        setImage(null); // Or some default value
        if (previewUrl) {
          setPreviewUrl("");
        }
      }
    }
    if (name === "customerName") {
      setName(value);
    }
    if (name === "customerWords") {
      setWords(value);
    }
  };

  const handleCustomerTalkForm = async (e) => {
    e.preventDefault();
    const newEntry = { name, words, image };
    console.log(newEntry);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/add-customerTalk",
        newEntry,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setForm((prev) => [...prev, newEntry]);
      toast.success(response.data.msg, "top-center");
    } catch (error) {
      toast.error(error.response.data.err_code);

      console.error("Error submitting form:", error);
    }
    setName("");
    setWords("");
    setImage(null);
  };

  return (
    <div className="flex w-full justify-center">
      <form
        method="post"
        encType="multipart/form-data"
        className="my-10 flex w-5/6 flex-col gap-10 rounded-md border border-white-light px-8 py-8 shadow-md md:w-4/6 lg:w-3/6"
      >
        <div className="flex w-full flex-col">
          {/* {previewUrl && (
            <div className="flex justify-center">
              <img src={previewUrl} alt="Preview" className="h-16 w-20" />
            </div>
          )} */}
          <label
            htmlFor="image"
            className="font-oswald font-semibold text-secondary"
          >
            Image
          </label>

          {
            <Input
              name="image"
              accept="image/*"
              id="image"
              onChange={handleInputChange}
              type="file"
              required
            />
          }
          {/* {errors.image && (
            <span className="text-xs text-danger-light">{errors.image}</span>
          )} */}
        </div>

        <div className="flex w-full flex-col">
          <label
            htmlFor="customerName"
            className="font-oswald font-semibold capitalize text-secondary"
          >
            Customer name
          </label>
          <Input
            onChange={handleInputChange}
            name="customerName"
            inputValue={name}
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <label
            htmlFor="customerWords"
            className="font-oswald font-semibold capitalize text-secondary"
          >
            Customer words
          </label>
          <textarea
            onChange={handleInputChange}
            value={words}
            name="customerWords"
            id="customerWords"
            rows="6"
            className="rounded-md border border-black-light bg-white-light"
          />
        </div>
        <PrimaryButton
          onClick={handleCustomerTalkForm}
          buttonName="submit"
          classFeature="px-8 bg-primary font-bold w-fit hover:bg-primary-dark"
        />
      </form>
    </div>
  );
};

export default AddCustomerTalk;
