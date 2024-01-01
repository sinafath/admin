import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { addRoleAction } from "@/app/_libs/roles/actions";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";

async function addRole() {
  
  return (
    <Modal title="اضافه کردن نقش">
      <FormModal action={addRoleAction} >
        <NameInput  />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit  mt={0}  />
        </Group>
      </FormModal>
    </Modal>

  );
}

export default addRole;
