import { Character, Image, InfoList } from "./AllCharactersInformation";

export default function CharacterCard(props) {
  const {identifier, image, name, homeWorld, species, moreLink} = props
  return (
    <Character key={identifier} id={identifier}>
      <div>
        <Image src={image} alt={`${name} image`} />
      </div>
      <div>
        <h2>{name}</h2>
        <InfoList>
          <li>Home World: {homeWorld}</li>
          <li>Species: {species}</li>
          <li><a href={moreLink} target="_blank" rel="noopener noreferrer">More about</a></li>
        </InfoList>
      </div>
    </Character>
  )
}
