import Delete from "@/app/_components/Buttons/Cancel";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import { getProductById } from "@/app/_libs/products/fetch";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import DurationTimeInput from "@/app/_components/Form/Inputs/DurationTimeInput";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllUsers } from "@/app/_libs/users/fetch";
import paramsIdType from "@/libs/types/paramsIdType";
import { EditProductForm } from "@/app/_libs/products/Forms";


type editProductProps = paramsIdType
async function EditProduct({
  params: { id } = {},
}: editProductProps) {
  const [{ data: product }, { data: users }] = await Promise.all([getProductById({ id: Number(id) }), getAllUsers()])
  const { durationTime, name, userId } = product || {}
  return (
    <Modal title="ویرایش محصول">
      <EditProductForm initialValues={{
        durationTime: durationTime ?? undefined,
        name, userId, id: Number(id)
      }}>
        <NameInput />
        <UserComboBox data={users} />
        <DurationTimeInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </EditProductForm>
    </Modal>

  );
}

export default EditProduct;
