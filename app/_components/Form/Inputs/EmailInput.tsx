import { ComponentProps } from "react";
import TextInput from "../TextInput";

function EmailInput(props:Omit<ComponentProps<typeof TextInput>,"name">){
    return <TextInput name='email' mt={20}  label="ایمیل" placeholder="hello@gmail.com" {...props} />

}
export default EmailInput