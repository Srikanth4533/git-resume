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

  return (
    <Container>
      {props.loading && !props.user && <Loading height={300} />}
        {!props.loading && props.user && 
        <Content>
          <ImageContainer>
          <Img 
            src={imgSrc}
          />
        </ImageContainer>
        <InfoContainer>
          <Info>
          <ProfileName>{props.user.name}</ProfileName>
          <ProfileBio>{props.user.bio}</ProfileBio>
          <ProfileLocation>
            <Location size='1rem' />
            {props.user.location}
          </ProfileLocation>
          <ProfileTwitterLink>Twitter: https://twitter.com/{props.user.twitter_username}</ProfileTwitterLink>
          </Info>
        </InfoContainer>
        </Content>
        }

      {!props.loading && 
        <GitHubLink>
          <Link size='1.2rem' />
          {props.user.html_url}
        </GitHubLink>
      }
    </Container>
  )
}

export default UserProfile