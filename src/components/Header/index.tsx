import Logo from "../../assets/Logo.svg";
import styled from "./styles.module.css";
export function Header() {
  return (
    <>
      <header className={styled.header}>
        <img src={Logo}></img>
      </header>
    </>
  );
}
