import { Button, Group, Modal } from "@mantine/core";
import { useState } from "react";
import LoginForm from "./LoginForm";

const ModalLogin: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        tabIndex={1}
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <LoginForm>
          <Button className="bg-blue-500 mx-1" onClick={() => setOpened(false)}>
            Cancel
          </Button>
        </LoginForm>
      </Modal>

      <Group position="center">
        <Button className="bg-blue-500 mx-2" onClick={() => setOpened(true)}>
          Login
        </Button>
      </Group>
    </>
  );
};

export default ModalLogin;
