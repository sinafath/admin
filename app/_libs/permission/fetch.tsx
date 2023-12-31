import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { addPermissionProps, getUserByIdResult, getUsersResult } from "./types";
import idType from "@/libs/types/idType";


const route = "/api/v1/permission"

function getPermissionsPerPage({ page = 1, id = "desc", perPage = 10 } = {}, init?: init) {
    return authenticatedFetch<getUsersResult>(appendParams(route,
        { page, id, perPage }),
        init
    )
}
function getAllPermissions( init?: init) {
    return authenticatedFetch<getUsersResult>(route,
        init
    )
}
function getPermissionById({ id }: idType, init?: init) {
    return authenticatedFetch<getUserByIdResult>(`${route}/${id}`,
        init
    )
}
function deletePermissionById({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${route}/${id} `,
        {
            notification: "دسترس با موفقیت حذف شد",
            ...init
        },
    )
}
function editPermissionById({id,...props}: addPermissionProps & idType, init?: init) {
    return authenticatedPatch(
        `${route}/${id} `,
        {
            body:props,
            notification: "دسترس با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addPermission(porps: addPermissionProps, init?: init) {
    return authenticatedPost(
        route,
        {
            body: porps,
            notification: "دسترس با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { addPermission,editPermissionById,deletePermissionById,getAllPermissions,getPermissionById,getPermissionsPerPage}