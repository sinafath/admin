import Delete from "@/app/_components/Actions/Delete";
import Edit from "@/app/_components/Actions/Edit";
import Button from "@/app/_components/Table/Button";
import { Table, Thead } from "@/app/_components/Table/Table";
import { getProductsPerPage } from "@/app/_libs/products/fetch";
import { getRolesPerPage } from "@/app/_libs/roles/fetch";
import { getUsersPerPage } from "@/app/_libs/users/fetch";
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
    const cols = ["نام کاربری", "ایمیل", "عملیات ها"]
    const {data:users} = await getUsersPerPage()
    return (
        <><Button href={"/users/add"} >اضافه کردن</Button>
        <Table >
            <Thead >
                <TableTr>
                    {cols.map((col) => (
                        <TableTh key={col}>{col}</TableTh>
                    ))}
                </TableTr>
            </Thead>
            <TableTbody>{users.map(({email,username,id}, index) => (
                <TableTr key={index}>
                    <TableTd >{username}</TableTd>
                    <TableTd >{email}</TableTd>
                    <TableTd >
                        <Flex gap={5}> 
                        <Delete href={`/users/delete/${id}`}/>
                        <Edit  href={`/users/edit/${id}`}/>
                        </Flex>
                    </TableTd>
                </TableTr>
            ))}</TableTbody>
        </Table>
        </>
    )
}
export default Dashboard