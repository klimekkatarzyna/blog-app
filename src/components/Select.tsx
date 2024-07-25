import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import { AutorSchemaType } from "../services/autors";
import { Spinner } from "./icons/Spinner";
import { Check } from "./icons/Check";

type SelectProps<T extends AutorSchemaType> = {
  list: T[];
  isLoading?: boolean;
  error?: Error | null;
  selectedItem?: AutorSchemaType | null;
};

export const Select = <T extends AutorSchemaType>({
  list,
  isLoading,
  selectedItem,
}: SelectProps<T>) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

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

  const onClearInput = () => {
    setQuery("");
    navigate("/", { replace: true });
  };

  const isButtonDisabled = !!query || !selectedItem;

  return (
    <Combobox
      immediate
      as="div"
      value={selectedItem || null}
      onChange={(value) =>
        value?.id && navigate(`/posts/user/${value.id}`, { replace: true })
      }
      onClose={() => setQuery("")}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <ComboboxInput
              className="inline min-w-[400px] z-30 rounded-lg border-gray-400 border bg-white py-1.5 pr-8 pl-3 text-sm/6 text-gray-900 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              displayValue={(person: T) => person?.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Select autor"
              data-testid="select"
            />

            <button
              onClick={() => onClearInput()}
              type="button"
              disabled={isButtonDisabled}
              className={twMerge(
                "bg-gray-300 inline p-2 ml-2 rounded-md transition-all text-gray-700",
                isButtonDisabled
                  ? "opacity-50"
                  : "hover:bg-gray-400 hover:text-white"
              )}
            >
              Clear input
            </button>
          </div>
          {open && (
            <ComboboxOptions
              anchor="bottom"
              transition
              className="w-[var(--input-width)] empty:invisible z-50 cursor-pointer bg-white rounded-xl border border-white p-1 transition duration-100 ease-in"
            >
              {isLoading && <Spinner />}

              {filteredPeople?.map((person) => (
                <ComboboxOption
                  as={Fragment}
                  key={person.id}
                  value={person}
                  data-testid="autors-list"
                >
                  {({ selected }) => (
                    <div
                      className={twMerge(
                        "group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100",
                        selected ? "bg-gray-100" : ""
                      )}
                    >
                      {selected && <Check />}
                      <Link to={`/posts/user/${person.id}`}>{person.name}</Link>
                    </div>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </>
      )}
    </Combobox>
  );
};
