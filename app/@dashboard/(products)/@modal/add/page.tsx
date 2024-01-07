import Delete from "@/app/_components/Buttons/Cancel";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import DurationTimeInput from "@/app/_components/Form/Inputs/DurationTimeInput";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllUsers } from "@/app/_libs/users/fetch";
import { AddProductForm } from "@/app/_components/Form/Forms/ProductForms";

async function AddProduct() {
  const { data: users } = await getAllUsers()
  return (
    <Modal title="اضافه کردن محصول">
      <AddProductForm >

        <NameInput />
        <UserComboBox data={users} />
        <DurationTimeInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>
      </AddProductForm>
    </Modal>

  );
}

export default AddProduct;
