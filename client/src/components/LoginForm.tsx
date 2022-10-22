import { Button, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

interface Props {
  children: React.ReactNode;
}

const LoginForm: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h1 className="text-center font-sans font-extrabold">Login</h1>
      <form action="" method="post">
        <div className="px-2 my-3">
          <TextInput
            className="my-3"
            icon={<FontAwesomeIcon icon={solid("user")} />}
            placeholder="Username"
          />
          <PasswordInput
            className="my-3"
            icon={<FontAwesomeIcon icon={solid("key")} />}
            placeholder="Password"
          />
        </div>
        <div className="flex justify-end">
          <Button className="bg-blue-500 mx-1">Login</Button>
          {children}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
