import { ActionState } from "@/app/_components/Form/ActionContext"
import { useState } from "react"

function useAction<data extends {}>(action: (props: any) => Promise<data>) {
    const [status, setStatus] = useState<ActionState>("idle")
    const [result, setResult] = useState<data>()
    const [serverError, setServerError] = useState<string>()
    async function execute(props: {}) {
        try {
            setStatus("executing")
            const data = await action(props)
            setResult(data)
            setStatus("hasSucceeded")
        } catch (error) {
            setStatus("hasErrored")
            setServerError((error as unknown as any)?.message)
        }
    }
    return ({ status, result, execute, serverError })
}
export default useAction 