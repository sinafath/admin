"use server"
import { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch"
import { addProductProps, editProductByIdProps } from "./types"
import routeProduct from "./config"
import idType from "@/libs/types/idType"

function deleteProductAction({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${routeProduct}/${id} `,
        {
            notification: "محصول با موفقیت حذف شد",
            ...init
        },
    )
}
function editProductAction({ durationTime = 10000, name, userId, id }: editProductByIdProps, init?: init) {
    return authenticatedPatch(
        `${routeProduct}/${id} `,
        {
            body: { durationTime, name, userId },
            notification: "محصول با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addProductAction({ durationTime = 10000, name, userId }: addProductProps, init?: init) {
    return authenticatedPost(
        routeProduct,
        {
            body: { durationTime, name, userId },
            notification: "محصول با موفقیت ثبت شد",
            ...init
        },

    )
}
export { deleteProductAction, addProductAction, editProductAction }