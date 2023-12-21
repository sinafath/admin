"use client"
import cx from 'clsx';
import { useState } from 'react';
import { Table as MantineTable, ScrollArea } from '@mantine/core';
import classes from './Table.module.css';


type TableProps<col extends string> = {
  data: {
    [key in col]: string;
  }[]
  cols: string[]
}
export function Table<col extends string>({ data, cols }: TableProps<col>) {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row, index) => (
    <MantineTable.Tr key={index}>
      {Object.entries(row).map(([item, value]) => (
        <MantineTable.Td>{value as any}</MantineTable.Td>
      ))}
    </MantineTable.Tr>
  ));

  return (
    <MantineTable miw={700} verticalSpacing="sm" withTableBorder striped>
      <MantineTable.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
        <MantineTable.Tr>
          {cols.map((col) => (
            <MantineTable.Th>{col}</MantineTable.Th>
          ))}
        </MantineTable.Tr>
      </MantineTable.Thead>
      <MantineTable.Tbody>{rows}</MantineTable.Tbody>
    </MantineTable>
  );
}