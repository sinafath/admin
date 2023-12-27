import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import { responseLogin } from "./types";

function userLogin(data: {
    email: string;
    password: string;
},init?:init) {
    return authenticatedFetch<responseLogin>("/api/v1/user/login", {
        body: data,
        ...init
    },)
}

export default userLogin