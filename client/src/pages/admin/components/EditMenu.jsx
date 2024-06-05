import { useContext, useEffect, useState } from "react";
import MenuForm from "./common/MenuForm";
import formContext from "../../../contexts/formContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditMenu = () => {
  const { form, setForm, image, setImage, errors, formValidate } =
    useContext(formContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/get-menu/${id}`,
        );
        const menuItem = response.data.data;
        console.log(menuItem);
        setForm({
          image: menuItem.image,
          name: menuItem.name,
          price: menuItem.price.toString(),
          category: menuItem.category,
          description: menuItem.description,
        });
        setPreviewUrl(`http://localhost:3000/${menuItem.image}`);
        // Set image if necessary
      } catch (error) {
        console.error("Error fetching menu item:", error);
      }
    };

    if (id) {
      fetchMenuItem();
    }
  }, [id, setForm]);

  const handleEditMenuForm = async (e) => {
    e.preventDefault();
    if (formValidate()) {
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      }
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("description", form.description);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/admin/update-menu/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        toast.success(response.data.msg);
        navigate("/admin/menu");
      } catch (error) {
        console.error("Error response:", error.response); // Log the full error response
        toast.error(error.response.data.err_code, { position: "top-right" });
      }
    } else {
      console.error("Validation failed !!!");
      toast.error("Form Validation Failed !!!", {
        position: "top-left",
      });
    }
  };

  return (
    <div
      className={`sticky z-40 flex min-h-screen w-[calc(100vw-18px)] items-center justify-center bg-black-dark/70 py-10`}
    >
      <MenuForm
        setPreviewUrl={setPreviewUrl}
        previewUrl={previewUrl}
        errors={errors}
        setImage={setImage}
        form={form}
        setForm={setForm}
        buttonName="update menu"
        formName="update menu"
        onClick={handleEditMenuForm}
      />
    </div>
  );
};

export default EditMenu;
