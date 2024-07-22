import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { AutorSchemaType } from "../services/autors";
import { Spinner } from "./icons/Spinner";
import { AngleDown } from "./icons/AngleDown";
import { Check } from "./icons/Check";

type SelectProps<T extends AutorSchemaType> = {
  list: T[] | undefined;
  isLoading?: boolean;
  error?: Error | null;
  selectedItem?: AutorSchemaType | null;
};

export const Select = <T extends AutorSchemaType>({
  list,
  isLoading,
  error,
  selectedItem,
}: SelectProps<T>) => {
  const [query, setQuery] = useState<string>();
  const [selected, setSelected] = useState<AutorSchemaType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selected?.id) return;
    navigate(`/posts/userId/${selected?.id}`, { replace: true });
  }, [selected?.id]);

  useEffect(() => {
    setSelected(selectedItem as AutorSchemaType);
  }, [setSelected, selectedItem?.id]);

  const filteredPeople = useMemo(
    () =>
      query === ""
        ? list
        : list?.filter((person) => {
            if (
              typeof person === "object" &&
              person !== null &&
              "name" in person &&
              typeof person.name === "string"
            ) {
              if (typeof query === "string") {
                return person.name.toLowerCase().includes(query.toLowerCase());
              }
            }
          }),
    [list, query]
  );

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return "Soemthing went wrong";
  }

  return (
    <Combobox
      value={selected}
      onChange={setSelected}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <ComboboxInput
          className="w-full min-w-[400px] z-30 rounded-lg border-gray-400 border bg-white py-1.5 pr-8 pl-3 text-sm/6 text-gray-900 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          displayValue={(person: T) => person?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <AngleDown />
        </ComboboxButton>
      </div>
      <ComboboxOptions
        anchor="bottom"
        transition
        className="w-[var(--input-width)] cursor-pointer bg-white rounded-xl border border-white p-1 transition duration-100 ease-in"
      >
        {isLoading && <Spinner />}
        {filteredPeople?.map((person) => (
          <ComboboxOption as={Fragment} key={person.id} value={person}>
            {({ selected }) => (
              <div
                className={twMerge(
                  "group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100",
                  selected ? "bg-gray-100" : ""
                )}
              >
                {selected && <Check />}
                <Link to={`/posts/userId/${person.id}`}>{person.name}</Link>
              </div>
            )}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};
