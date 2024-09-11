import classes from '../styles/ConicGradientAnimationButton.module.css';
export default function ConicGradientAnimationButton({children}) {
  return (
    <div className={classes.outer_div}>
      <div className={classes.inner_div}>{children}</div>
    </div>
  )
}
