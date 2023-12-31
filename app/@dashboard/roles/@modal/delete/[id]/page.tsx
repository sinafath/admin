import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { DeleteRoleAction } from "@/app/_libs/roles/actions";
import {  Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";


type DeleteRoleProps = {
  params?: {
    id?: string;
  };
}

async function DeleteRole({
  params,
}: DeleteRoleProps) {
  const { id } = params || {}
  return (
    <Modal title="حذف نقش">
      <FormModal action={DeleteRoleAction} initialValues={{ id: Number(id) }}>
        <HiddenIdInput />
        <Group grow justify="center">
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default DeleteRole;
