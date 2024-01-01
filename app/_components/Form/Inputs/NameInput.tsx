import { ComponentProps } from "react";
import TextInput from "../TextInput";

function NameInput(props:Omit<ComponentProps<typeof TextInput>,"name">){
    return <TextInput  name="name" label="نام" placeholder="نام" {...props}/>

}
export default NameInput