import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import {  getAllRolesResult, getRoleByIdResult, getRolesPageResult } from "./types";
import idType from "@/libs/types/idType";

const route = "/api/v1/role"

function getAllRoles(init?: init) {
    return authenticatedFetch<getAllRolesResult>(route,
        init
    )
}

function getRolesPerPage({ page = 1, id = "desc",  perPage = 7} = {}, init?: init) {
    return authenticatedFetch<getRolesPageResult>(appendParams(`${route}/page`,
        { page, "orderBy[id]":id, perPage }),
        init
    )
}
function getRoleById({ id }: idType, init?: init) {
    return authenticatedFetch<getRoleByIdResult>(`${route}/${id}`,
        init
    )
}


export { getRolesPerPage, getRoleById,getAllRoles}