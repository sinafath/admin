import Delete from "@/app/_components/Buttons/Cancel";
import { Form } from "@/app/_components/Form/Form";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { editRoleAction } from "@/app/_libs/roles/actions";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import paramsIdType from "@/libs/types/paramsIdType";
import { EditRoleSchema } from "@/app/_libs/roles/schema";
import { getRoleById } from "@/app/_libs/roles/fetch";
import { EditRoleForm } from "@/app/_components/Form/Forms/RoleForms";


type editRoleProps = paramsIdType
async function EditRole({
  params: { id } = {},
}: editRoleProps) {
  const { data: { name } } = await getRoleById({ id: Number(id) })
  return (
    <Modal title="ویرایش نقش">
      <EditRoleForm    initialValues={{ name, id: Number(id) }}>
        <NameInput />
        <HiddenIdInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </EditRoleForm>
    </Modal>

  );
}

export default EditRole;
