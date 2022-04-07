import styled from "styled-components"


export const Container =  styled.div`
  padding: 0 2rem 2rem;

`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`
export const SearchButton = styled.input`
  background-color: inherit;
  width: 80%;
  height: 2.5rem;
  padding-left: 1rem;
  font-size: 1rem;
  border: 1px solid rgb(36, 39, 59);
  border-radius: 1rem;
  outline: none;
  color: inherit;
  text-align: center;
  &:hover, &:focus{
    background-color: rgb(36, 39, 59);
  }
`