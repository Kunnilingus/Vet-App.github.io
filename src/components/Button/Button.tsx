import { FC } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  purple?: boolean;
  purple50?: boolean;
  purple80?: boolean;
  violet?: boolean;
  violet50?: boolean;
  violet80?: boolean;
}
const Button: FC<ButtonProps> = ({
  text,
  violet,
  violet50,
  violet80,
  purple,
  purple50,
  purple80,
}) => {
  const arr = [violet, violet50, violet80, purple, purple50, purple80];
  const toggleClassName = () => {
    for (let item of arr) {
      switch (item) {
        case violet === true:
          return styles.violet;

        case violet50 === true:
          return styles.violet50;

        case violet80 === true:
          return styles.violet80;

        case purple === true:
          return styles.purple;

        case purple50 === true:
          return styles.purple50;

        case purple80 === true:
          return styles.purple80;
      }
    }
  };
  return <button className={toggleClassName()}>{text}</button>;
};

export default Button;
