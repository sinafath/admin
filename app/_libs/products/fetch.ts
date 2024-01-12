import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, {  init } from "@/libs/http/fetch/fetch";
import { GetAllProductsResult,  GetProductByIdResult, GetProductsPageResult} from "./types";
import idType from "@/libs/types/idType";

const route = "/api/v1/product"
function getAllProducts(init?: init) {
    return authenticatedFetch<GetAllProductsResult>(route,
        init
    )
}

function getProductsPerPage({ page = 1, id = "desc", perPage = 7 } = {}, init?: init) {
    return authenticatedFetch<GetProductsPageResult>(appendParams(`${route}/page`,
        { page, "orderBy[id]":id, perPage }),
        init
    )
}
function getProductById({ id }: idType, init?: init) {
    return authenticatedFetch<GetProductByIdResult>(`${route}/${id}`,
        init
    )
}

export { getProductsPerPage, getProductById, getAllProducts }