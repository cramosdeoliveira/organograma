import './Team.css'
import { Employee } from '../Employee/Employee'

export const Team = (props) => {
  return(
    props.employees.length > 0  && <section className='team' style={{backgroundColor: props.secondaryColor}}>
      <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
      <div className='employees'>
        {props.employees.map(employee => <Employee name={employee.name} profission={employee.profission} image={employee.image} bgColor={props.primaryColor}/>)}
      </div>
    </section>
  )
}