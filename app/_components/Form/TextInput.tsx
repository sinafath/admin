import { TextInput as TextInputMantine,TextInputProps } from "@mantine/core";
import { useFormContext } from "./Form";

function TextInput({name = "",...props}:TextInputProps){
    const form = useFormContext();
    return  <TextInputMantine {...form.getInputProps(name)} {...props}/>
}
