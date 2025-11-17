import { Drawer, Tag, Divider } from 'antd'
import styled from 'styled-components'
import Loader from '../../../components/common/Loader'
import { useFetchProductDetails } from '../hooks/api/useFetchProductDetails'
import ErrorMessage from '../../../components/common/ErrorMessage'

interface IProps {
  productId: number | null
  open: boolean
  onClose: () => void
}

const ProductDrawer = ({ productId, open, onClose }: IProps) => {
  const { productDetails, isLoadingProductDetails, errorFetchingProductDetails } =
    useFetchProductDetails(productId ?? undefined)

  if (isLoadingProductDetails) return <Loader />
  if (!productDetails || errorFetchingProductDetails)
    return <ErrorMessage description="Failed to fetch product details." />

  return (
    <Drawer open={open} onClose={onClose} width={600} title="Product Details">
      <Content>
        <ImageSection>
          <ProductImage src={productDetails.thumbnail} alt={productDetails.title} />
        </ImageSection>
        <Section>
          <Title>{productDetails.title}</Title>
          <PriceSection>
            <Price>${productDetails.price.toFixed(2)}</Price>
            <Rating>⭐ {productDetails.rating.toFixed(1)}</Rating>
          </PriceSection>
        </Section>
        <Divider />
        <Section>
          <Label>Description</Label>
          <Description>{productDetails.description}</Description>
        </Section>
        <Divider />
        <Section>
          <Label>Category</Label>
          <CategoryText>{productDetails.category}</CategoryText>
        </Section>
        {productDetails.tags && productDetails.tags.length > 0 && (
          <>
            <Divider />
            <Section>
              <Label>Tags</Label>
              <TagsContainer>
                {productDetails.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>
            </Section>
          </>
        )}
      </Content>
    </Drawer>
  )
}

export default ProductDrawer

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  object-fit: cover;
`

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const Price = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`

const Rating = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.body};
  margin: 0;
`

const CategoryText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  text-transform: capitalize;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`
