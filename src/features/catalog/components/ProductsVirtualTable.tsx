import { useCallback, useMemo } from 'react'
import { List, useListRef } from 'react-window'
import styled from 'styled-components'

import ProductRow from './ProductRow'

import type { IProduct } from '../utils/types'
import { ROW_HEIGHT } from '../utils/constants'
import TableHeader from './TableHeader'
import LoaderRow from './LoaderRow'

interface IProps {
  products: IProduct[]
  onRowClick: (product: IProduct) => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
  onFetchNextPage: () => void
}

interface IRowProps {
  index: number
  style: React.CSSProperties
  ariaAttributes: { 'aria-posinset': number; 'aria-setsize': number; role: 'listitem' }
}

const ProductsVirtualTable: React.FC<IProps> = ({
  products,
  onRowClick,
  hasNextPage,
  isFetchingNextPage,
  onFetchNextPage
}) => {
  const listRef = useListRef(null)
  const rowCount = useMemo(() => {
    return hasNextPage || isFetchingNextPage ? products.length + 1 : products.length
  }, [products.length, hasNextPage, isFetchingNextPage])

  const handleRowsRendered = useCallback(
    ({ stopIndex }: { startIndex: number; stopIndex: number }) => {
      if (stopIndex >= products.length - 1 && hasNextPage && !isFetchingNextPage) {
        onFetchNextPage()
      }
    },
    [products.length, hasNextPage, isFetchingNextPage, onFetchNextPage]
  )

  const Row = ({ index, style, ariaAttributes }: IRowProps) => {
    if (index === products.length) {
      return <LoaderRow style={style} ariaAttributes={ariaAttributes} />
    }

    const product = products[index]
    if (!product) return <EmptyRow style={style} {...ariaAttributes} />

    return (
      <ProductRow
        product={product}
        onClick={onRowClick}
        style={style}
        ariaAttributes={ariaAttributes}
      />
    )
  }

  return (
    <TableContainer>
      <TableHeader />
      <List
        listRef={listRef}
        rowCount={rowCount}
        rowHeight={ROW_HEIGHT}
        defaultHeight={600}
        style={{ height: 600, width: '100%' }}
        rowComponent={Row}
        rowProps={{}}
        onRowsRendered={handleRowsRendered}
      />
    </TableContainer>
  )
}

export default ProductsVirtualTable

const TableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const EmptyRow = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
