"use client"
import { Button, ButtonProps } from "@mantine/core";
import { useRouter } from "next/navigation";


function Cancel(props: ButtonProps) {
    const route = useRouter()
    return (
        <Button color="red" size="md" onClick={() => route.back()} {...props} >
            لغو
        </Button>
    )
}
export default Cancel