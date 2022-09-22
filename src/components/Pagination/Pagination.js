import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setPage } from 'store/home/actions'
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
} from './Pagination.css'

const Pagination = (props) => {
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
        (<PagesContainer>
        <Prev 
          size='2.3rem'
          onClick={() => dispatch(setPage(-1))}
        />
        {pagesArr.map((num) => {
          return (
            <Page 
              key={keyGen()} 
              me={props.currentPage === num} 
              onClick={() => dispatch(setCurrentPage(num))}
            >
              {num}
            </Page>
          )
        })}
        <Next
          size='2.3rem'
          onClick={() => dispatch(setPage(+1))}
        />
        </PagesContainer>
        )}

        {!props.loading && (
          <Wrapper>
          <Older
            onClick={() => dispatch(setPage(-1))}
          >
            <Left 
              size='1rem'
            /> 
            Older
          </Older>
          <Newer
            onClick={() => dispatch(setPage(+1))}
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

export default Pagination