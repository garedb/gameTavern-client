import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import GameInfo from './GameInfo'
const Games = props => {
	let [gamesData, setGamesData] = useState([])
	let [name, setName] = useState('')


	const callApi = e => {
		e.preventDefault()
		fetch('https://api.rawg.io/api/games?search=' + name + '&page_size=10')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			setGamesData(data.results)
		})
		.catch(err => {
			console.log(err)
		})
  	}

  	const goToGame = e => {
  		console.log('hi')

  	}
    let setGame = props.setGame
  	let gamesList = gamesData.map((g, i) => {
  		return (
        
  			<div key= {i} onClick={() => setGame(g)}>
  			{g.name}
        <Link to='/gameinfo'>Go to Game Page</Link>
  			</div>
        
  		)
  	})

  return (
    <div>
      <h1>Games Stub!</h1>
      <form onSubmit={callApi} >
      	<input name="name" value={name} 
      		onChange={e => setName(e.target.value)} />
      </form>
      {gamesList}



      <div>
      {name}
    </div>

    </div>
  )
}
export default Games