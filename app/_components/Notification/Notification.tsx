"use client"
import { Notifications, notifications } from "@mantine/notifications"
import { useEffect } from "react"

type NotificationProps = {
    message?: string
}
function Notification({ message }: NotificationProps) {
    useEffect(() => {
        message && notifications.show({
            autoClose: 3000,
            title: "موفق",
            message,
            withCloseButton: true
        })
    })
    return <Notifications />
}

export default Notification