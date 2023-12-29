import { ActionIcon, ActionIconProps } from "@mantine/core"
import { IconEdit } from "@tabler/icons-react"
import Link, { LinkProps } from "next/link"

function Edit(props: ActionIconProps & LinkProps) {
    return <ActionIcon component={Link} variant="light" color="blue" {...props}>
        <IconEdit style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
}

export default Edit