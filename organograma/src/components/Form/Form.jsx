import FieldsForm from "../FieldsForm"
import './Form.css'
import List from "../List"
import ButtonForm from "../ButtonForm"
import { useState } from "react"

export const Form = (props) => {  

  const onSave = (e) => {
    e.preventDefault()
    props.onSubmited({
      name,
      position,
      image,
      selectValue
    })
  }

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')
  const [selectValue, setSelectValue] = useState()

  return(
    <section className="form-fields">
      <form onSubmit={onSave}>
        <h2>Type information data to create a Card of employee</h2>
        <FieldsForm label="Name:" placeholder="Type your name" required value={name} whenType={value => setName(value)}/>
        <FieldsForm label="Position:" placeholder="Type your charge" required value={position} whenType={value => setPosition(value)}/>
        <FieldsForm label="Image:" placeholder="Type your image address" value={image} whenType={value => setImage(value)}/>
        <List items={props.teams} label="Team:" required whenSelect={(selectValue) => setSelectValue(selectValue)} value={selectValue}/>
        <ButtonForm>Criar Card</ButtonForm>
      </form>
    </section>
  )
}