export default function Label(props) {
  return <label htmlFor={props.id}>{props.text}</label>
}
