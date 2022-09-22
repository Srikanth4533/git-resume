import styled from "styled-components"



export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
`
export const Repo = styled.div`
  width: 500px;
  border: 1px solid ${props => props.theme.tertiary};
  border-radius: 6px;
  margin-inline: 12px;
  margin-block: 8px;
  padding-block: 8px;
  padding-inline: 24px;
`
export const RepoHero = styled.div`
  font-size: 1rem;
  color:${props => props.theme.blue};
  line-height: 1.6rem;
`
export const RepoDesc = styled.div`
  font-size: 0.6rem;
  line-height: 1.2rem;
`
export const RepoTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-block: 6px;
`
export const Topic = styled.div`
  width: 60px;
  background: ${props => props.theme.blue};
  color: ${props => props.theme.mainFont};
  border-radius: 2px;
  text-align: center;
  margin-right: 8px;
  margin-block:4px;
  padding-block: 4px;
  padding-inline: 2px;
  font-size: 0.5rem;
`