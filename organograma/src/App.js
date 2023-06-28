import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import  Team  from './components/Team';
import Footer from './components/Footer'

function App() {
  const [people, setPeople] = useState([])
  
  console.log(people.map(person => person.name));
  const teams = [
    {
      nome: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      nome: 'Back-End',
      primaryColor: '#0A6EBD',
      secondaryColor: '#82AAE3',
    },
    {
      nome: 'Data Science',
      primaryColor: '#A2CDB0',
      secondaryColor: '#F0F8E2',
    },
    {
      nome: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFE4A7',
    },
    {
      nome: 'Devops',
      primaryColor: '#B31312',
      secondaryColor: '#E06469',
    },
    {
      nome: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FF90BB',
    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#E55807',
      secondaryColor: '#FF8551',
    },
  ]

  const newPeople = (person) => {     
    setPeople([...people, person])    
  }

  return (
    <div className="App">
      <Banner/>
      <Form onSubmited={people => newPeople(people)} teams={teams.map(team => team.nome)}/>
      {teams.map(team => 
        <Team 
          name={team.nome} 
          key={team.nome} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor} 
          employees={people.filter(person => person.selectValue === team.nome)}
      />)}      
      <Footer />         
          
    </div>
  );
}

export default App;
