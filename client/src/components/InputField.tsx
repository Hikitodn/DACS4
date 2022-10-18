interface Att {
  type: string;
  name: string;
}

const InputField: React.FC<Att> = ({ type, name }) => {
  return (
    <div>
      <input type={type} name={name} id="" />
    </div>
  );
};

export default InputField;
