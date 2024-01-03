import { Edit, Delete, ButtonGroup } from "@/app/_components/Buttons";
import Pagination from "@/app/_components/Pagination/Pagination";
import SortSelect from "@/app/_components/Selects/SortSelect";
import { Table, Thead, Button } from "@/app/_components/Table/Table";
import { getRolesPerPage } from "@/app/_libs/roles/fetch";
import searchParams from "@/libs/types/searchParamsType";
import { Group, TableTbody, TableTd, TableTh, TableTr } from "@mantine/core";

const route = "/roles"

async function TableRoles({
    searchParams: { id, page = 1 } = {},
}: searchParams) {
    const cols = ["اسم", "وصل شده", "عملیات ها"]
    const { data: { data: roles, meta: { lastPage } } } = await getRolesPerPage({ page: Number(page), id })
    return (
        <>
            <Group justify="space-between" mb={10}>
                <Button href={`${route}/add`}  >اضافه کردن</Button>
                <SortSelect />
            </Group>

            <Table >
                <Thead >
                    <TableTr>
                        {cols.map((col) => (
                            <TableTh key={col}>{col}</TableTh>
                        ))}
                    </TableTr>
                </Thead>
                <TableTbody>{roles.map(({ assignee, name, id }, index) => (
                    <TableTr key={index}>
                        <TableTd >{name}</TableTd>
                        <TableTd >{assignee?.username}</TableTd>
                        <TableTd >
                            <ButtonGroup>
                                <Delete href={`${route}/delete/${id}`} />
                                <Edit href={`${route}/edit/${id}`} />
                            </ButtonGroup>
                        </TableTd>
                    </TableTr>
                ))}</TableTbody>
            </Table>
            <Pagination total={lastPage} />
        </>
    )
}
export default TableRoles