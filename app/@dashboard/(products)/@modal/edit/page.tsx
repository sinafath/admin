import { Form } from "@/app/_components/Form/Form";
import TextInput from "@/app/_components/Form/TextInput";
import Modal from "@/app/_components/Modal/Modal";
import { EditProductAction } from "@/app/_libs/products/actions";

function EditProduct() {
  return (
    <Modal openUrl="/edit" closeUrl="/" >
      <Form action={EditProductAction}>
        <TextInput name=""/>
      </Form>
  </Modal>

  );
}

export default EditProduct;
