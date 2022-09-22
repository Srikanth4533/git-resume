import { Loading } from 'components'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearData } from 'store/profile/actions'
import { keyGen } from 'utils'
import { 
  Container, 
  Content, 
  Img, 
  ImgContainer, 
  Name 
} from './Results.css'

const Results = () => {
  const { searchResults, isError, isLoading } = useSelector(state => state.home)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = (result) => {
    navigate(`/profile/${result.login}`)
    dispatch(clearData())
  }
  return (
    <Container>
      <Content>
        {isLoading && <Loading height={300} />}
        {!isLoading && !searchResults.length && !isError && <div>No User Found...!</div>}
            {isError && <div>API. Error RefreshPage.</div>}
            {!isLoading &&
            !isError &&
            searchResults &&
            searchResults.map((result) => {
              const imgSrc = result.avatar_url
              return (
                <ImgContainer
                  key={keyGen()}
                  onClick={() => handleClick(result)}
                >
                  <Img
                    src={imgSrc}
                  />
                  <Name>{result.login}</Name>
                </ImgContainer>
              )
            })}
      </Content>
    </Container>
  )
}

export default Results