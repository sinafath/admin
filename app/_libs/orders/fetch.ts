import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { addOrderByIdProps, editOrderByIdProps, getAllOrdersResult, getOrderByIdResult, getOrdersResult } from "./types";
import idType from "@/libs/types/idType";

const route = "/api/v1/order"

function getAllOrders(init?: init) {
    return authenticatedFetch<getAllOrdersResult>(route,
        init
    )
}

function getOrdersPerPage({ page = 1, id = "desc", perPage = 10 } = {}, init?: init) {
    return authenticatedFetch<getOrdersResult>(appendParams(`${route}/page`,
        { page, id, perPage }),
        init
    )
}
function getOrderById({ id }: idType, init?: init) {
    return authenticatedFetch<getOrderByIdResult>(`${route}/${id}`,
        init
    )
}
function deleteOrderById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${route}/${id} `,
        {
            notification: "سفارش موفقیت حذف شد",
            ...init
        },
    )
}
function editOrderById({ id, ...props }: editOrderByIdProps, init?: init) {
    return authenticatedPatch(
        `${route}/${id} `,
        {
            body: props,
            notification: "سفارش با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addOrder(props: addOrderByIdProps, init?: init) {
    return authenticatedPost(
        route,
        {
            body: props,
            notification: "سفارش با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { getOrdersPerPage, deleteOrderById, getOrderById, editOrderById, addOrder ,getAllOrders}