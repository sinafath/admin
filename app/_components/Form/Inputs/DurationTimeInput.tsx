import { ComponentProps } from "react";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput";

function DurationTimeInput(props: Omit<ComponentProps<typeof TextInput>, "name">) {
    return <NumberInput name="durationTime"  label="مدت زمان" placeholder="مدت زمان"  />

}
export default DurationTimeInput