"use client"
import { Modal as MantineModal, ModalProps as MantineModalProps } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import classes from './Modal.module.css';

type ModalProps = Partial<MantineModalProps> & {
    openUrl: string,
    closeUrl: string
}
function Modal({ openUrl, closeUrl, ...props }: ModalProps) {
    const pathname = usePathname()
    const [opened, { open, close }] = useDisclosure(false);
    useEffect(() => {
        if (pathname === openUrl) open()
        if (pathname === closeUrl) close()
    }, [pathname])
    const route = useRouter()
    return <MantineModal classNames={{title:classes.title}} centered transitionProps={{}} opened={opened} onClose={() => {
        close()
        route.push(closeUrl)
    }} {...props}  />
}
export default Modal