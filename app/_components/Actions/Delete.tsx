import { ActionIcon, ActionIconProps } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import Link, { LinkProps } from "next/link"

function Delete(props: ActionIconProps & LinkProps) {
    return <ActionIcon component={Link} variant="light" color="red" {...props}>
        <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
}

export default Delete