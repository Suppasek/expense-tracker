import styled from 'styled-components'
import { Button } from 'antd'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    .content {
        justify-self: center;
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

export const StyledButton = styled(Button)`
    width: 300px;
    align-self: center;
`
