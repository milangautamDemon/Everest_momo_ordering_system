import { useState } from "react";
import Input from "../../components/common/Input";
import PrimaryButton from "../../components/common/PrimaryButton";
import MomoMenuList from "../../components/common/MomoMenuList";

const AdminMenu = () => {
  const [form, setForm] = useState({
    image: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    setData((prevData) => [form, ...prevData]);
    setForm({
      image: "",
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
        <form className="flex flex-col gap-6" onSubmit={handleForm}>
          <div className="">
            <label
              htmlFor="image"
              className="font-oswald font-semibold text-primary"
            >
              Image
            </label>
            <Input
              name="image"
              id="image"
              inputValue={form.image}
              onChange={handleChange}
              type="file"
            />
          </div>

          <div className="">
            <label
              htmlFor="name"
              className="font-oswald font-semibold text-primary"
            >
              Name
            </label>
            <Input
              name="name"
              id="name"
              inputValue={form.name}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div className="">
            <label
              htmlFor="price"
              className="font-oswald font-semibold text-primary"
            >
              Price
            </label>
            <Input
              name="price"
              id="price"
              inputValue={form.price}
              onChange={handleChange}
              type="number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="font-oswald font-semibold text-primary"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-black-light px-4 py-3 text-lg"
            >
              <option value="">choose</option>
              <option value="chicken">Chicken</option>
              <option value="buff">Buff</option>
              <option value="veg">Veg</option>
            </select>
          </div>

          <div className="">
            <label
              htmlFor="description"
              className="font-oswald font-semibold text-primary"
            >
              Description
            </label>
            <Input
              name="description"
              id="description"
              inputValue={form.description}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div className="flex w-full justify-center">
            <PrimaryButton
              type="submit"
              buttonName="Add Menu"
              classFeature="bg-black px-8 font-semibold hover:bg-black-dark"
            />
          </div>
        </form>
      </div>

      <div className="flex w-full flex-col gap-6 border-t-2 border-black-light/50 py-8">
        <div className="text-center text-xl font-bold capitalize text-black">
          momo menu lists
        </div>
        <ul className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <li
              className="flex flex-col items-center rounded-md bg-white-light px-2 py-4 shadow-lg"
              key={index}
            >
              <div className="py-1 text-center font-allura text-xl font-bold text-primary-light">
                {item.category}
              </div>
              <MomoMenuList
                menuImg={item.image}
                menuName={item.name}
                menuPrice={item.price}
                itemDescription={item.description}
              />
              <PrimaryButton
                buttonName="delete"
                classFeature="px-6 bg-danger text-white-default hover:bg-danger-dark text-sm shadow-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
