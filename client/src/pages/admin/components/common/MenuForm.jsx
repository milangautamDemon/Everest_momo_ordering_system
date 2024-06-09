/* eslint-disable react/prop-types */

import Input from "../../../../components/common/Input";
import PrimaryButton from "../../../../components/common/PrimaryButton";

const MenuForm = ({
  errors,
  setImage,
  form,
  setForm,
  buttonName,
  formName,
  setPreviewUrl,
  previewUrl,
  ...handleButton
}) => {
  const handleChange = (e) => {
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
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };
  console.log(form);
  return (
    <div className="flex w-full flex-col gap-10 sm:w-5/6 md:w-4/6 lg:w-3/6">
      <div className="text-center text-xl font-semibold uppercase text-black">
        {formName}
      </div>
      <form
        method="post"
        encType="multipart/form-data"
        className="flex flex-col gap-6"
      >
        <div className="">
          {previewUrl && (
            <div className="flex justify-center">
              <img src={previewUrl} alt="Preview" className="h-16 w-20" />
            </div>
          )}
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
              onChange={handleChange}
              type="file"
              required
            />
          }
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
            <span className="text-xs text-danger-light">{errors.category}</span>
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
            {...handleButton}
            type="submit"
            buttonName={buttonName}
            classFeature="bg-black px-8 font-semibold hover:bg-black-dark"
          />
        </div>
      </form>
    </div>
  );
};

export default MenuForm;
