import Delete from "@/app/_components/Buttons/Delete";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { EditRoleAction } from "@/app/_libs/roles/actions";
import { getRoleById } from "@/app/_libs/roles/fetch";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";


type editRoleProps = {
  params?: {
    id?: string;
  };
}
export const revalidate = 0
async function EditRole({
  params,
}: editRoleProps) {
  const { id } = params || {}
  const { data: role } = await getRoleById({ id: Number(id) })
  const { name } = role
  return (
    <Modal title="ویرایش نقش">
      <FormModal action={EditRoleAction} initialValues={{ name, id: Number(id) }}>
        <NameInput/>
        <HiddenIdInput/>
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit  mt={0}  />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default EditRole;