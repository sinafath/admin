import authenticatedFetch from "@/libs/http/fetch/fetch";
import { responseLogin } from "./types";

function userLogin(data: {
    email: string;
    password: string;
}) {
    return authenticatedFetch<responseLogin>("/api/v1/user/login", {
        body: data,
    })
}

export default userLogin