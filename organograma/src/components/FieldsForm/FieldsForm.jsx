import './FieldsForm.css'

export const FieldsForm = (props) => { 

  const typedValue = (e) => {    
    props.whenType(e.target.value)
  } 

  return (
    <div className="field-form">
      <label>{props.label}</label>
      <input type="text" placeholder={`${props.placeholder}...`} required={props.required} value={props.value} onChange={typedValue}/>
    </div>
  )
}

