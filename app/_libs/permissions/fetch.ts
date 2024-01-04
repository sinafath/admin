import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { addPermissionProps, getPermissionsPageResult, getPermissionByIdResult } from "./types";
import idType from "@/libs/types/idType";

const route = "/api/v1/permission"

function getPermissionsPerPage({ page = 1, id = "desc",  perPage = 7} = {}, init?: init) {
    return authenticatedFetch<getPermissionsPageResult>(appendParams(`${route}/page`,
        { page, "orderBy[id]":id, perPage }),
        init
    )
}
function getAllPermissions( init?: init) {
    return authenticatedFetch<getPermissionsPageResult>(route,
        init
    )
}
function getPermissionById({ id }: idType, init?: init) {
    return authenticatedFetch<getPermissionByIdResult>(`${route}/${id}`,
        init
    )
}
function deletePermissionById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${route}/${id} `,
        {
            notification: "دسترسی با موفقیت حذف شد",
            ...init
        },
    )
}
function editPermissionById({id,...props}: addPermissionProps & idType, init?: init) {
    return authenticatedPatch(
        `${route}/${id} `,
        {
            body:props,
            notification: "دسترسی با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addPermission(porps: addPermissionProps, init?: init) {
    return authenticatedPost(
        route,
        {
            body: porps,
            notification: "دسترسی با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { addPermission,editPermissionById,deletePermissionById,getAllPermissions,getPermissionById,getPermissionsPerPage}