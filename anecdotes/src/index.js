import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const _ = require('lodash');

const Button = ({name,clickHandler}) => {
  return (
    <button onClick={clickHandler}>{name}</button>
  )
}

const MostVotes = ({votes,anecdotes,mostvotes}) => {

  if(mostvotes === -1) {
    return null
  }

  return (
    <>
    <div>Anecdote {anecdotes[mostvotes]} has most votes</div>
    <div>It has {votes[mostvotes]} votes</div>
    </>
  )
}  

const App = (props) => {

  var anecdotes = [...props.anecdotes]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0,0,0,0,0,0])
  const [mostvotes, setMostvotes] = useState(-1)
  


  return (
    <>
    <div>
      {props.anecdotes[selected]}
    </div>
    <div> anecdote has {votes[selected]} votest </div>
     <div>
     <Button name="vote" clickHandler={() => 
     { 
        var isgreatist =true
        let temp = [...votes];
        temp[selected]=temp[selected]+1;

        var i
        for (i = 0; i < anecdotes.length; i++) {

            if(votes[i] !==  temp[selected]) {

              if(votes[i] >  temp[selected]) {
                
                isgreatist=false
              }
            
          }
        }

        if(isgreatist) {
          setMostvotes(selected)
        }

      setVote(temp)

    

     
    
    }   }/>
    <Button name="next >>" clickHandler={() => setSelected(Math.floor(Math.random() * 6))}/>
    <MostVotes votes={votes} anecdotes = {anecdotes} mostvotes={mostvotes}/>

    </div>
    </>
  )
}

 


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


