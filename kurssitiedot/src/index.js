import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const course = {

    "name": 'Half Stack application development',

  "parts": [ 
   {
    "name":'Fundamentals of React',
    "exercise":10
  },

   {
    "name": 'Using props to pass data',
    "exercise":7
  },

   {
    "name":'State of a component',
    "exercise":14
  }
]
  }
  const Header = ({course}) => {
	return (
	  <h1>{course.name}</h1>
	)  
  }

  const Part = ({part,exercises}) => {
    return (
      <p>
        {part} {exercises}
      </p>
    )  
    }
  
  const Content  = ({parts}) => {
	return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercise} />
      <Part part={parts[1].name} exercises={parts[1].exercise} />
      <Part part={parts[2].name} exercises={parts[2].exercise} />
      </>
	)  
  }
  
  const Total = ({parts}) => {
	return (
	  <p>Number of exercises {parts[0].exercise + parts[1].exercise + parts[2].exercise}</p>
	)  
  }

  return (
    <div>
      <Header course={course} />
	   <Content parts={course.parts}  />
     <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))