import Delete from "@/app/_components/Buttons/Cancel";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import { AddRoleForm } from "@/app/_libs/roles/Forms";

async function addRole() {
  return (
    <Modal title="اضافه کردن نقش">
      <AddRoleForm >
        <NameInput  />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit  mt={0}  />
        </Group>
      </AddRoleForm>
    </Modal>

  );
}

export default addRole;
