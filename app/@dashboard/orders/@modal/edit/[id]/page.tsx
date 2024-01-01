import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { getAllUsers } from "@/app/_libs/users/fetch";
import { Group } from "@mantine/core";
import paramsIdType from "@/libs/types/paramsIdType";
import { EditOrderAction } from "@/app/_libs/orders/actions";
import { getOrderById } from "@/app/_libs/orders/fetch";
import { ProductComboBox } from "@/app/_components/Form/ComoboBox/ProductComboBox";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllProducts } from "@/app/_libs/products/fetch";


type EditOrderProps = paramsIdType
async function EditOrder({
  params,
}: EditOrderProps) {
  const { id } = params || {}
  const [{ data: order }, { data: products }, { data: users }] = await Promise
    .all([await getOrderById({ id: Number(id) }), getAllProducts(), getAllUsers()])
  const { productId,
    userId } = order
  return (
    <Modal title="ویرایش سفارش">
      <FormModal action={EditOrderAction} initialValues={{
        productId,
        userId, id: Number(id)
      }}>
        <UserComboBox data={users} />
        <ProductComboBox data={products} />
        <HiddenIdInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default EditOrder;
