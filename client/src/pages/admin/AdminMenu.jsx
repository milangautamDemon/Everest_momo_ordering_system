import { useState } from "react";
import Input from "../../components/common/Input";
import PrimaryButton from "../../components/common/PrimaryButton";
import axios from "axios";
import toast from "react-hot-toast";
import MenuListsMapping from "./components/MenuListsMapping";

const AdminMenu = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // Ensure `files` is not empty before accessing files[0]
      if (files && files.length > 0) {
        console.log("inside", files[0]);
        setImage(files[0]);
      } else {
        console.log("error data");
        // Handle case where no file is selected (optional)
        setImage(null); // Or some default value
      }
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

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
    if (!image) newErrors.image = "Image is Required !!!";
    if (isNaN(parsedPrice) || parsedPrice < 150 || parsedPrice > 1000)
      newErrors.price =
        "Price Should be number & minimum 150 & maximum 1000 !!!";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (formValidate()) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("description", form.description);

      // console.log(formData);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/admin/add-menu",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        toast.success(response.data.msg);
      } catch (error) {
        console.error("Error response:", error.response); // Log the full error response
        toast.error(error.response.data.err_code, { position: "top-right" });
      }
      setData((prevData) => [form, ...prevData]);
    } else {
      console.error("validation failed !!!");
      toast.error(`Form Validation Failed !!!`, {
        position: "top-left",
      });
    }
    setImage();
    setForm({
      name: "",
      price: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="mx-8 my-10 flex flex-col items-center gap-10 bg-white-default md:mx-14 lg:mx-28">
      <div className="flex w-full flex-col gap-10 sm:w-5/6 md:w-4/6 lg:w-3/6">
        <div className="text-center text-xl font-semibold uppercase text-black">
          add/update Menu
        </div>
        <form
          method="post"
          encType="multipart/form-data"
          className="flex flex-col gap-6"
        >
          <div className="">
            <label
              htmlFor="image"
              className="font-oswald font-semibold text-secondary"
            >
              Image
            </label>
            <Input
              name="image"
              id="image"
              onChange={handleChange}
              type="file"
              required
            />
            {errors.image && (
              <span className="text-xs text-danger-light">{errors.image}</span>
            )}
          </div>

          <div className="">
            <label
              htmlFor="name"
              className="font-oswald font-semibold text-secondary"
            >
              Name
            </label>
            <Input
              name="name"
              id="name"
              inputValue={form.name}
              onChange={handleChange}
              type="text"
              required
            />
            {errors.name && (
              <span className="text-xs text-danger-light">{errors.name}</span>
            )}
          </div>

          <div className="">
            <label
              htmlFor="price"
              className="font-oswald font-semibold text-secondary"
            >
              Price
            </label>
            <Input
              name="price"
              id="price"
              inputValue={form.price}
              onChange={handleChange}
              type="number"
              required
            />
            {errors.price && (
              <span className="text-xs text-danger-light">{errors.price}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="font-oswald font-semibold text-secondary"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-black-light px-4 py-3 text-lg"
              required
            >
              <option value="">choose</option>
              <option value="chicken">Chicken</option>
              <option value="buff">Buff</option>
              <option value="veg">Veg</option>
            </select>
            {errors.category && (
              <span className="text-xs text-danger-light">
                {errors.category}
              </span>
            )}
          </div>

          <div className="">
            <label
              htmlFor="description"
              className="font-oswald font-semibold text-secondary"
            >
              Description
            </label>
            <Input
              name="description"
              id="description"
              inputValue={form.description}
              onChange={handleChange}
              type="text"
              required
            />
            {errors.description && (
              <span className="text-xs text-danger-light">
                {errors.description}
              </span>
            )}
          </div>

          <div className="flex w-full justify-center">
            <PrimaryButton
              onClick={handleForm}
              type="submit"
              buttonName="Add Menu"
              classFeature="bg-black px-8 font-semibold hover:bg-black-dark"
            />
          </div>
        </form>
      </div>

      <MenuListsMapping data={data} />
    </div>
  );
};

export default AdminMenu;
