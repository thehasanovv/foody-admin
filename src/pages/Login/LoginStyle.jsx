import styled from "styled-components"
import Paper from '@mui/material/Paper'

export const LoginContainer=styled(Paper).attrs({elevation:5})`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:400px;
`

export const LoginFormContainer=styled.div`
    border-right:1px solid black;
    width:50%;
`
export const LoginImageContainer=styled.div`
    border:1px solid black;
    width:50%;
`