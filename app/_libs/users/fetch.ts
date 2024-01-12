import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, {init } from "@/libs/http/fetch/fetch";
import {  getAllUsersResult, getUserByIdResult, getUsersResult } from "./types";
import idType from "@/libs/types/idType";


const route = "/api/v1/user"
function getUsersPerPage({ page = 1, id = "desc", perPage = 7 } = {}, init?: init) {
    return authenticatedFetch<getUsersResult>(appendParams(`${route}/page`,
        { page, "orderBy[id]":id, perPage }),
        init
    )
}
function getAllUsers(init?: init) {
    return authenticatedFetch<getAllUsersResult>(route,
        init
    )
}
function getUserById({ id }: idType, init?: init) {
    return authenticatedFetch<getUserByIdResult>(`${route}/${id}`,
        init
    )
}

export { getUsersPerPage,  getUserById, getAllUsers }