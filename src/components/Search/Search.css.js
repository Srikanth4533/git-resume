import styled from "styled-components";
import { Search } from '@styled-icons/evaicons-solid/Search'


export const Container = styled.div`
  width: 100%;
  padding-block:16px;
`
export const Content = styled.div`
  width: 90%;
  margin: auto;
`

export const SearchContainer = styled.div`
  display: flex;
`

export const InputContainer = styled.div`
  /* width: 500px; */
  position: relative;
  width: 90%;
  display: flex;
  background: ${props => props.theme.tertiary};
  border-radius: 10px;
  padding-block: 4px;
  padding-inline: 12px;

  @media (min-width:768px) {
    width:600px;
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: ${props => props.theme.tertiary};
  padding-left: 12px;
  color: ${props => props.theme.mainFont};
  font-size: 1.2rem;

  ::placeholder {
    font-size: 1rem;
    color: ${props => props.theme.mainFont};
  }
  &:focus {
    outline: none;
  }
`

export const SearchIcon = styled(Search)`

`

export const SearchResultContainer = styled.div`
  position: absolute;
  /* overflow-y: scroll; */
  width: 100%;
  left: 0;
  margin-top: 45px;
  z-index: 1000;
`

export const ImgContainer = styled.div`
  display: flex;
  padding-left: 4px;
  padding-block: 4px;
  width: 100%;
  background: ${props => props.theme.tertiary};
`
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const Name = styled.h2`
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.mainFont};
  font-weight: 400;
  margin-left: 8px;
  margin-top: 4px;
`

export const ViewMore = styled.div`
  font-size: 0.8rem;
  padding-left: 6px;
  padding-block: 8px;
  cursor: pointer;
  color: ${props => props.theme.blue};
  background: ${props => props.theme.tertiary};
`

export const SearchButton = styled.button`
  width: 120px;
  margin-left: 14px;
  border-radius: 10px;
  background: ${props => props.theme.green};
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`