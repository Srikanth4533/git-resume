import { ProfilePagination, Repos, UserProfile } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUser, getUserRepos } from 'store/profile/actions'
import { Container, Content } from './Profile.css'

const Profile = () => {
  const { 
    data, 
    user, 
    isReposLoading,  
    isProfileLoading, 
    userProfile 
  } = useSelector(state => state.profile)

  const { reposPerPage, currentPage } = useSelector(state => state.profile)
  const { id } = useParams()
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUserRepos(id))
    }, [id])

    const url = user.url

    useEffect(() => {
      dispatch(getUser(url))
    }, [url])

   
  return (
    <Container>
      <Content>
        <UserProfile
          loading={isReposLoading || isProfileLoading}
          user={userProfile}
        />
        <Repos 
            loading={isReposLoading || isProfileLoading}
            repos={data}
            reposPerPage={reposPerPage}
            currentPage={currentPage}
          />
          <ProfilePagination
            loading={isReposLoading || isProfileLoading} 
            user={userProfile}
            repos={data}
            reposPerPage={reposPerPage}
            currentPage={currentPage}
          />
      </Content>
    </Container>
  )
}

export default Profile