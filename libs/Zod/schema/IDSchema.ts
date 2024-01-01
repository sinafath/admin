import { z } from "zod";
import ZodNumber from "../effect/ZodNumber";

const HasIDSchema = z.object({ id: ZodNumber("ای دی") });
export default HasIDSchema
