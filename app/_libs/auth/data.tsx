import authenticatedFetch, { init } from "@/libs/http/fetch/fetch";
import { responseLogin } from "./types";

function userLogin(data: {
    email: string;
    password: string;
}, init?: init) {
    return authenticatedFetch<responseLogin>("/api/v1/user/login", {
        body: data,
        notification: false,
        ...init
    },)
}
function userRole(id:number,init?: init) {
    return authenticatedFetch<responseLogin>(`/api/v1/user/role/${id}`, {
        notification: "کاربر با موفقیت وارد شد",
    },)
}

export { userLogin, userRole }