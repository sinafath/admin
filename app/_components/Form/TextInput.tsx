"use client"
import { TextInput as TextInputMantine,TextInputProps } from "@mantine/core";
import { useFormContext } from "./Form";

function TextInput({name,...props}:TextInputProps & {name:string}){
    const form = useFormContext();
    return  <TextInputMantine size="md" name={name} mt="md" {...form.getInputProps(name)} {...props} />
}
export default TextInput