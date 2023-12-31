import { ComponentProps } from "react";
import TextInput from "../TextInput";

function HiddenIdInput(props:Omit<ComponentProps<typeof TextInput>,"name">){
    return <TextInput name="id" type="hidden"  {...props}/>

}
export default HiddenIdInput