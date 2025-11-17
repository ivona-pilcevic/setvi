import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  size?: 'small' | 'default' | 'large'
}

const Loader: React.FC<IProps> = ({ size = 'large' }) => {
  return (
    <Container>
      <Spin size={size} />
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
