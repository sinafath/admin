import { z } from "zod";
import ZodEmail from "../effect/ZodEmail";

const HasEmail = z.object({  email:ZodEmail()})

    export default HasEmail