import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import { getRoutesResult } from "./types";

function getAllRoutes( init?: init) {
    return authenticatedFetch<getRoutesResult>("/api/v1/route",
        init
    )
}
export default getAllRoutes