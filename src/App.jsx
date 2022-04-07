import { useState, useEffect } from "react"
import { Container } from "./Components/Container.style"
import { AllCharacters, Character, Image, InfoList } from "./Components/AllCharactersInformation"

export default function App() {
  const [starWarsCharacter, setStarWarsCharacter] = useState([])

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
      <h1>Star Wars - Characters</h1>
      <AllCharacters>
        {starWarsCharacter.map(character => {
          return (
          <Character key={character.id} id={character.id}>
            <div>
              <Image src={character.image} alt={`${character.name} image`} />
            </div>
            <div>
              <h2>{character.name}</h2>
              <InfoList>
                <li>Home World: {character.homeWorld}</li>
                <li>Species: {character.species}</li>
                <li><a href={character.moreLink} target="_blank" rel="noopener noreferrer">More about</a></li>
              </InfoList>
            </div>
          </Character>
          )
        })}
      </AllCharacters>
    </Container>
  )
}
