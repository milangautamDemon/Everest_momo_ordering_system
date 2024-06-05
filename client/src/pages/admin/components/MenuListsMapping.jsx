/* eslint-disable react/prop-types */

import PrimaryButton from "../../../components/common/PrimaryButton";
import MomoMenuList from "../../../components/common/MomoMenuList";
import { useContext } from "react";
import menuContext from "../../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const MenuListsMapping = () => {
  const { menuData, loading, setMenuData } = useContext(menuContext);
  const navigate = useNavigate();

  const handleEditMenuPage = (id) => navigate(`/admin/menu/edit/${id}`);

  const handleMenuDelete = async (userId) => {
    await axios
      .delete(`http://localhost:3000/api/admin/delete-menu/${userId}`)
      .then((response) => {
        setMenuData((prevMenu) =>
          prevMenu.filter((menuData) => menuData._id != userId),
        );
        toast.success(response.data.msg, { position: "top-right" });
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-full flex-col gap-6 border-t-2 border-black-light/50 py-8">
      <div className="text-center text-xl font-bold capitalize text-black">
        momo menu lists
      </div>
      <ul className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2 lg:grid-cols-3">
        {menuData.map((item) => (
          <li
            className="flex flex-col items-center rounded-md bg-white-light px-2 py-4 shadow-lg"
            key={item._id}
          >
            <div className="py-1 text-center font-allura text-xl font-bold text-primary-light">
              {item.category}
            </div>
            <MomoMenuList
              menuImg={`http://localhost:3000/${item.image}`}
              menuName={item.name}
              menuPrice={item.price}
              itemDescription={item.description}
              category={item.category}
            />
            <div className="flex gap-2">
              <PrimaryButton
                onClick={() => handleEditMenuPage(item._id)}
                buttonName="edit"
                classFeature="px-6 bg-secondary text-white-default hover:bg-secondary-dark text-sm shadow-lg sm:rounded-md"
              />
              <PrimaryButton
                onClick={() => handleMenuDelete(item._id)}
                buttonName="delete"
                classFeature="px-4 bg-danger text-white-default hover:bg-danger-dark text-sm shadow-lg sm:rounded-md"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuListsMapping;
