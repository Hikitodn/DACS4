import InputField from "./InputField";

interface Att {
  action: string;
  method: string;
}

const FormInput: React.FC<Att> = ({ action, method }) => {
  return (
    <div>
      <form action={action} method={method}>
        <InputField type="text" name="username" />
      </form>
    </div>
  );
};

export default FormInput;
