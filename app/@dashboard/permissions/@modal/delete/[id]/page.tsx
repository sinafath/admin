import Delete from "@/app/_components/Buttons/Cancel";
import { Form } from "@/app/_components/Form/Form";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import {  Group } from "@mantine/core";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import { deletePermissionAction } from "@/app/_libs/permissions/action";
import paramsIdType from "@/libs/types/paramsIdType";

type DeletePermissionProps = paramsIdType

async function DeletePermission({
  params: { id } = {},
}: DeletePermissionProps) {
  return (
    <Modal title="حذف دسترسی">
      <Form routeBack action={deletePermissionAction}   initialValues={{ id: Number(id) }}>
        <HiddenIdInput />
        <Group grow justify="center">
          <Delete />
          <Submit mt={0} />
        </Group>

      </Form>
    </Modal>

  );
}

export default DeletePermission;
