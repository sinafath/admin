"use server"
import { deleteNotification } from "@/libs/http/cookies/notification";

async function deleteNotificationAction() {
    deleteNotification()
}
export { deleteNotificationAction }