export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  sku: string
  weight: number
  dimensions: IDimension
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: IReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: IProductMeta
  images: string[]
  thumbnail: string
}

export interface IReview {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface IDimension {
  width: number
  height: number
  depth: number
}
export interface IProductMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}
