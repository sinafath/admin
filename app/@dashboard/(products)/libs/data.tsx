import appendParams from "@/libs/http/appendParams/appendParams";
import Customfetch from "@/libs/http/fetch/fetch";

function getProductsPerPage({ page = 1, id = "desc" }) {
    return Customfetch(appendParams("/api/v1/product", { page, id }))
}
export { getProductsPerPage }