"use client"

import cx from 'clsx';
import { Table as MantineTable, ScrollArea, TableProps,  TableThead, TableTheadProps } from '@mantine/core';
import classes from './Table.module.css';
import Button from './Button';
import { useState } from 'react';


// type TableProps<col extends string> = {
//   data: {
//     [key in col]: string;
//   }[]
//   cols: string[]
// }
// export function Table<col extends string>({ data, cols }: TableProps<col>) {
//   const rows = data.map((row, index) => (
//     <MantineTable.Tr key={index}>
//       {Object.entries(row).map(([item, value]) => (
//         <MantineTable.Td key={item}>{value as any}</MantineTable.Td>
//       ))}
//     </MantineTable.Tr>
//   ));

//   return (
//     <MantineTable miw={700} verticalSpacing="sm" withTableBorder striped>
//       <MantineTable.Thead className={cx(classes.header)}>
//         <MantineTable.Tr>
//           {cols.map((col) => (
//             <MantineTable.Th>{col}</MantineTable.Th>
//           ))}
//         </MantineTable.Tr>
//       </MantineTable.Thead>
//       <MantineTable.Tbody>{rows}</MantineTable.Tbody>
//     </MantineTable>
//   );
// }

const Thead = (props: TableTheadProps) => <TableThead className={cx(classes.header)} {...props} />
const Table = (props: TableProps) =>     {
return <ScrollArea h={420} ><MantineTable miw={700} verticalSpacing="sm" withTableBorder striped  {...props} />
</ScrollArea>
}
export { Thead, Table ,Button}