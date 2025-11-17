import { Layout, Input, Typography, Select } from 'antd'
import styled from 'styled-components'

import { useQueryParams } from '../../../hooks/useQueryParams'
import Loader from '../../../components/common/Loader'
import { useFetchProductCategories } from '../hooks/api/useFetchProductCategories'
import { useFetchProductsInfinite } from '../hooks/api/useFetchProductsInfinite'

const { Content } = Layout
const { Title } = Typography
const { Search } = Input

const CatalogPage = () => {
  const { params, debouncedParams, handleSearchChange, setCategory } = useQueryParams()
  const { productCategories, isLoadingProductCategories } = useFetchProductCategories()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFetchProductsInfinite(debouncedParams)

  const handleCategoryChange = (value: string | null) => {
    setCategory(value)
  }

  const allProducts = data?.pages.flatMap((page) => page.products) ?? []

  if (isLoading) {
    return <Loader />
  }

  return (
    <StyledLayout>
      <HeaderSection>
        <Title level={2}>Product Catalog</Title>
        <FiltersContainer>
          <Search
            placeholder="Search products..."
            allowClear
            value={params.q || ''}
            onChange={handleSearchChange}
          />
          <Select
            placeholder="Select category"
            allowClear
            value={params.category}
            onChange={handleCategoryChange}
            loading={isLoadingProductCategories}
            style={{ minWidth: 200 }}
          >
            {productCategories?.map((cat) => (
              <Select.Option key={cat.slug} value={cat.slug}>
                {cat.name}
              </Select.Option>
            ))}
          </Select>
        </FiltersContainer>
      </HeaderSection>
      <Content>{/* TODO: Table */}</Content>
    </StyledLayout>
  )
}

export default CatalogPage

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
`

const HeaderSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const FiltersContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  max-width: 600px;
`
