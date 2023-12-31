import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import { EditProductAction } from "@/app/_libs/products/actions";
import { getProductById } from "@/app/_libs/products/fetch";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import DurationTimeInput from "@/app/_components/Form/Inputs/DurationTimeInput";


type editProductProps = {
  params?: {
    id?: string;
  };
}
export const revalidate = 0
async function EditProduct({
  params,
}: editProductProps) {
  const { id } = params || {}
  const { data: product } = await getProductById({ id: Number(id) })
  const { durationTime, name, userId } = product
  return (
    <Modal title="ویرایش محصول">
      <FormModal action={EditProductAction} initialValues={{ durationTime, name, userId, id: Number(id) }}>
        <NameInput />
        <DurationTimeInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default EditProduct;
