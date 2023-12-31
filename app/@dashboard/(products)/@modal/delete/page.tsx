import { Form } from "@/app/_components/Form/Form";
import Modal from "@/app/_components/Modal/Modal";
import { EditProductAction } from "@/app/_libs/products/actions";

function deleteProduct() {
  
  return (
    <Modal >
      <Form action={EditProductAction} >
      </Form>
  </Modal>
  );
}

export default deleteProduct;
