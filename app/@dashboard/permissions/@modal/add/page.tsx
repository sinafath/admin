import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { addRoleAction } from "@/app/_libs/roles/actions";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import { addPermissionAction } from "@/app/_libs/permission/actions";
export const revalidate = 0

async function addPermission() {
  
  return (
    <Modal title="اضافه کردن دسترسی">
      <FormModal action={addPermissionAction} >
        <NameInput  />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit  mt={0}  />
        </Group>
      </FormModal>
    </Modal>

  );
}

export default addPermission;
