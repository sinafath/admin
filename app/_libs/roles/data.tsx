import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { authenticatedDelete, authenticatedEdit, init } from "@/libs/http/fetch/fetch";
import { getRolesResult, getRoleByIdResult } from "./types";

type params = {
    page?: number | undefined;
    id?: string | undefined;
    perPage?: number | undefined;
}
function getRolesPerPage(params?: params, init?: init) {
    const { page = 1, id = "desc", perPage = 10 } = params || {}
    return authenticatedFetch<getRolesResult>(appendParams("/api/v1/role",
        { page, id, perPage }),
        init
    )
}
function getRoleById(id: number, init?: init) {
    return authenticatedFetch<getRoleByIdResult>(`/api/v1/role/${id}`,
        init
    )
}
function deleteRoleById(id: number, init?: init) {
    return authenticatedDelete(
        `/api/v1/role/${id} `,
        {
            notification: "نقش با موفقیت حذف شد",
            ...init
        },
    )
}
function editRoleById(id: number,name:String, init?: init) {
    return authenticatedEdit(
        `/api/v1/role/${id} `,
        {
            body:{
                
                    name: name,
                    default: false
                  
            },
            notification: "نقش با موفقیت ویرایش شد",
            ...init
        },

    )
}

export { getRolesPerPage, deleteRoleById, getRoleById, editRoleById }