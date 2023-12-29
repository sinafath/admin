type PostProductResult = {}
type productType = {
  
    id: number,
  name: string,
    durationTime: number,
    userId: number,
    deleted: null
  
}

type GetProductByIdResult = productType
type GetProducsResult =  {
  timestamp: '2023-12-29T09:45:49.758Z',
  status: 'success',
  data: productType[],
  statusCode: 200
}

export type { PostProductResult, GetProductByIdResult, GetProducsResult }