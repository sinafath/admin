import { useState } from 'react';
import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox } from '@mantine/core';
import { routeType } from '@/app/_libs/routes/types';

type RouteComboBoxProps = {
  data: routeType[]
}
const data: RouteComboBoxProps["data"] = [
  {
    id: 1,
    address: "/home",
    method: "GET",
    description: "Get home page",
    deleted: null,
  },
  {
    id: 2,
    address: "/user",
    method: "POST",
    description: "Create a new user",
    deleted: null,
  },
  // Add more sample data as needed
]

type formType = {
  value: number[];
  onChange: any;
  checked?: any;
  error?: any;
  onFocus?: any;
  onBlur?: any;
}
export function RouteComboBox() {


  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<number[]>([]);

  const handleValueSelect = (val: string) => {
    const valToNumber = Number(val)
    setValue((current) =>
      current.includes(valToNumber) ? current.filter((v) => v !== valToNumber) : [...current, valToNumber]
    );
  }
  const handleValueRemove = (val: number) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.address.includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item.id.toString()} key={item.id} active={value.includes(item.id)}>
        <Group gap="sm">
          {value.includes(item.id) ? <CheckIcon size={12} /> : null}
          <span>{item.address}</span>
          <span>{item.method}</span>
          <span>{item.description}</span>

        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput
          label="کاربر"
          size='md'
          onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                name='userId'
                placeholder="جستجوی کاربر"
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}