import { Button as MantineButton, ButtonProps } from "@mantine/core"
import { useFormStatus } from "react-dom"
import { useFormContext } from "./Form";

function Submit({ children = "نایید", ...props }: ButtonProps) {
    const { pending } = useFormStatus()
    const form = useFormContext();
    return (
        <>
            <MantineButton fullWidth mt="xl" size="md" type='submit' loading={pending} {...props} />
            {form.errors?.message}
        </>
    )
}
export default Submit