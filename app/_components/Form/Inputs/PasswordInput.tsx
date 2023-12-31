"use client"

import { PasswordInput as PasswordInputMantine, PasswordInputProps } from "@mantine/core";
import { useFormContext } from "../Form";

function PasswordInput({ name = "password", ...props }: PasswordInputProps & { name?: string }) {
    const form = useFormContext();
    return <PasswordInputMantine label="رمز عبور" placeholder="رمز عبور" mt="md" size="md" {...form.getInputProps(name)} {...props} />
}
export default PasswordInput