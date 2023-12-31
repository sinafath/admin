import Delete from "@/app/_components/Actions/Delete";
import Edit from "@/app/_components/Actions/Edit";
import Button from "@/app/_components/Table/Button";
import { Table, Thead } from "@/app/_components/Table/Table";
import { getProductsPerPage } from "@/app/_libs/products/fetch";
import appendParams from "@/libs/http/searchParams/appendParams";
import { Flex, TableTbody, TableTd, TableTh, TableTr } from "@mantine/core";

type TableProps<col extends string> = {
    data: {
        [key in col]: string;
    }[]
    cols: string[]
}

async function Dashboard() {
    const cols = ["اسم", "مدت ", "عملیات ها"]
    const products = await getProductsPerPage()
    return (
        <><Button href={"/add"} >اضافه کردن</Button>
        <Table >
            <Thead >
                <TableTr>
                    {cols.map((col) => (
                        <TableTh key={col}>{col}</TableTh>
                    ))}
                </TableTr>
            </Thead>
            <TableTbody>{products?.data.map(({ name, id, durationTime }, index) => (
                <TableTr key={index}>
                    <TableTd >{name}</TableTd>
                    <TableTd >{durationTime}</TableTd>
                    <TableTd >
                        <Flex gap={5}>
                            <Delete href={`/delete/${id}`} />
                            <Edit href={`/edit/${id}`} />
                        </Flex>
                    </TableTd>
                </TableTr>
            ))}</TableTbody>
        </Table>
        </>
    )
}
export default Dashboard