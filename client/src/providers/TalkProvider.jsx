import { useState } from "react";
import talkContext from "../contexts/talkContext";

const TalkProvider = ({ children }) => {
  const [form, setForm] = useState([]);

  return (
    <talkContext.Provider value={{ form, setForm }}>
      {children}
    </talkContext.Provider>
  );
};

export default TalkProvider;
