import responseSuccess from "@/libs/types/response"

type addProductProps = { userId: number, name: string, durationTime?: number }
type editProductByIdProps = addProductProps & {id:number}

type productType = {
    id: number,
  name: string,
    durationTime: number,
    userId: number,
    deleted: null
  
}

type GetProductByIdResult = responseSuccess<productType>
type GetProducsResult =  responseSuccess<productType[]>

export type { addProductProps, GetProductByIdResult, GetProducsResult,editProductByIdProps }