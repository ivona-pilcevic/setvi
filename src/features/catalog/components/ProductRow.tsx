import styled from 'styled-components'

import type { IProduct } from '../utils/types'

interface IProps {
  product: IProduct
  onClick: (product: IProduct) => void
  style: React.CSSProperties
  ariaAttributes: { 'aria-posinset': number; 'aria-setsize': number; role: 'listitem' }
}

const ProductRow: React.FC<IProps> = ({ product, onClick, style, ariaAttributes }) => {
  const handleClick = () => {
    onClick(product)
  }
  return (
    <Row style={style} onClick={handleClick} {...ariaAttributes}>
      <ThumbnailCell>
        <Thumbnail src={product.thumbnail} alt={product.title} />
      </ThumbnailCell>
      <TitleCell>{product.title}</TitleCell>
      <CategoryCell>{product.category}</CategoryCell>
      <PriceCell>${product.price.toFixed(2)}</PriceCell>
      <RatingCell>⭐ {product.rating.toFixed(1)}</RatingCell>
    </Row>
  )
}

export default ProductRow

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
`

const ThumbnailCell = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const TitleCell = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: ${({ theme }) => theme.spacing.md};
`

const CategoryCell = styled.div`
  width: 150px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  text-transform: capitalize;
`

const PriceCell = styled.div`
  width: 100px;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`

const RatingCell = styled.div`
  width: 100px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`
