"use client"
import { useEffect, useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';
import { useFormContext } from '../Form';


type UserComboBoxProps  = {
    data: {
        id: number,
        email: string,
        password: string,
        username: string,
        deleted: null
    }[]
}

export function UserComboBox({data}:UserComboBoxProps) {
    const findById = (id: number) => data.find((item) => item.id === id);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });
    const form = useFormContext();

    const { value , onChange, onBlur, onFocus, ...props } = form.getInputProps('userId')
    console.log(value)
    const [search, setSearch] = useState('');

    const shouldFilterOptions = data.every((item) => item.username !== search);
    const filteredOptions = shouldFilterOptions
        ? data.filter((item) => item.username.toLowerCase().includes(search.toLowerCase().trim()))
        : data;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item.id.toString()} key={item.id}>
            {item.username}
        </Combobox.Option>
    ));
    console.log({value})
    useEffect(()=>{
        const initialValue = findById(value)
        console.log({initialValue})
        const { username } = initialValue || {}
        username && setSearch(username);
    },[])
    return (
        <Combobox
            store={combobox}
            withinPortal={false}
            
            onOptionSubmit={(val) => {
                const initialValue = findById(Number(val))
                const { username } = initialValue || {}
                initialValue && onChange(initialValue.id);
                username && setSearch(username);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    rightSection={<Combobox.Chevron />}
                    name='userId'
                    size='md'
                    label="کاربر"
                    placeholder="جستجوی کاربر"
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
                        const { username } = initialValue || {}
                        combobox.closeDropdown();
                        username && setSearch(username || '');
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