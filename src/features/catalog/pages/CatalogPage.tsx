import { Layout, Input, Typography } from 'antd'
import styled from 'styled-components'
import { useQueryParams } from '../../../hooks/useQueryParams'

const { Content } = Layout
const { Title } = Typography
const { Search } = Input

const CatalogPage = () => {
  const { params, handleSearchChange } = useQueryParams()

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
