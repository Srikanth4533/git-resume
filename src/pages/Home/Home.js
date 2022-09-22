import { Loading, Pagination, Repos, UserProfile } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Content } from './Home.css'

const Home = () => {
  const { 
    user, 
    repos, 
    reposPerPage, 
    currentPage 
  } = useSelector(state => state.home)

  if(!user && !repos) {
    return <Loading height={300} />
  }

  return (
    <Container>
        <Content>
          <UserProfile 
            user={user} 
          />
          <Repos 
            repos={repos}
            reposPerPage={reposPerPage}
            currentPage={currentPage}
          />
          <Pagination 
            repos={repos}
            reposPerPage={reposPerPage}
            currentPage={currentPage}
          />
        </Content>
    </Container>
  )
}

export default Home