import Loading from 'components/Loading'
import React from 'react'
import { useDispatch } from 'react-redux'
import { keyGen } from 'utils'
import { 
  Container, 
  Content, 
  Repo, 
  RepoDesc, 
  RepoHero, 
  RepoTopics, 
  Topic 
} from './Repos.css'

const Repos = (props) => {
  const dispatch = useDispatch()

  const lastIndex = props.currentPage * props.reposPerPage
  const firstIndex = lastIndex - props.reposPerPage

  const newRepos = props.repos.slice(firstIndex, lastIndex)
  return (
    <Container>
      <Content>
        {props.loading && <Loading height={300} />}
        {!props.loading && 
          props.repos && 
          newRepos.map((repo) => {
          return (
            <Repo key={keyGen()}>
              <RepoHero>{repo.name}</RepoHero>
              {repo.description ?
                <RepoDesc>{repo.description}</RepoDesc> :
                <div>--</div>
              }
              <RepoTopics>
              {repo.topics ?
                repo.topics.map((topic) => {
                  const title = topic && 
                                topic.length > 6 ? 
                                `${topic.slice(0, 8)}...` :
                                topic
                  return (
                      <Topic key={keyGen()}>
                      {title}
                      </Topic>
                  )
                })
                 :
                <div>--</div>
              }
              </RepoTopics>
            </Repo>
          )
        })}
      </Content>
    </Container>
  )
}

export default Repos