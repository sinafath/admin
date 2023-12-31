import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { addUserByIdProps, getUserByIdResult, getUsersResult } from "./types";
import idType from "@/libs/types/idType";



function getUsersPerPage({ page = 1, id = "desc", perPage = 10 } = {}, init?: init) {
    return authenticatedFetch<getUsersResult>(appendParams("/api/v1/user",
        { page, id, perPage }),
        init
    )
}
function getUserById({ id }: idType, init?: init) {
    return authenticatedFetch<getUserByIdResult>(`/api/v1/user/${id}`,
        init
    )
}
function deleteUserById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `/api/v1/user/${id} `,
        {
            notification: "نقش با موفقیت حذف شد",
            ...init
        },
    )
}
function editUserById({id,...props}: addUserByIdProps & idType, init?: init) {
    return authenticatedPatch(
        `/api/v1/user/${id} `,
        {
            body:props,
            notification: "نقش با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addUser(porps: addUserByIdProps, init?: init) {
    return authenticatedPost(
        `/api/v1/user`,
        {
            body: porps,
            notification: "نقش با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { getUsersPerPage, deleteUserById, getUserById, editUserById ,addUser}