import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPPage, setPPage } from 'store/profile/actions'
import { keyGen } from 'utils'
import { 
  Container, 
  Content, 
  Left, 
  Newer, 
  Next, 
  Older, 
  Page, 
  PagesContainer, 
  Prev, 
  Right, 
  Wrapper
} from '../Pagination/Pagination.css'

const ProfilePagination = (props) => {
  const dispatch = useDispatch()

  const pagesArr = []

  for(let i=1; i<= Math.ceil(props.repos.length / props.reposPerPage); i++) {
    pagesArr.push(i)
  }  

  return (
    <Container>
      <Content>
        {!props.loading &&
          props.repos &&
        <PagesContainer>
        <Prev 
          size='2.3rem'
          onClick={() => dispatch(setPPage(-1))}
        />
        {pagesArr.map((num) => {
          return (
            <Page 
              key={keyGen()} 
              me={props.currentPage === num} 
              onClick={() => dispatch(setCurrentPPage(num))}
            >
              {num}
            </Page>
          )
        })}
        <Next
          size='2.3rem'
          onClick={() => dispatch(setPPage(+1))}
        />
        </PagesContainer>
        }

      {!props.loading && (
        <Wrapper>
        <Older
          onClick={() => dispatch(setPPage(-1))}
        >
          <Left 
            size='1rem'
          /> 
          Older
        </Older>
        <Newer
          onClick={() => dispatch(setPPage(+1))} 
        >
          Newer 
          <Right 
            size='1rem'
          />
        </Newer>
      </Wrapper>
      )}
      </Content>
    </Container>
  )
}

export default ProfilePagination