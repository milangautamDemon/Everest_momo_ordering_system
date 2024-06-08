import { useContext, useState } from "react";
import Input from "../../../components/common/Input";
import PrimaryButton from "../../../components/common/PrimaryButton";
import talkContext from "../../../contexts/talkContext";
import toast from "react-hot-toast";

const AddCustomerTalk = () => {
  const [name, setName] = useState("");
  const [words, setWords] = useState("");
  const { setForm } = useContext(talkContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "customerName") {
      setName(value);
    }
    if (name === "customerWords") {
      setWords(value);
    }
  };

  const handleCustomerTalkForm = async (e) => {
    e.preventDefault();
    const newEntry = { name, words };
    console.log(newEntry);

    try {
      const response = await fetch(
        "http://localhost:3000/api/admin/add-customerTalk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEntry),
        },
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Successfully added:", result);
        setForm((prev) => [...prev, newEntry]);

        setName("");
        setWords("");
        toast.success(result.msg, "top-center");
      } else {
        toast.error(result.err_code);
        console.error("Failed to add entry:", response.err_code);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <form className="mt-10 flex w-5/6 flex-col gap-10 rounded-md border border-white-light px-8 py-8 shadow-md md:w-4/6 lg:w-3/6">
        <div className="flex w-full flex-col">
          <label
            htmlFor="customerName"
            className="text-xl font-bold capitalize text-secondary"
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
            className="text-xl font-bold capitalize text-secondary"
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
