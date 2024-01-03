import { createSafeActionClient } from "next-safe-action";



const action = createSafeActionClient({
    handleReturnedServerError(e) {

        return { serverError: e.message }
    },
    handleServerErrorLog: (e) => {
        console.error("CUSTOM ERROR LOG FUNCTION:", e);
    },
});

export default action 
