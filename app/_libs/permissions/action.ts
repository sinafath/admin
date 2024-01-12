import { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch"
import idType from "@/libs/types/idType"
import { addPermissionActionProps } from "./types"
import routePermission from "./config"


function deletePermissionAction({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${routePermission}/${id} `,
        {
            notification: "دسترسی با موفقیت حذف شد",
            ...init
        },
    )
}
function editPermissionAction({ id, ...props }: addPermissionActionProps & idType, init?: init) {
    return authenticatedPatch(
        `${routePermission}/${id} `,
        {
            body: props,
            notification: "دسترسی با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addPermissionAction(porps: addPermissionActionProps, init?: init) {
    return authenticatedPost(
        routePermission,
        {
            body: porps,
            notification: "دسترسی با موفقیت اضافه شد",
            ...init
        },

    )
}
export { addPermissionAction, editPermissionAction, deletePermissionAction }