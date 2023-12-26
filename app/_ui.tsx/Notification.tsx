"use client"
import { notifications } from "@mantine/notifications"
import { useEffect } from "react"
import { deleteNotificationAction } from "../_libs/actions"

type NotificationProps = {
    message?: string
}
function Notification({ message }: NotificationProps) {
    useEffect(() => {
        message && notifications.show({
            autoClose: 4000,
            title: message,
            message,
            onClose: () => deleteNotificationAction()
        })
    })
    return null

}

export default Notification