"use client"

import { Button as MantineButton, ButtonProps } from "@mantine/core"
import { useFormStatus } from "react-dom"
import { useFormContext } from "./Form";
import { useActionContext } from "./ActionContext";

function Submit({ children = "تایید", ...props }: ButtonProps) {
    const { pending } = useFormStatus()
    const status = useActionContext()
    return (
        <>
            <MantineButton fullWidth mt="xl" size="md" type='submit' loading={status === "executing"} {...props} >
            {children}
                </MantineButton>
        </>
    )
}
export default Submit