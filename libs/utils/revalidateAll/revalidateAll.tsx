import { revalidatePath } from "next/cache";

function revalidateAll(){
    return     revalidatePath("/","layout")

}
export default revalidateAll