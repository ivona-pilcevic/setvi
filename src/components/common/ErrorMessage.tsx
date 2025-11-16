import { Alert } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  description?: string
  title?: string
}

const ErrorMessage: React.FC<IProps> = ({
  description = 'Something went wrong. Please try again later.',
  title = 'Error'
}) => {
  return (
    <Container>
      <Alert message={title} description={description} type="error" />
    </Container>
  )
}

export default ErrorMessage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: 200px;
`
