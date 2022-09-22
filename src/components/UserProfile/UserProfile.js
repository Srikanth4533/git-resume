import { Loading } from 'components'
import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  Container, 
  Content, 
  GitHubLink, 
  ImageContainer, 
  Img, 
  Info, 
  InfoContainer, 
  Link, 
  Location, 
  ProfileBio, 
  ProfileLocation, 
  ProfileName, 
  ProfileTwitterLink 
} from './UserProfile.css'

const UserProfile = (props) => {
  const dispatch = useDispatch()
  console.log(props.user)
  const imgSrc = props.user.avatar_url

  const hasTwitter = props.user && 
                     props.user.twitter_username && 
                     props.user.twitter_username.length > 0

  const hasGithub = props.user &&
                    props.user.html_url &&
                    props.user.html_url.length > 0

  const hasLocation = props.user &&
                      props.user.location 

  return (
    <Container>
      {props.loading && !props.user && <Loading height={300} />}
      {!props.user && !props.loading && <div>No User found...</div>}
        {!props.loading && 
          props.user && 
        (<Content>
          <ImageContainer>
          <Img 
            src={imgSrc}
          />
        </ImageContainer>
        <InfoContainer>
          <Info>
          <ProfileName>{props.user.name}</ProfileName>
          <ProfileBio>{props.user.bio}</ProfileBio>
          {hasLocation && (
            <ProfileLocation>
            <Location size='1rem' />
            {props.user.location}
          </ProfileLocation>
           )} 
          {hasTwitter && (
          <ProfileTwitterLink>Twitter: https://twitter.com/{props.user.twitter_username}</ProfileTwitterLink>
         )}
          </Info>
        </InfoContainer>
        </Content>)
        }

      {!props.loading && 
        hasGithub &&
        props.user &&
        (<GitHubLink>
          <Link size='1.2rem' />
          {props.user.html_url}
        </GitHubLink>)
      }
    </Container>
  )
}

export default UserProfile