function serializeFormData(formData: FormData){
    return Object.fromEntries(formData.entries())
}
export default serializeFormData