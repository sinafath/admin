"use client"
import { Center, Pagination as MantinePagination, PaginationProps } from '@mantine/core';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {  useTransition } from 'react';
import { useDebouncedCallback } from "use-debounce";

function Pagination(props: PaginationProps) {
    const searchParams = useSearchParams()

    const pageUrl = searchParams.get('page')
    const { replace } = useRouter();
    const pathname = usePathname();
    const [loading, startTransition] = useTransition();
   const handlePagination = useDebouncedCallback(  (page: number) => {
        const params = new URLSearchParams(window.location.search);
        if (page > 1) {
            params.set('page', page.toString());
        } else {
            params.delete('page');
        }
        if (loading) return
        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    },300)

    return <Center w={"100%"} >
        <MantinePagination mb={"md"} defaultValue={Number(pageUrl ?? 1) } mt="md" mx={"auto"}  {...props} onChange={handlePagination} />
    </Center>
}
export default Pagination