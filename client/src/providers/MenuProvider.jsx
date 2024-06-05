/* eslint-disable react/prop-types */

import menuContext from "../contexts/menuContext";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/get-menu");
        setMenuData(response.data.data);
        console.log(response);
        toast.success(response.data.msg, { position: "top-right" });
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          toast.error(`Error: ${error.response.data.message}`, {
            position: "top-right",
          });
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("Error: No response from server", {
            position: "top-right",
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error(`Error: ${error.message}`, { position: "top-right" });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <menuContext.Provider value={{ menuData, loading, setMenuData }}>
      {children}
    </menuContext.Provider>
  );
};

export default MenuProvider;
