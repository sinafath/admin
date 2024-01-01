
type responseSuccessType<type> = {
  timestamp: '2023-12-29T09:45:49.758Z',
  status: 'success',
  data: type
  statusCode: 200
}
type responseSuccessPagination<type> = responseSuccessType<{
  data: type,
    meta: {
    total: number,
    lastPage: number,
    currentPage: number,
    perPage: number,
    prev: 0,
    next: 2
  }
}>
export type { responseSuccessPagination }
export default responseSuccessType