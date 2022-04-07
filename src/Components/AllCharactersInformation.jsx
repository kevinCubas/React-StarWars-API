import styled from 'styled-components'

export const AllCharacters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`
export const Character = styled.div`
  text-align: center;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  color: #ffffffbe;
  max-width: 200px;

  &:hover {
    transform: scale(1.1);
    background-color: rgb(36, 39, 59);
  }
`

export const Image = styled.img`
    max-width: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

`

export const InfoList = styled.ul`
  padding: 0.5rem 0;
  li {
    line-height: 25px;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`
