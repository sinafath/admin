import { createSafeActionClient } from "next-safe-action";
import errorHandler from "./errorHandler";



const action = createSafeActionClient({
    handleReturnedServerError(e) {
        console.log({ee: e})
        return errorHandler(e)
    },
	handleServerErrorLog: (e) => {
		console.error("CUSTOM ERROR LOG FUNCTION:", e);
	},
});
export default action 
