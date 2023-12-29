
function objectToFormData(object: {}, formData?: FormData, parentKey?: string) {
    formData = formData || new FormData();
    const obj: any = object
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}[${key}]` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // If the current value is an object, recursively call the function
                objectToFormData(obj[key], formData, newKey);
            } else {
                // If the current value is not an object, append it to the FormData
                formData.append(newKey, obj[key]);
            }
        }
    }

    return formData;
}
export default objectToFormData