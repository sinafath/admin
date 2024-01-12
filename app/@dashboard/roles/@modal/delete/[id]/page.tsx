import Delete from "@/app/_components/Buttons/Cancel";
import { Form } from "@/app/_components/Form/Form";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { deleteRoleAction } from "@/app/_libs/roles/action";
import {  Group } from "@mantine/core";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import paramsIdType from "@/libs/types/paramsIdType";


type DeleteRoleProps = paramsIdType

async function DeleteRole({
  params: { id } = {},
}:  DeleteRoleProps) {
  return (
    <Modal title="حذف نقش">
      <Form routeBack action={deleteRoleAction} initialValues={{ id: Number(id) }}>
        <HiddenIdInput />
        <Group grow justify="center">
          <Delete />
          <Submit mt={0} />
        </Group>

      </Form>
    </Modal>

  );
}

export default DeleteRole;
