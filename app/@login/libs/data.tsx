import authenticatedFetch from "@/libs/http/fetch/fetch";
import { responseLogin } from "./types";

function userLogin(formDataExtracted:{}){
    return authenticatedFetch<responseLogin>("/api/v1/user/login", {
        body: formDataExtracted,
    })
}
export default userLogin