import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  validation?: RegisterOptions<T, Path<T>>;
  disabled?: boolean;
  autoComplete?: string;
};

const InputField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation,
  disabled,
  autoComplete,
}: InputFieldProps<T>) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={
          autoComplete ??
          (type === "password" ? "current-password" : type === "email" ? "email" : "name")
        }
        className={cn(
          "form-input",
          disabled && "cursor-not-allowed opacity-50",
        )}
        {...register(name, validation)}
      />
      {error?.message ? (
        <p className="text-sm text-red-500">{error.message}</p>
      ) : null}
    </div>
  );
};

export default InputField;
