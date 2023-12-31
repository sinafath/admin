import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { DeleteRoleAction } from "@/app/_libs/roles/actions";
import {  Group } from "@mantine/core";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";


type DeletePermissionProps = {
  params?: {
    id?: string;
  };
}

async function DeletePermission({
  params,
}: DeletePermissionProps) {
  const { id } = params || {}
  return (
    <Modal title="حذف دسترسی">
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

export default DeletePermission;
