import appendParams from "@/libs/http/appendParams/appendParams";
import authenticatedFetch, { authenticatedDelete } from "@/libs/http/fetch/fetch";
import { GetProductByIdResult } from "./types";

function getProductsPerPage({ page = 1, id = "desc", perPage = 10 }) {
    return authenticatedFetch(appendParams("/api/v1/product", { page, id, perPage }))
}
function getProductById(id: number) {
    return authenticatedFetch<GetProductByIdResult>(`/api/v1/product/${id}`)
}
function deleteProductById(id: number) {
    return authenticatedDelete(
        `/api/v1/user/${id} `
    )
}

export { getProductsPerPage, deleteProductById, getProductById }