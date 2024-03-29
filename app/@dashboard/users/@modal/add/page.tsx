import Delete from "@/app/_components/Buttons/Cancel";
import PasswordInput from "@/app/_components/Form/Inputs/PasswordInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import UsernameInput from "@/app/_components/Form/Inputs/UsernameInput";
import EmailInput from "@/app/_components/Form/Inputs/EmailInput";
import { AddUserForm } from "@/app/_components/Form/Forms/UserForms";


async function AddUser() {
  return (
    <Modal title="اضافه کردن کاربر">
      <AddUserForm >
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>
      </AddUserForm>
    </Modal>

  );
}

export default AddUser;
