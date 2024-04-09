export default ({ ...props }) => {
  const loading = <span className="icon-[svg-spinners--pulse-rings-2] w-10 h-10 block" />

  return (
    <>
      {props.minHeight && <div className={`app-center-element min-h-32`}>{loading}</div>}
      {!props.minHeight && <div className={`app-center-element`}>{loading}</div>}
    </>
  )
}