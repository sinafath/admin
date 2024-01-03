import Delete from "@/app/_components/Buttons/Cancel";
import { Form } from "@/app/_components/Form/Form";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import {Group } from "@mantine/core";
import { DeleteUserAction } from "@/app/_libs/users/actions";
import paramsIdType from "@/libs/types/paramsIdType";


type DeleteUserProps = paramsIdType

async function DeleteUser({
  params: { id } = {},
}:DeleteUserProps) {
  return (
    <Modal title="حذف کاربر">
      <Form routeBack action={DeleteUserAction} initialValues={{ id: Number(id) }}>
        <HiddenIdInput />
        <Group grow justify="center">
          <Delete />
          <Submit mt={0} />
        </Group>
      </Form>
    </Modal>

  );
}

export default DeleteUser;
