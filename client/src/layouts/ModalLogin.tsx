import { useState } from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { openModal, closeAllModals } from "@mantine/modals";

const ModalLogin: React.FC = () => {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          openModal({
            title: "Subscribe to newsletter",
            children: (
              <>
                <TextInput
                  label="Your email"
                  placeholder="Your email"
                  data-autofocus
                />
                <Button fullWidth onClick={() => closeAllModals} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
};

export default ModalLogin;
