import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import { getAllOrdersResult, getOrderByIdResult, getOrdersPageResult } from "./types";
import idType from "@/libs/types/idType";
import routeOder from "./config";


function getAllOrders(init?: init) {
    return authenticatedFetch<getAllOrdersResult>(routeOder,
        init
    )
}

function getOrdersPerPage({ page = 1, id = "desc",  perPage = 7} = {}, init?: init) {
    return authenticatedFetch<getOrdersPageResult>(appendParams(`${routeOder}/page`,
        { page, "orderBy[id]":id, perPage }),
        init
    )
}
function getOrderById({ id }: idType, init?: init) {
    return authenticatedFetch<getOrderByIdResult>(`${routeOder}/${id}`,
        init
    )
}

export { getOrdersPerPage, getOrderById ,getAllOrders}