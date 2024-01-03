import { Edit, Delete, ButtonGroup } from "@/app/_components/Buttons";
import Pagination from "@/app/_components/Pagination/Pagination";
import SortSelect from "@/app/_components/Selects/SortSelect";
import { Table, Thead, Button } from "@/app/_components/Table/Table";
import { getProductsPerPage } from "@/app/_libs/products/fetch";
import searchParams from "@/libs/types/searchParamsType";
import { Group, TableTbody, TableTd, TableTh, TableTr } from "@mantine/core";

async function TableProducts({
    searchParams: { id, page = 1 } = {},
}: searchParams) {
    const cols = ["اسم", "مدت ", "عملیات ها"]
    console.log({ page })
    const { data: { data: products, meta: {lastPage} } } = await getProductsPerPage({ page: Number(page), id })
    return (
        <>
            <Group justify="space-between" mb={10}>
                <Button href={"/add"} >اضافه کردن</Button>
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
                <TableTbody>{products?.map(({ name, id, durationTime }, index) => (
                    <TableTr key={index}>
                        <TableTd >{name}</TableTd>
                        <TableTd >{durationTime}</TableTd>
                        <TableTd >
                            <ButtonGroup>
                                <Delete href={`/delete/${id}`} />
                                <Edit href={`/edit/${id}`} />
                            </ButtonGroup>
                        </TableTd>
                    </TableTr>
                ))}</TableTbody>
            </Table>
            <Pagination total={lastPage} />
        </>
    )
}
export default TableProducts