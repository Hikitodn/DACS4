import { Button, Group, Modal } from "@mantine/core";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

const ModalRegister: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        tabIndex={0}
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <RegisterForm>
          <Button className="bg-blue-500 mx-1" onClick={() => setOpened(false)}>
            Cancel
          </Button>
        </RegisterForm>
      </Modal>

      <Group position="center">
        <Button className="bg-blue-500 mx-2" onClick={() => setOpened(true)}>
          Register
        </Button>
      </Group>
    </>
  );
};

export default ModalRegister;
