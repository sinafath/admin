import { Form } from "@/app/_components/Form/Form";
import Submit from "@/app/_components/Form/Submit";
import TextInput from "@/app/_components/Form/TextInput";
import Modal from "@/app/_components/Modal/Modal";
import { EditProductAction } from "@/app/_libs/products/actions";
import { EditRoleAction } from "@/app/_libs/roles/actions";
import { getRoleById } from "@/app/_libs/roles/data";


type editRoleProps = {
  searchParams?: {
    id?: string;
  };
}
export const revalidate = 0
async function EditRole({
  searchParams,
}: editRoleProps) {
  const { id } = searchParams || {}
  const { data: role } = await getRoleById(Number(id))
  const { name } = role
  return (
    <Modal openUrl="/roles/edit" closeUrl="/roles" title="ویرایش نقش">
      <Form action={EditRoleAction} variables={{ id }} redirect="/roles" initialValues={{ name }} px={20} pt={10} pb={20}>
        <TextInput name="name" label="نام" placeholder="نام" />
        <Submit />
      </Form>
    </Modal>

  );
}

export default EditRole;
