import React from 'react'
import styled from 'styled-components'
import { HEADER_HEIGHT } from '../utils/constants'

const TableHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderCell style={{ width: '80px' }}>Image</HeaderCell>
      <HeaderCell style={{ flex: 1 }}>Title</HeaderCell>
      <HeaderCell style={{ width: '150px' }}>Category</HeaderCell>
      <HeaderCell style={{ width: '100px' }}>Price</HeaderCell>
      <HeaderCell style={{ width: '100px' }}>Rating</HeaderCell>
    </HeaderContainer>
  )
}

export default TableHeader

const HeaderContainer = styled.div`
  display: flex;
  height: ${HEADER_HEIGHT}px;
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.spacing.md};
  align-items: center;
`

const HeaderCell = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`
