import Delete from "@/app/_components/Buttons/Cancel";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { getAllUsers } from "@/app/_libs/users/fetch";
import { Group } from "@mantine/core";
import paramsIdType from "@/libs/types/paramsIdType";
import { ProductComboBox } from "@/app/_components/Form/ComoboBox/ProductComboBox";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllProducts } from "@/app/_libs/products/fetch";
import { getOrderById } from "@/app/_libs/orders/fetch";
import { EditOrderForm } from "@/app/_libs/orders/Forms";


type EditOrderProps = paramsIdType
async function EditOrder({
  params: { id } = {},
}: EditOrderProps) {
  const [{ data: { productId,
    userId } }, { data: products }, { data: users }] = await Promise
      .all([await getOrderById({ id: Number(id) }), getAllProducts(), getAllUsers()])

  return (
    <Modal title="ویرایش سفارش">
      <EditOrderForm initialValues={{
        productId,
        userId, id: Number(id)
      }}
      >
        <UserComboBox data={users} />
        <ProductComboBox data={products} />
        <HiddenIdInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </EditOrderForm>
    </Modal>

  );
}

export default EditOrder;
