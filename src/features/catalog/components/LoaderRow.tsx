import React from 'react'
import styled from 'styled-components'
import Loader from '../../../components/common/Loader'

interface IProps {
  style: React.CSSProperties
  ariaAttributes: { 'aria-posinset': number; 'aria-setsize': number; role: 'listitem' }
}

const LoaderRow: React.FC<IProps> = ({ style, ariaAttributes }) => {
  return (
    <LoaderRowContainer style={style} {...ariaAttributes}>
      <Loader size="small" />
      <span>Loading more products...</span>
    </LoaderRowContainer>
  )
}

export default LoaderRow

const LoaderRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  span {
    font-size: ${({ theme }) => theme.typography.fontSize.small};
  }
`
