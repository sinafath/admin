import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import {  Group } from "@mantine/core";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import { DeletePermissionAction } from "@/app/_libs/permissions/actions";
import paramsIdType from "@/libs/types/paramsIdType";

type DeletePermissionProps = paramsIdType

async function DeletePermission({
  params: { id } = {},
}: DeletePermissionProps) {
  return (
    <Modal title="حذف دسترسی">
      <FormModal action={DeletePermissionAction} initialValues={{ id: Number(id) }}>
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
