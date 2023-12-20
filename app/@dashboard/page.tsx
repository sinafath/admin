import { Button, Flex } from "@mantine/core";
import { Table } from "./ui/Table/Table";
import { IconPlus } from "@tabler/icons-react";
const data = [
    {
        "name": "Athena Weissnat",
        "company": "Little - Rippin",
        "email": "Elouise.Prohaska@yahoo.com"
    },
    {
        "name": "Deangelo Runolfsson",
        "company": "Greenfelder - Krajcik",
        "email": "Kadin_Trantow87@yahoo.com"
    },
    {
        "name": "Danny Carter",
        "company": "Kohler and Sons",
        "email": "Marina3@hotmail.com"
    },
    {
        "name": "Trace Tremblay PhD",
        "company": "Crona, Aufderhar and Senger",
        "email": "Antonina.Pouros@yahoo.com"
    },
    {
        "name": "Derek Dibbert",
        "company": "Gottlieb LLC",
        "email": "Abagail29@hotmail.com"
    },
    {
        "name": "Viola Bernhard",
        "company": "Funk, Rohan and Kreiger",
        "email": "Jamie23@hotmail.com"
    },
    {
        "name": "Austin Jacobi",
        "company": "Botsford - Corwin",
        "email": "Genesis42@yahoo.com"
    },
    {
        "name": "Hershel Mosciski",
        "company": "Okuneva, Farrell and Kilback",
        "email": "Idella.Stehr28@yahoo.com"
    },
    {
        "name": "Mylene Ebert",
        "company": "Kirlin and Sons",
        "email": "Hildegard17@hotmail.com"
    },
]
function DashBoard() {
    return (
        <>
            <Flex mb={20}>
                <Button leftSection={<IconPlus size={14} />}>  محصول جدید</Button>
            </Flex>

            <Table data={data} cols={["اسم", "شر", "ایمی"]}></Table></>
    )
}
export default DashBoard