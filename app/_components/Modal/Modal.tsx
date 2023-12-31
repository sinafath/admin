"use client"
import { Box, Modal as MantineModal, BoxProps as MantineBoxProps } from "@mantine/core";

import classes from './Modal.module.css';
import { IconCross, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

type boxProps = PropsWithChildren<MantineBoxProps> & {
  
    title:string
}

function Modal({title, ...props }: boxProps) {
    const route = useRouter()
    return <Box className={classes.overlay} onClick={()=> route.back()}>
        <Box className={classes.modal} px={40}  py={40}  onClick={(e)=> {e.stopPropagation()}}>
            <div className={classes.header}>
                <span className={classes.title}>{title}</span>
            </div>
            <Box className={classes.titke} {...props}/>
        </Box>
    </Box>
}
export default Modal