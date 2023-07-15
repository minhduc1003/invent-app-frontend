import {
  useController,
  FieldValues,
  Control,
  FieldPathByValue,
  FieldPath,
} from "react-hook-form";
function Input<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  placeholder,
  type,
}: {
  control: Control<TFieldValues>;
  name: TName;
  placeholder: string;
  type: string;
}) {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <input
      className="w-full rounded-lg bg-[#EAF0F7] text-gray-500 px-2 py-4 outline-none text-lg"
      placeholder={placeholder}
      type={type}
      {...field}
    ></input>
  );
}

export default Input;
