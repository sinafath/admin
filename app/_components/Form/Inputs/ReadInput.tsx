import { ComponentProps } from "react";
import TextInput from "../TextInput";

function ReadInput(props:Omit<ComponentProps<typeof TextInput>,"name">){
    return <TextInput  name="read" label="read" placeholder="read" {...props}/>

}
export default ReadInput