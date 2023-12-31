"use client"
import { ComponentProps } from "react";
import TextInput from "./TextInput";
import { NumberInput as MantineNumberInput } from "@mantine/core";
import { useFormContext } from "./Form";

function NumberInput({ name, ...props }: ComponentProps<typeof MantineNumberInput> & { name: string }) {
    const form = useFormContext();
    return <MantineNumberInput size="md" allowLeadingZeros mt={20} name={name}  {...form.getInputProps(name)}hideControls {...props} />

}
export default NumberInput