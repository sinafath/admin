import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { getAllUsers } from "@/app/_libs/users/fetch";
import { Group } from "@mantine/core";
import { AddOrderAction } from "@/app/_libs/orders/actions";
import { ProductComboBox } from "@/app/_components/Form/ComoboBox/ProductComboBox";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllProducts } from "@/app/_libs/products/fetch";


async function AddOrder() {
  const [{ data: products }, { data: users }] = await Promise
    .all([getAllProducts(), getAllUsers()])
  return (
    <Modal title="اضافه کردن سفارش">
      <FormModal action={AddOrderAction}>
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

export default AddOrder;
