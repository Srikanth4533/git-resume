import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSearchResults } from 'store/home/actions'
import { 
  Container, 
  Content, 
  Input, 
  InputContainer, 
  SearchButton, 
  SearchContainer, 
  SearchIcon,
} from './Search.css'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInput = (e) => {
    setValue(e.target.value)
  }
  
  const handleClick = () => {
    if(value.length === 0) return
    dispatch(getSearchResults(value))
    navigate('/results')
    setValue('')
  }

  return (
    <Container>
      <Content>
          <SearchContainer>
          <InputContainer>
            <SearchIcon size="2rem" />
            <Input 
              value={value}
              onChange={handleInput}
              placeholder='Search...'
            />
            </InputContainer>
          <SearchButton onClick={handleClick}>Search</SearchButton>
          </SearchContainer>
      </Content>
    </Container>
  )
}

export default Search
