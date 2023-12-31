import { Button as MantineButton, Flex, ButtonProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link, { LinkProps } from "next/link";

function Button(props: ButtonProps & LinkProps) {
    return <Flex mb={20}>
        <MantineButton component={Link} leftSection={<IconPlus size={14} />} {...props} />
    </Flex>
}
export default Button