import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { editRoleByIdProps, getRoleByIdResult, getRolesResult } from "./types";
import idType from "@/libs/types/idType";

const route = "/api/v1/role"

function getRolesPerPage({ page = 1, id = "desc", perPage = 10 } = {}, init?: init) {
    return authenticatedFetch<getRolesResult>(appendParams(route,
        { page, id, perPage }),
        init
    )
}
function getRoleById({ id }: idType, init?: init) {
    return authenticatedFetch<getRoleByIdResult>(`${route}/${id}`,
        init
    )
}
function deleteRoleById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${route}/${id} `,
        {
            notification: "نقش با موفقیت حذف شد",
            ...init
        },
    )
}
function editRoleById({ id, name, defaultValue = false }: editRoleByIdProps, init?: init) {
    return authenticatedPatch(
        `${route}/${id} `,
        {
            body: {
                name: name,
                default: defaultValue
            },
            notification: "کاربر با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addRole({ id, name, defaultValue = false }: editRoleByIdProps, init?: init) {
    return authenticatedPost(
        route,
        {
            body: {
                name: name,
                default: defaultValue
            },
            notification: "کاربر با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { getRolesPerPage, deleteRoleById, getRoleById, editRoleById ,addRole}