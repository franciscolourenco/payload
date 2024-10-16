export function CustomBeforeList(props) {
  console.log(props.user?.email)
  return <div>User email: {props.user?.email}</div>
}
