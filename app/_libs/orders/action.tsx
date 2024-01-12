"use server"

import { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch"
import { addOrderActionProps, editOrderActionProps } from "./types"
import idType from "@/libs/types/idType"
import routeOder from "./config"

function deleteOrderAction({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${routeOder}/${id} `,
        {
            notification: "سفارش موفقیت حذف شد",
            ...init
        },
    )
}

function addOrderAction(props: addOrderActionProps, init?: init) {
    return authenticatedPost(
        routeOder,
        {
            body: props,
            notification: "سفارش با موفقیت ویرایش شد",
            ...init
        },

    )
}

function editOrderAction({ id, ...props }: editOrderActionProps, init?: init) {
    return authenticatedPatch(
        `${routeOder}/${id} `,
        {
            body: props,
            notification: "سفارش با موفقیت ویرایش شد",
            ...init
        },

    )
}
export { editOrderAction, addOrderAction, deleteOrderAction }