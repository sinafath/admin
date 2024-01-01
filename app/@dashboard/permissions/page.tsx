import { Edit, Delete, ButtonGroup } from "@/app/_components/Buttons";
import Pagination from "@/app/_components/Pagination/Pagination";
import SortSelect from "@/app/_components/Selects/SortSelect";
import { Table, Thead, Button } from "@/app/_components/Table/Table";
import { getPermissionsPerPage } from "@/app/_libs/permissions/fetch";
import searchParams from "@/libs/types/searchParamsType";
import { Group, TableTbody, TableTd, TableTh, TableTr } from "@mantine/core";

const route = "/permissions"

async function TablePermissions({
    searchParams,
}: searchParams) {
    const { page,id } = searchParams || {}

    const cols = ["اسم", "خوانده شده", "عملیات ها"]
    const { data: { data: permissions, meta: { total } } } = await getPermissionsPerPage({ page: Number(page),id })
    return (
        <>
            <Group justify="space-between" mb={10}>
                <Button  href={`${route}/add`}  >اضافه کردن</Button>
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
                <TableTbody>{permissions.map(({ name, id, read, }, index) => (
                    <TableTr key={index}>
                        <TableTd >{name}</TableTd>
                        <TableTd >{read}</TableTd>
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
export default TablePermissions