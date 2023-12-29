import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedEdit, init } from "@/libs/http/fetch/fetch";
import { GetProducsResult, GetProductByIdResult } from "./types";

type params = {
    page?: number | undefined;
    id?: string | undefined;
    perPage?: number | undefined;
}
function getProductsPerPage(params?: params, init?: init) {
    const { page = 1, id = "desc", perPage = 10 } = params || {}
    return authenticatedFetch<GetProducsResult>(appendParams("/api/v1/product",
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
        `/api/v1/product/${id} `,
        {
            notification: "محصول با موفقیت حذف شد",
            ...init
        },
    )
}
function editProductById(id: number, init?: init) {
    return authenticatedEdit(
        `/api/v1/product/${id} `,
        {
            notification: "محصول با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { getProductsPerPage, deleteProductById, getProductById, editProductById }