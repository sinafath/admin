import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { addUserByIdProps, getAllUsersResult, getUserByIdResult, getUsersResult } from "./types";
import idType from "@/libs/types/idType";


const route = "/api/v1/user"
function getUsersPerPage({ page = 1, id = "desc", perPage = 7 } = {}, init?: init) {
    return authenticatedFetch<getUsersResult>(appendParams(`${route}/page`,
        { page, id, perPage }),
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
function deleteUserById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${route}/${id} `,
        {
            notification: "نقش با موفقیت حذف شد",
            ...init
        },
    )
}
function editUserById({ id, ...props }: addUserByIdProps & idType, init?: init) {
    return authenticatedPatch(
        `${route}/${id} `,
        {
            body: props,
            notification: "نقش با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addUser(porps: addUserByIdProps, init?: init) {
    return authenticatedPost(
        route,
        {
            body: porps,
            notification: "نقش با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { getUsersPerPage, deleteUserById, getUserById, editUserById, addUser, getAllUsers }