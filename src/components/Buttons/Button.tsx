import { ButtonProps } from "./interface";
import "./style.css";

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={props.type}>Button</button>;
};

export default Button;
