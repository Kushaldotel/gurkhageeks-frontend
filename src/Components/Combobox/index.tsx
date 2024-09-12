import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { ErrorMessage } from "formik";
import TextError from "../TextError";

interface ComboBoxProps {
  options: { value: string; label: string }[];
  multiple?: boolean;
  onChange: (values: string[]) => void;
  placeholder?: string;
  value: string[];
  name: string;
}

export function ComboBox({
  options,
  multiple = false,
  onChange,
  placeholder = "Select options...",
  value,
  name,
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>(value);

  const handleSelect = (value: string) => {
    if (multiple) {
      setSelectedValues((prev) => {
        const newValues = prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
        onChange(newValues);
        return newValues;
      });
    } else {
      const newValue = selectedValues[0] === value ? "" : value;
      setSelectedValues(newValue ? [newValue] : []);
      onChange(newValue ? [newValue] : []);
      setOpen(false);
    }
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedValues.length > 0
              ? multiple
                ? selectedValues
                    .map((value) => options.find((option) => option.value === value)?.label)
                    .filter((label): label is string => label !== undefined)
                    .join(", ")
                : options.find((option) => option.value === selectedValues[0])
                    ?.label
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search options..." />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedValues.includes(option.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
}
