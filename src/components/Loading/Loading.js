import React from 'react'
import styled, { withTheme } from 'styled-components'
import { BarLoader, FadeLoader } from 'react-spinners'
import { Loader } from './Loading.css'

const override = {
    width: "300px ",
    marginInline: "12px",
    borderRadius: "7px",
}

const Loading = (props) => {
  return (
    <Loader height={props.height} >
      {props.bar ? <BarLoader color={props.theme.tertiary} height={10} cssOverride={override} />
      : <FadeLoader
          color={props.theme.tertiary}
          height={15}
          width={5}
          radius={2}
          margin={1}
          speedMultiplier="0.8"
        />
    }
    </Loader>
  )
}

export default withTheme(Loading)