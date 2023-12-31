import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import PasswordInput from "@/app/_components/Form/Inputs/PasswordInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { EditUserAction } from "@/app/_libs/users/actions";
import { getUserById } from "@/app/_libs/users/fetch";
import { Group } from "@mantine/core";
import UsernameInput from "@/app/_components/Form/Inputs/UsernameInput";
import EmailInput from "@/app/_components/Form/Inputs/EmailInput";


type editRoleProps = {
  params?: {
    id?: string;
  };
}
export const revalidate = 0
async function EditUser({
  params,
}: editRoleProps) {
  const { id } = params || {}
  const { data: user } = await getUserById({ id: Number(id) })
  const { email, password, username } = user
  return (
    <Modal title="ویرایش نام کاربری">
      <FormModal action={EditUserAction} initialValues={{ email, password, username, id: Number(id) }}>
        <UsernameInput />
        <EmailInput />
        <PasswordInput />
        <HiddenIdInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default EditUser;
