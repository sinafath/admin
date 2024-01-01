import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import { getAllRoutesResult } from "./types";

function getAllRoutes( init?: init) {
    return authenticatedFetch<getAllRoutesResult>("/api/v1/route",
        init
    )
}
export default getAllRoutes