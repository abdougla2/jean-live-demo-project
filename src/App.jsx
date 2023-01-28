import { useState } from 'react'
import { Card } from './components/Card.jsx'
import './App.css'

const cards = [
  {
    tag : 'Nature',
    img : 'mountains.jpg',
    title : 'Mountains',
  },
  {
    tag : 'Nature',
    img : 'lights.jpg',
    title : 'Light',
  },
  {
    tag : 'Nature',
    img : 'forest.jpg',
    title : 'Forest',
  },
  {
    tag : 'Cars',
    img : 'https://www.w3schools.com/w3images/cars1.jpg',
    title : 'Retro',
  },
  {
    tag : 'Cars',
    img : 'https://www.w3schools.com/w3images/cars2.jpg',
    title : 'Fast',
  },
  {
    tag : 'Cars',
    img : 'https://www.w3schools.com/w3images/cars3.jpg',
    title : 'Classic',
  },
  {
    tag : 'People',
    img : 'https://www.w3schools.com/w3images/people1.jpg',
    title : 'Girl',
  },
  {
    tag : 'People',
    img : 'https://www.w3schools.com/w3images/people2.jpg',
    title : 'Man',
  },
  {
    tag : 'People',
    img : 'https://www.w3schools.com/w3images/people3.jpg',
    title : 'Woman',
  },
]


function App() {
  const [filterMethod, setFilterMethod] = useState('all');


  return (
    <div className="App">
      <h1>MYLOGO.COM</h1>
      <hr />

      <h2>PORTFOLIO : {filterMethod} </h2>
      <div id="myBtnContainer">
        <button className={ filterMethod === 'all' ? 'btn active' : 'btn'} onClick={() => setFilterMethod('all')}> Show all</button>
        <button className={ filterMethod === 'Nature' ? 'btn active' : 'btn'} onClick={() => setFilterMethod('Nature')}> Nature</button>
        <button className={ filterMethod === 'Cars' ? 'btn active' : 'btn'} onClick={() => setFilterMethod('Cars')}> Cars</button>
        <button className={ filterMethod === 'People' ? 'btn active' : 'btn'} onClick={() => setFilterMethod('People')}> People</button>
      </div>
      <div className="row">
        {cards.filter(function (card) {
          return card.tag == filterMethod || filterMethod == 'all';
        }).map((card) => {
          return <Card title={card.title} img={card.img}/>
        })}
      </div>
    </div>
  )
}

export default App
