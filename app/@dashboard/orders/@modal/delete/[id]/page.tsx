import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import {Group } from "@mantine/core";
import paramsIdType from "@/libs/types/paramsIdType";
import { DeleteOrderAction } from "@/app/_libs/orders/actions";


type DeleteUserProps = paramsIdType

async function DeleteUser({
  params,
}: DeleteUserProps) {
  const { id } = params || {}
  return (
    <Modal title="حذف سفارش">
      <FormModal action={DeleteOrderAction} initialValues={{ id: Number(id) }}>
        <HiddenIdInput />
        <Group grow justify="center">
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default DeleteUser;
