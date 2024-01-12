"use server"
import { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import { addRoleActionProps, editRoleActionProps } from "./types";
import idType from "@/libs/types/idType";
import routeRole from "./config";

function deleteRoleAction({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${routeRole}/${id} `,
        {
            notification: "نقش با موفقیت حذف شد",
            ...init
        },
    )
}
function editRoleAction({ id, name, defaultValue = false }: editRoleActionProps, init?: init) {
    return authenticatedPatch(
        `${routeRole}/${id} `,
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
function addRoleAction({ name, defaultValue = false }: addRoleActionProps, init?: init) {
    return authenticatedPost(
        routeRole,
        {
            body: {
                name: name,
                default: defaultValue
            },
            notification: "کاربر با موفقیت اضافه شد",
            ...init
        },

    )
}

export { deleteRoleAction, editRoleAction, addRoleAction }