"use client"

import { useState } from 'react';
import { Badge, CheckIcon, Combobox, Group, Pill, PillsInput, Text, useCombobox } from '@mantine/core';
import { routeType } from '@/app/_libs/routes/types';
import { useFormContext } from '../Form';

type RouteComboBoxProps = {
  data: routeType[]
}


export function RouteComboBox({ data }: RouteComboBoxProps) {
  const findById = (id: number) => data.find((item) => item.id === id);


  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  const form = useFormContext();

  const { value, onChange, onBlur, onFocus, ...props } = form.getInputProps('routeIds')
  const valuesForm = value as number[] ?? []
  const [search, setSearch] = useState('');

  const handleValueSelect = (val: string) => {
    const valToNumber = Number(val)
    onChange(
      valuesForm.includes(valToNumber) ? valuesForm.filter((v) => v !== valToNumber) : [...valuesForm, valToNumber]
    );
  }
  const handleValueRemove = (val: number) =>
    onChange(valuesForm.filter((v) => v !== val));
  const values = valuesForm.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {findById(Number(item))?.address}
    </Pill>
  ));
  const colors = {
    get: "blue",
    post: "green",
    delete: "red",
    patch: "yellow"

  }
  const options = data
    .filter((item) => item.address.includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item.id.toString()} key={item.id} active={valuesForm.includes(item.id)}>
        <Group gap="sm">
          {valuesForm.includes(item.id) ? <CheckIcon size={12} /> : null}
          <span>{item.address}</span>
          <Badge color={colors[item.method.toLowerCase() as unknown as "get"]} size='sm'>{item.method}</Badge>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput
          label="مسیر ها"
          size='md'
          mt={15}

          {...props}
          onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}
            <Combobox.EventsTarget>
              <PillsInput.Field
                name='routeIds'

                placeholder="جستجوی مسیر"
                onFocus={() => { combobox.openDropdown(); onFocus() }}
                onBlur={() => { combobox.closeDropdown(); onBlur() }}
                value={search}
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(valuesForm[valuesForm.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}