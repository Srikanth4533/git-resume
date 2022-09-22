import { Loading } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  return (
    <Container>
      <Content>
        {isLoading && <Loading height={300} />}
            {isError && <div>API. Error RefreshPage.</div>}
            {!isLoading &&
            !isError &&
            searchResults &&
            searchResults.map((result) => {
              const imgSrc = result.avatar_url
              return (
                <ImgContainer
                  key={keyGen()}
                  onClick={() => navigate(`/profile/${result.login}`)}
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