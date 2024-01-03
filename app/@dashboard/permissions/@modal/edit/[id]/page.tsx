import Delete from "@/app/_components/Buttons/Cancel";
import { FormModal } from "@/app/_components/Form/FormModal";
import HiddenIdInput from "@/app/_components/Form/Inputs/HiddenIdInput";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { getAllRoles} from "@/app/_libs/roles/fetch";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import { EditPermissionAction } from "@/app/_libs/permissions/actions";
import { getPermissionById } from "@/app/_libs/permissions/fetch";
import paramsIdType from "@/libs/types/paramsIdType";
import { RoleSelectComboBox } from "@/app/_components/Form/ComoboBox/RoleSelectComboBox";
import getAllRoutes from "@/app/_libs/routes/fetch";
import { RouteComboBox } from "@/app/_components/Form/ComoboBox/RouteComboBox";
import ReadInput from "@/app/_components/Form/Inputs/ReadInput";


type EditPermissionsProps = paramsIdType

async function EditPermissions({
  params: { id } = {},
}: EditPermissionsProps) {
  const [{ data: roles }, { data: routes }, { data: { name } }] = await Promise.all([getAllRoles()
    , getAllRoutes(), getPermissionById({ id: Number(id) })])
  return (
    <Modal title="ویرایش دسترسی">
      <FormModal action={EditPermissionAction} initialValues={{ name, id: Number(id)  }}>
        <NameInput />
        <RoleSelectComboBox data={roles} />
        <RouteComboBox data={routes} />
        <HiddenIdInput />
        <ReadInput/>
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>

      </FormModal>
    </Modal>

  );
}

export default EditPermissions;
