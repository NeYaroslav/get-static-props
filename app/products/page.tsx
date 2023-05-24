import Link from "next/link";
import classes from "./page.module.scss";

export default function ProductsPage() {
  return (
    <div className={classes.products}>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link href={"/products/1"}>product 1</Link>
        </li>
        <li>
          <Link href={"/products/2"}>product 2</Link>
        </li>
        <li>
          <Link href={"/products/3"}>product 3</Link>
        </li>
        <li>
          <Link href={"/products/4"}>product 4</Link>
        </li>
        <li>
          <Link href={"/products/5"}>product 5</Link>
        </li>
      </ul>
    </div>
  );
}
