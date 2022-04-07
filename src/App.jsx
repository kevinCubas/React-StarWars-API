import { useState, useEffect } from "react"
import { Container, Header, SearchButton} from "./Components/Container.style"
import { AllCharacters} from "./Components/AllCharactersInformation"
import CharacterCard from "./Components/CharacterCard"

export default function App() {
  const [starWarsCharacter, setStarWarsCharacter] = useState([])
  const [searchCharacter, setSearchCharacter] = useState("")

  useEffect(() => {
    fetch("https://akabab.github.io/starwars-api/api/all.json")
    .then(response => {
      if(response.ok){
        return response.json()
      } else {
        console.log('Network response was not ok.');
        }
      })
    .then(data => {
      setStarWarsCharacter(data.map(arr => {
        return {
          id: arr.id,
          name: arr.name,
          species: arr.species,
          homeWorld: arr.homeworld,
          image: arr.image,
          moreLink: arr.wiki
        }
      }))
    })
      .catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      }, [])
  
  return (
    <Container>
      <Header>
        <h1>Star Wars - Characters</h1>
        <SearchButton placeholder="Search a Character..." type="text" name="searchBar" id="searchBar"
        onChange={event => {
          setSearchCharacter(event.target.value)
        }} />
      </Header>
      <AllCharacters>
        {starWarsCharacter.filter(character => {
          if(searchCharacter === ""){
            return character
          } else if(character.name.toLowerCase().includes(searchCharacter.toLocaleLowerCase())) {
            return character
          }
        }).map(character => {
          return (
          <CharacterCard key={character.id} 
          identifier={character.id} 
          image={character.image}
          name={character.name}
          homeWorld={character.homeWorld}
          species={character.species}
          moreLink={character.moreLink}
          />          
          )
        })
      }
      </AllCharacters>
    </Container>
  )
}