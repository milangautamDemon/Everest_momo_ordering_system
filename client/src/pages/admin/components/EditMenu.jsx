import { useContext } from "react";
import MenuForm from "./common/MenuForm";
import formContext from "../../../contexts/formContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditMenu = () => {
  const { form, setForm, image, setImage, errors, formValidate } =
    useContext(formContext);
  const { id } = useParams();

  const handleEditMenuForm = async (e) => {
    e.preventDefault();
    if (formValidate()) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("description", form.description);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/admin/edit-menu/${id}`,
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
    } else {
      console.error("Validation failed !!!");
      toast.error("Form Validation Failed !!!", {
        position: "top-left",
      });
    }
    setImage(null);
    setForm({
      name: "",
      price: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      <MenuForm
        errors={errors}
        setImage={setImage}
        form={form}
        setForm={setForm}
        buttonName="edit menu"
        formName="edit menu"
        onClick={handleEditMenuForm}
      />
    </div>
  );
};

export default EditMenu;
