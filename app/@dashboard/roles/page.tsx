import Delete from "@/app/_components/Actions/Delete";
import Edit from "@/app/_components/Actions/Edit";
import Button from "@/app/_components/Table/Button";
import { Table, Thead } from "@/app/_components/Table/Table";
import { getProductsPerPage } from "@/app/_libs/products/fetch";
import { getRolesPerPage } from "@/app/_libs/roles/fetch";
import appendParams from "@/libs/http/searchParams/appendParams";
import { Box, Flex, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";

type TableProps<col extends string> = {
    data: {
        [key in col]: string;
    }[]
    cols: string[]
}
export const revalidate = 0

async function Dashboard() {
    const cols = ["اسم", "وصل شده", "عملیات ها"]
    const roles = await getRolesPerPage()
    return (
        <><Button href={"/roles/add"} >اضافه کردن</Button>
        <Table >
            <Thead >
                <TableTr>
                    {cols.map((col) => (
                        <TableTh key={col}>{col}</TableTh>
                    ))}
                </TableTr>
            </Thead>
            <TableTbody>{roles.data.map(({assignee,name,id}, index) => (
                <TableTr key={index}>
                    <TableTd >{name}</TableTd>
                    <TableTd >{assignee?.username}</TableTd>
                    <TableTd >
                        <Flex gap={5}> 
                        <Delete href={`/roles/delete/${id}`}/>
                        <Edit  href={`/roles/edit/${id}`}/>
                        </Flex>
                    </TableTd>
                </TableTr>
            ))}</TableTbody>
        </Table>
        </>
    )
}
export default Dashboard