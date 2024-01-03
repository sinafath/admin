import Delete from "@/app/_components/Buttons/Cancel";
import { Form } from "@/app/_components/Form/Form";
import Submit from "@/app/_components/Form/Submit";
import Modal from "@/app/_components/Modal/Modal";
import { Group } from "@mantine/core";
import NameInput from "@/app/_components/Form/Inputs/NameInput";
import { addPermissionAction } from "@/app/_libs/permissions/actions";
import { RoleSelectComboBox } from "@/app/_components/Form/ComoboBox/RoleSelectComboBox";
import { getAllRoles } from "@/app/_libs/roles/fetch";
import { RouteComboBox } from "@/app/_components/Form/ComoboBox/RouteComboBox";
import getAllRoutes from "@/app/_libs/routes/fetch";
import ReadInput from "@/app/_components/Form/Inputs/ReadInput";
import AddPermissionForm from "./_Form";


async function addPermission() {
  const [{ data: roles }, { data: routes }] = await Promise.all([getAllRoles(), getAllRoutes()])
  return (
    <Modal title="اضافه کردن دسترسی">
      <AddPermissionForm>
        <RoleSelectComboBox data={roles} />
        <RouteComboBox data={routes} />
        <NameInput />
        <ReadInput />
        <Group grow justify="center" pt={25}>
          <Delete />
          <Submit mt={0} />
        </Group>
      </AddPermissionForm>
    </Modal>

  );
}

export default addPermission;
