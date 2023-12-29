function convertSearchParamsToObject(searchParams:URLSearchParams) {
    return Object.fromEntries(searchParams.entries());
  }
  export default convertSearchParamsToObject