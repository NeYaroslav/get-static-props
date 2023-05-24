import Link from "next/link";
import classes from "./header.module.scss";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <span className={classes["header__logo"]}>Best Site</span>
        <nav className={classes["header__nav"]}>
          <ul className={classes["header__menu"] + " " + classes["menu-header"]}>
            <li className={classes["menu-header__link"]}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={classes["menu-header__link"]}>
              <Link href={"/products"}>Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
