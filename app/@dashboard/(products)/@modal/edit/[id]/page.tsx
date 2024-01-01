import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import { EditProductAction } from "@/app/_libs/products/actions";
import { getProductById } from "@/app/_libs/products/fetch";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import DurationTimeInput from "@/app/_components/Form/Inputs/DurationTimeInput";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllUsers } from "@/app/_libs/users/fetch";
import paramsIdType from "@/libs/types/paramsIdType";


type editProductProps = paramsIdType
async function EditProduct({
  params,
}: editProductProps) {
  const { id } = params || {}
  const [{ data: product }, { data: users }] = await Promise.all([getProductById({ id: Number(id) }), getAllUsers()])
  const { durationTime, name, userId } = product
  return (
    <Modal title="ویرایش محصول">
      <FormModal action={EditProductAction} initialValues={{ durationTime, name, userId, id: Number(id) }}>
        <NameInput />
        <UserComboBox data={users} />
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
