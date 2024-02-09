import { headerProps } from "../../types/headerProps";

const Header = ({ title, className }: headerProps) => {
  return (
    <header className={className}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
