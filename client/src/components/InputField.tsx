import { ChangeEventHandler } from "react";

interface Props {
  value?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange: ChangeEventHandler;
}

const InputField: React.FC<Props> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <>
      <div className="px-2 py-1">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
          type={type}
          value={value}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputField;
