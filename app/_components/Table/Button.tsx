import { Button as MantineButton, Flex, ButtonProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

function Button(props: ButtonProps) {
    return <Flex mb={20}>
        <MantineButton leftSection={<IconPlus size={14} />} {...props} />
    </Flex>
}
export default Button