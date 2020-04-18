
import ReactDOM from 'react-dom';
import React,{ useState }  from 'react';


const StatisticLine = ({feedback}) => {
  return (
    <tr>
      <td>{feedback.name}</td>
      <td>{feedback.value}</td>
  </tr>
  )

}


const Statistics = ({good,bad,neutral}) => {


  if (good === 0 && bad === 0 && neutral === 0) {
    return <div> No feedback yet</div>
  }

  return (

    <>
    <div> <h2>Given feedback so far</h2></div>

   
    <table >
    
    <tbody >
    <StatisticLine feedback={ {"name":'Good',"value":good}}  />
    
    <StatisticLine feedback={ {"name":'Bad',"value":bad}}  />
    <StatisticLine feedback={ {"name":'Neutral',"value":neutral}}  />
    <StatisticLine feedback={ {"name":'Sum',"value":good+bad+neutral}}  />
    <StatisticLine feedback={ {"name":'Average',"value":(good+bad+neutral)/3}}  />
    <StatisticLine feedback={ {"name":'Positive feedback',"value": (good/(good+bad+neutral)) * 100}}  />
    </tbody >
    </table>
    </>
  )

}

const Button = ({name,clickHandler}) => {
    return (
      <button onClick={clickHandler}>{name}</button>
    )
  }

 



function App() {

  const [bad, setBad] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setneutral] = useState(0)

  return (
    <div>
<h2>Press button to give some feedback</h2>
<div>
    

      <Button name="good" clickHandler={() => setGood(good+1)}/>
      <Button name="neutral" clickHandler={() => setneutral(neutral+1)}/>
      <Button name="bad" clickHandler={() => setBad(bad+1)}/>


      <br/>
      <br/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
    </div>
  );
}





ReactDOM.render(<App />, document.getElementById('root'))