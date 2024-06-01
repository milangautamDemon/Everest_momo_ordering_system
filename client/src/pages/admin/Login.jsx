import { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../components/common/PrimaryButton";
import Input from "../../components/common/Input";
import LoginPic from "../../assets/images/loginp.svg";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="animate-float bg-gray-100 flex min-h-screen w-screen items-center justify-center gap-32 overflow-y-hidden">
      <img
        width={400}
        className="hidden h-auto w-48 md:block lg:block lg:h-80 lg:w-80"
        src={LoginPic}
        alt="LogIn Image"
      />
      <form className="relative flex h-auto w-96 flex-col justify-between gap-6 rounded-xl bg-white-default px-4 py-8 shadow-lg">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-xl font-bold text-black">
            Welcome Back!
          </h1>
          <div className="border-b-2 border-black-light"></div>
        </div>
        <Input
          inputchangeHandler={(e) => setUserName(e.target.value)}
          inputValue={userName}
          type={true}
          label={"UserName"}
        />
        <div className="flex flex-col gap-1">
          <Input
            inputchangeHandler={(e) => setPassword(e.target.value)}
            inputValue={password}
            type={false}
            label={"Password"}
          />
          <span className=" ml-1">forget Password?</span>
        </div>
        <div className="flex w-full items-center justify-center">
          <Button buttonName={"Login"} classFeature="px-8 bg-secondary" />
        </div>
      </form>
    </div>
  );
}

export default Login;
