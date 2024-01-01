import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { DeleteRoleAction } from "@/app/_libs/roles/actions";
import {  Group } from "@mantine/core";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import paramsIdType from "@/libs/types/paramsIdType";


type DeleteRoleProps = paramsIdType

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
