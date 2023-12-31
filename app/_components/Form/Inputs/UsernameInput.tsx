import { ComponentProps } from "react";
import TextInput from "../TextInput";

function UsernameInput(props:Omit<ComponentProps<typeof TextInput>,"name">){
    return <TextInput name="username" label="نام کاربری" placeholder="نام کاربری"  {...props}/>

}
export default UsernameInput