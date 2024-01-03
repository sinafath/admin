import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { GetAllProductsResult,  GetProductByIdResult, GetProductsResult, addProductProps, editProductByIdProps } from "./types";
import idType from "@/libs/types/idType";

const route = "/api/v1/product"
function getAllProducts(init?: init) {
    return authenticatedFetch<GetAllProductsResult>(route,
        init
    )
}

function getProductsPerPage({ page = 1, id = "desc", perPage = 7 } = {}, init?: init) {
    return authenticatedFetch<GetProductsResult>(appendParams(`${route}/page`,
        { page, "orderBy[id]":id, perPage }),
        init
    )
}
function getProductById({ id }: idType, init?: init) {
    return authenticatedFetch<GetProductByIdResult>(`${route}/${id}`,
        init
    )
}
function deleteProductById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${route}/${id} `,
        {
            notification: "محصول با موفقیت حذف شد",
            ...init
        },
    )
}
function editProductById({ durationTime = 10000, name, userId, id }: editProductByIdProps, init?: init) {
    return authenticatedPatch(
        `${route}/${id} `,
        {
            body: { durationTime, name, userId },
            notification: "محصول با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addProduct({ durationTime = 10000, name, userId }: addProductProps, init?: init) {
    return authenticatedPost(
        route,
        {
            body: { durationTime, name, userId },
            notification: "محصول با موفقیت ثبت شد",
            ...init
        },

    )
}

export { getProductsPerPage, deleteProductById, getProductById, editProductById, addProduct,getAllProducts }