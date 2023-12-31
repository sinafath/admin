import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import {Group } from "@mantine/core";
import { DeleteUserAction } from "@/app/_libs/users/actions";
import { deleteProductById } from "@/app/_libs/products/fetch";
import { DeleteroductAction } from "@/app/_libs/products/actions";


type DeleteProductProps = {
  params?: {
    id?: string;
  };
}

async function DeleteProduct({
  params,
}: DeleteProductProps) {
  const { id } = params || {}
  return (
    <Modal title="حذف کاربر">
      <FormModal action={DeleteroductAction} initialValues={{ id: Number(id) }}>
        <HiddenIdInput />
        <Group grow justify="center">
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default DeleteProduct;
