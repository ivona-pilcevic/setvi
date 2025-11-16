import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Loader: React.FC = () => {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  )
}

export default Loader

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: 200px;
`
