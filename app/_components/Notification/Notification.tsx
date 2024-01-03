"use client"
import getNotification from "@/libs/http/cookies/notification"
import { Notifications, notifications } from "@mantine/notifications"
import { useEffect } from "react"
type NotificationProps = {
    notification?: ReturnType<typeof getNotification>
}
function Notification({ notification: { message, type } = {} }: NotificationProps) {
    useEffect(() => {
        message && notifications.show({
            autoClose: 3000,
            color: type === "error" ? "red" : "blue",
            title: type === "error" ? "خطا" : "با موفقیت",
            message,
            withCloseButton: true
        })
    })
    return <Notifications />
}

export default Notification