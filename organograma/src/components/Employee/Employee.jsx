import './Employee.css'

export const Employee = ({name, profission, image, bgColor}) => {

  return(
    <div className='employee'>
      <div className='header-employee' style={{backgroundColor: bgColor}}>
        <img src={image} alt={name} />
      </div>
      <div className='footer-employee'>
        <h4>{name}</h4>
        <h5>{profission}</h5>
      </div>
    </div>
  )
}