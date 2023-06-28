import './List.css'

export const List = (props) => {  

  return (
    <div className='list'>
      <label>{props.label}</label>
      <select onChange={e => props.whenSelect(e.target.value)} value={props.value}>
        <option value=""></option>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>    
    </div>
  )
}

