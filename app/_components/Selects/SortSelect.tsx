"use client"
import { Select, SelectProps } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

function SortSelect(props: SelectProps) {
    const searchParams = useSearchParams()
    const data = [' به کوچک', ' به بزرگ']
    const sortUrl = searchParams.get('id')
    const { replace } = useRouter();
    const pathname = usePathname();
    const [_, startTransition] = useTransition();
    function handleSort(sort: string) {
        const params = new URLSearchParams(window.location.search);
        if(sortUrl === sort) return
        if (sort === data[0]) {
            
            params.delete('id');
        } else if (sort === data[1]) {
            params.set('id', "asc");
        }
        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    }
    return <Select
        label="ترتیب"
        value={sortUrl ?? data[0]}
        w={160}
        data={data}
        onSearchChange={handleSort}
        mt={0}
        allowDeselect={false}
        {...props}
    />
}
export default SortSelect