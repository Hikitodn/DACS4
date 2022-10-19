interface Att {
  type: string;
  name: string;
}

const InputField: React.FC<Att> = ({ type, name }) => {
  return (
    <div className="px-2">
      <input className="border" type={type} name={name} id="" />
    </div>
  );
};

export default InputField;
