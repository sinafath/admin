import appendParams from "@/libs/http/searchParams/appendParams";
import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import { getPermissionsPageResult, getPermissionByIdResult } from "./types";
import idType from "@/libs/types/idType";
import routePermission from "./config";

function getPermissionsPerPage({ page = 1, id = "desc", perPage = 7 } = {}, init?: init) {
    return authenticatedFetch<getPermissionsPageResult>(appendParams(`${routePermission}/page`,
        { page, "orderBy[id]": id, perPage }),
        init
    )
}
function getAllPermissions(init?: init) {
    return authenticatedFetch<getPermissionsPageResult>(routePermission,
        init
    )
}
function getPermissionById({ id }: idType, init?: init) {
    return authenticatedFetch<getPermissionByIdResult>(`${routePermission}/${id}`,
        init
    )
}

export { getAllPermissions, getPermissionById, getPermissionsPerPage }