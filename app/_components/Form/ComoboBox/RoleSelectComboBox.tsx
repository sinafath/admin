"use client"
import { useEffect, useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';
import { useFormContext } from '../Form';
import { roleType } from '@/app/_libs/roles/types';

type UserComboBoxProps  = {
    data: roleType[]
}

export function RoleSelectComboBox({data}:UserComboBoxProps) {
    const findById = (id: number) => data.find((item) => item.id === id);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });
    const form = useFormContext();
    const { value , onChange, onBlur, onFocus, ...props } = form.getInputProps('roleId')
    const [search, setSearch] = useState('');
    const shouldFilterOptions = data.every((item) => item.name !== search);
    const filteredOptions = shouldFilterOptions
        ? data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
        : data;
    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item.id.toString()} key={item.id}>
            {item.name}
        </Combobox.Option>
    ));
    console.log({value})
    useEffect(()=>{
        const initialValue = findById(value)
        const { name } = initialValue || {}
        name && setSearch(name);
    },[])
    return (
        <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
                const initialValue = findById(Number(val))
                const { name } = initialValue || {}
                initialValue && onChange(initialValue.id);
                name && setSearch(name);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    rightSection={<Combobox.Chevron />}
                    name='roleId'
                    size='md'
                    label="نقش"
                    placeholder="جستجوی نقش"
                    value={search}
                    onChange={(event) => {
                        combobox.openDropdown();
                        combobox.updateSelectedOptionIndex();
                        setSearch(event.currentTarget.value);
                    }}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => { combobox.openDropdown(); onFocus() }}
                    onBlur={() => {
                        const initialValue = findById(value)
                        const { name } = initialValue || {}
                        combobox.closeDropdown();
                        name && setSearch(name || '');
                        onBlur()
                    }}
                    {...props}
                    rightSectionPointerEvents="none"
                />
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}