import Input from "./Input";
import SelectFormik from "./Select";
import Textarea from "./Textarea";

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <SelectFormik {...rest} />;
  }
};

export default FormControl;
