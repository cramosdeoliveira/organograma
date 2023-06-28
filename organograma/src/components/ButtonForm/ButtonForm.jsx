import './ButtonForm.css'

export const ButtonForm = (props) => {
  return (
    <button className='button-style'>{props.children}</button>
  )
}