import classes from "./footer.module.scss";

export function Footer() {
  const creationDate = 1684949556888;
  const creationYear = new Date(creationDate).getFullYear();
  const curretnYear = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      Best Site © {curretnYear > creationYear ? `${creationYear}-${curretnYear}` : creationYear}
    </div>
  );
}
