"use server"
import { authenticatedDelete, authenticatedPatch, authenticatedPost, init } from "@/libs/http/fetch/fetch";
import idType from "@/libs/types/idType";
import routeUser from "./config";
import { EditUserActionProps, addUserActionProps } from "./types";

function deleteUserAction({ id }: idType, init?: init) {
    return authenticatedDelete(
        `${routeUser}/${id} `,
        {
            notification: "کاربر با موفقیت حذف شد",
            ...init
        },
    )
}
function editUserAction({ id, ...props }: EditUserActionProps, init?: init) {
    return authenticatedPatch(
        `${routeUser}/${id} `,
        {
            body: props,
            notification: "کاربر با موفقیت ویرایش شد",
            ...init
        },

    )
}
function addUserAction(porps: addUserActionProps, init?: init) {
    return authenticatedPost(
        routeUser,
        {
            body: porps,
            notification: "کاربر با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { addUserAction, editUserAction, deleteUserAction }