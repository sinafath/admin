import appendParams from "@/libs/http/appendParams/appendParams";
import authenticatedFetch, { authenticatedDelete, init } from "@/libs/http/fetch/fetch";
import { GetProductByIdResult } from "./types";

function getProductsPerPage({ page = 1, id = "desc", perPage = 10 }, init?: init) {
    return authenticatedFetch(appendParams("/api/v1/product",
        { page, id, perPage }),
        init
    )
}
function getProductById(id: number, init?: init) {
    return authenticatedFetch<GetProductByIdResult>(`/api/v1/product/${id}`,
        init
    )
}
function deleteProductById(id: number, init?: init) {
    return authenticatedDelete(
        `/api/v1/user/${id} `,
        init
    )
}

export { getProductsPerPage, deleteProductById, getProductById }