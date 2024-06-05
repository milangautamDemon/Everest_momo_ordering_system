import axios from "axios";
import toast from "react-hot-toast";
import MenuListsMapping from "./components/MenuListsMapping";
import MenuForm from "./components/common/MenuForm";
import { useContext } from "react";
import formContext from "../../contexts/formContext";

const AdminMenu = () => {
  const { form, setForm, image, setImage, errors, formValidate } =
    useContext(formContext);

  const handleAddMenuForm = async (e) => {
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
        setForm((prev) => ({
          ...prev,
          form,
        }));
      } catch (error) {
        console.error("Error response:", error.response); // Log the full error response
        toast.error(error.response.data.err_code, { position: "top-right" });
      }
    } else {
      console.error("validation failed !!!");
      toast.error(`Form Validation Failed !!!`, {
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
    <div className="mx-8 my-10 flex flex-col items-center gap-10 bg-white-default md:mx-14 lg:mx-28">
      <MenuForm
        errors={errors}
        setImage={setImage}
        form={form}
        setForm={setForm}
        buttonName="add menu"
        formName="add menu"
        onClick={handleAddMenuForm}
      />
      <MenuListsMapping />
    </div>
  );
};

export default AdminMenu;
