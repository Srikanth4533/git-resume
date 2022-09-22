import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 90%;
  margin: auto;
`

export const SearchResultContainer = styled.div`
  /* position: absolute; */
  /* overflow-y: scroll; */
  width: 100%;
  /* left: 0; */
  margin-top: 45px;
  /* z-index: 1000; */
`

export const ImgContainer = styled.div`
  display: flex;
  padding-left: 4px;
  margin-bottom: 6px;
  padding-block: 4px;
  width: 70%;
  background: ${props => props.theme.tertiary};
`
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const Name = styled.h2`
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.mainFont};
  font-weight: 400;
  margin-left: 8px;
  margin-top: 4px;
`