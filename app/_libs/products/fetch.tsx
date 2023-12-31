import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { GetProducsResult, GetProductByIdResult, addProductProps, editProductByIdProps } from "./types";
import idType from "@/libs/types/idType";


function getProductsPerPage({ page = 1, id = "desc", perPage = 10 } = {}, init?: init) {
    return authenticatedFetch<GetProducsResult>(appendParams("/api/v1/product",
        { page, id, perPage }),
        init
    )
}
function getProductById({ id }: idType, init?: init) {
    return authenticatedFetch<GetProductByIdResult>(`/api/v1/product/${id}`,
        init
    )
}
function deleteProductById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `/api/v1/product/${id} `,
        {
            notification: "محصول با موفقیت حذف شد",
            ...init
        },
    )
}
function editProductById({ durationTime = 10000, name, userId, id }: editProductByIdProps, init?: init) {
    return authenticatedPatch(
        `/api/v1/product/${id} `,
        {
            body: { durationTime , name, userId },
            notification: "محصول با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addProduct({ durationTime = 10000, name, userId }: addProductProps, init?: init) {
    return authenticatedPost(
        `/api/v1/product `,
        {
            body: { durationTime, name, userId },
            notification: "محصول با موفقیت ثبت شد",
            ...init
        },

    )
}

export { getProductsPerPage, deleteProductById, getProductById, editProductById, addProduct }