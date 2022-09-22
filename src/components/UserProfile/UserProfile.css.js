import styled from "styled-components";
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { InsertLink } from '@styled-icons/material/InsertLink'


export const Container = styled.div`
  width: 100%;
  padding-block: 8px;
`
export const Content = styled.div`
  display: flex;
  margin-block: 14px;
  width: 90%;
  margin: auto;
`

export const ImageContainer = styled.div`
  margin-right: 50px;
`
export const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`
export const InfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`
export const Info = styled.div`
`

export const ProfileName = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4rem;
  color: ${props => props.theme.mainFont};
`
export const ProfileBio = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${props => props.theme.mainFont};
`
export const Location = styled(LocationPin)`
  margin-right: 4px;
`

export const ProfileLocation = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${props => props.theme.mainFont};
  line-height: 1.2rem;
`
export const ProfileTwitterLink = styled.div`
  font-size: 0.7rem;
  color: ${props => props.theme.mainFont};
  line-height: 1.2rem;
`

export const GitHubLink = styled.div`
  font-size: 0.7rem;
  padding-block: 8px;
  width: 90%;
  margin: auto;
`
export const Link = styled(InsertLink)`
  margin-inline: 8px;
`