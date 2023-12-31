import { z } from "zod";
import ZodEmail from "../Zod/ZodEmail";

const HasEmail = z.object({  email:ZodEmail()})

    export default HasEmail