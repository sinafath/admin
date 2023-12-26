"use client"
import { Notifications, notifications } from "@mantine/notifications"
import { useEffect } from "react"

type NotificationProps = {
    message?: string
}
function Notification({ message }: NotificationProps) {
    useEffect(() => {
        message && notifications.show({
            autoClose: 4000,
            title: message,
            message,
        })
    })
    return <Notifications />

}

export default Notification