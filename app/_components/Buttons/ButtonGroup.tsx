import { Flex, FlexProps, Group, GroupProps } from "@mantine/core";

function ButtonGroup(props: FlexProps) {
    return <Flex gap={5} {...props} />
}

function ButtonGroupModal(props: GroupProps) {
    return <Group grow justify="center" pt={25} {...props}/>
}
export { ButtonGroupModal }
export default ButtonGroup