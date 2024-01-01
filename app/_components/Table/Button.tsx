import { Button as MantineButton, Flex, ButtonProps } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link, { LinkProps } from "next/link";

function Button(props: ButtonProps & LinkProps) {
    return   <MantineButton mt={"auto"} component={Link} leftSection={<IconPlus size={14} />} {...props} />
}
export default Button