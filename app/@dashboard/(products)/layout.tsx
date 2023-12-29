import { ReactNode } from "react";

export default ProductsLayout;
type ProductsLayoutProps = {
  children: ReactNode;
  modal:ReactNode
};
function ProductsLayout({
  children, 
  modal
}: ProductsLayoutProps) {
  return (
    <section>
      {modal}
      {children}
    </section>
  );
}
