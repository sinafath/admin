import Delete from "@/app/_components/Buttons/Cancel";
import { Form } from "@/app/_components/Form/Form";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import {Group } from "@mantine/core";
import paramsIdType from "@/libs/types/paramsIdType";
import { deleteOrderAction } from "@/app/_libs/orders/action";


type DeleteUserProps = paramsIdType

async function DeleteUser({
  params: { id } = {},
}: DeleteUserProps) {
  return (
    <Modal title="حذف سفارش">
      <Form routeBack action={deleteOrderAction} initialValues={{ id: Number(id) }}>
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
