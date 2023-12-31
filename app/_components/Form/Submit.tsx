"use client"

import { Button as MantineButton, ButtonProps } from "@mantine/core"
import { useFormStatus } from "react-dom"
import { useFormContext } from "./Form";

function Submit({ children = "تایید", ...props }: ButtonProps) {
    const { pending } = useFormStatus()
    return (
        <>
            <MantineButton fullWidth mt="xl" size="md" type='submit' loading={pending} {...props} >
            {children}
                </MantineButton>
        </>
    )
}
export default Submit