export default function Input(props) {
  return <input onChange={(e) => props.inputState(e.target.value)}  id={props.id} value={props.value} placeholder={props.placeholder} required={props.required} type={props.type}></input>
}
