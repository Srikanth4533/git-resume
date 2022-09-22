import styled from "styled-components";
import { ArrowheadLeft } from '@styled-icons/evaicons-solid/ArrowheadLeft'
import { ArrowheadRight } from '@styled-icons/evaicons-solid/ArrowheadRight'
import { ArrowRight } from '@styled-icons/open-iconic/ArrowRight'
import { ArrowLeft } from "@styled-icons/open-iconic/ArrowLeft";


export const Container = styled.div`
  width: 100%;

`

export const Content = styled.div`
  width: 90%;
  margin: auto;
`
export const PagesContainer = styled.div`
  margin-block: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Page = styled.div`
  font-size: 1rem;
  padding-block: 8px;
  padding-inline: 16px;
  color: ${props => props.me ? props.theme.mainFont : props.theme.blue};
  border: 1px solid ${props => props.theme.tertiary};
  background: ${props => props.me ? props.theme.blue : ''};
`
export const Prev = styled(ArrowheadLeft)`
  border: 1px solid ${props => props.theme.tertiary};
  color: ${props => props.theme.blue};
  border-radius: 4PX;
  padding-block: 8px;
  padding-inline: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`

export const Next = styled(ArrowheadRight)`
  border: 1px solid ${props => props.theme.tertiary};
  padding-block: 8px;
  padding-inline: 4px;
  color:${props => props.theme.blue};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const Older = styled.div`
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.tertiary};
  border: 1px solid ${props => props.theme.tertiary};
  border-radius: 20px;
  font-size: 0.8rem;
  padding-block: 10px;
  padding-inline: 24px;
`
export const Left = styled(ArrowLeft)`
  margin-right: 4px;
`

export const Newer = styled.div`
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.blue};
  border: 1px solid ${props => props.theme.tertiary};
  border-radius: 20px;
  font-size: 0.8rem;
  padding-block: 10px;
  padding-inline: 24px;
`
export const Right = styled(ArrowRight)`
  margin-left: 4px;
`