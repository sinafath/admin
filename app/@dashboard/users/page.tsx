import { Edit, Delete, ButtonGroup } from "@/app/_components/Buttons";
import Pagination from "@/app/_components/Pagination/Pagination";
import { Table, Thead, Button } from "@/app/_components/Table/Table";
import { getUsersPerPage } from "@/app/_libs/users/fetch";
import searchParams from "@/libs/types/searchParamsType";
import { TableTbody, TableTd, TableTh, TableTr } from "@mantine/core";

const route = "/users"

async function TableUsers({
    searchParams: { page = 1, id } = {},
}: searchParams) {
    const cols = ["نام کاربری", "ایمیل", "عملیات ها"]
    const { data: { data: users, meta: { total } } } = await getUsersPerPage({ page: Number(page), id })
    return (
        <>
            <Button href={`${route}/add`} >اضافه کردن</Button>
            <Table >
                <Thead >
                    <TableTr>
                        {cols.map((col) => (
                            <TableTh key={col}>{col}</TableTh>
                        ))}
                    </TableTr>
                </Thead>
                <TableTbody>{users.map(({ email, username, id }, index) => (
                    <TableTr key={index}>
                        <TableTd >{username}</TableTd>
                        <TableTd >{email}</TableTd>
                        <TableTd >
                            <ButtonGroup>
                                <Delete href={`${route}/delete/${id}`} />
                                <Edit href={`${route}/edit/${id}`} />
                            </ButtonGroup>
                        </TableTd>
                    </TableTr>
                ))}</TableTbody>
            </Table>
            <Pagination total={total} />
        </>
    )
}
export default TableUsers