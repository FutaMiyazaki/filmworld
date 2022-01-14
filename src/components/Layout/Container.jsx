import classes from "src/styles/Home.module.css";

export function Container(props) {
  return <div className={classes.container}>{props.children}</div>;
}
