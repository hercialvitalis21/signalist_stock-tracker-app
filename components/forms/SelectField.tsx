"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";

type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  options: readonly Option[];
  control: Control<T>;
  error?: FieldError;
  required?: boolean;
};

const SelectField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
}: SelectFieldProps<T>) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={(value) => field.onChange(value ?? "")}
            items={options.map((option) => ({
              value: option.value,
              label: option.label,
            }))}
          >
            <SelectTrigger id={name} className="select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="border-gray-600 bg-gray-800 text-white">
              {options.map((option) => (
                <SelectItem
                  value={option.value}
                  key={option.value}
                  className="focus:bg-gray-600 focus:text-white"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error?.message ? (
        <p className="text-sm text-red-500">{error.message}</p>
      ) : null}
    </div>
  );
};

export default SelectField;
