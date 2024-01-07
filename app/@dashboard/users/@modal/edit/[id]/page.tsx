import Delete from "@/app/_components/Buttons/Cancel";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import PasswordInput from "@/app/_components/Form/Inputs/PasswordInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { getUserById } from "@/app/_libs/users/fetch";
import { Group } from "@mantine/core";
import UsernameInput from "@/app/_components/Form/Inputs/UsernameInput";
import EmailInput from "@/app/_components/Form/Inputs/EmailInput";
import paramsIdType from "@/libs/types/paramsIdType";
import { EditUserForm } from "@/app/_components/Form/Forms/UserForms";



type editUserProps = paramsIdType
async function EditUser({
  params: { id } = {},
}: editUserProps) {
  const { data: { email, password, username } } = await getUserById({ id: Number(id) })
  return (
    <Modal title="ویرایش نام کاربری">
      <EditUserForm initialValues={{ email, password, username, id: Number(id) }}>
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
        <HiddenIdInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </EditUserForm>
    </Modal>

  );
}

export default EditUser;
