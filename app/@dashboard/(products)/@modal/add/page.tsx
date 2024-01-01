import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import { AddProductAction } from "@/app/_libs/products/actions";
import DurationTimeInput from "@/app/_components/Form/Inputs/DurationTimeInput";
import { UserComboBox } from "@/app/_components/Form/ComoboBox/UserComboBox";
import { getAllUsers } from "@/app/_libs/users/fetch";

async function AddProduct() {
  const {data:users} = await getAllUsers()
  return (
    <Modal title="اضافه کردن محصول">
      <FormModal action={AddProductAction} >
        <UserComboBox data={users}/>
        <NameInput  />
        <DurationTimeInput/>
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit  mt={0}  />
        </Group>
      </FormModal>
    </Modal>

  );
}

export default AddProduct;
