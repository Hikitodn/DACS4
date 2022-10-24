import { Button, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

interface Props {
  children: React.ReactNode;
}

const RegisterForm: React.FC<Props> = ({ children }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-center font-sans font-extrabold">Register</h1>
      <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
        <div className="px-2 my-3">
          <TextInput
            className="my-3"
            icon={<FontAwesomeIcon icon={solid("user")} />}
            placeholder="Username"
          />
          <TextInput
            className="my-3"
            icon={<FontAwesomeIcon icon={solid("user-circle")} />}
            placeholder="Name"
          />
          <PasswordInput
            className="my-3"
            icon={<FontAwesomeIcon icon={solid("key")} />}
            placeholder="Password"
          />
          <PasswordInput
            className="my-3"
            icon={<FontAwesomeIcon icon={solid("key")} />}
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-blue-500 mx-1">
            Register
          </Button>
          {children}
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
