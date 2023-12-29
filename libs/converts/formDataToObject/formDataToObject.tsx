function formDataToObject(formData: FormData) {
  const result: any = {};

  formData?.forEach((value, key) => {
    // Split the key into an array to handle nested keys
    const keys = key.split('[').map(item => item.replace(']', ''));

    let currentLevel = result;

    // Iterate through the keys and create nested objects
    keys.forEach((key, index) => {
      if (!currentLevel[key]) {
        if (index === keys.length - 1) {
          // If it's the last key, assign the value
          currentLevel[key] = value;
        } else {
          // If it's not the last key, create a new object
          currentLevel[key] = {};
        }
      }

      // Move to the next level
      currentLevel = currentLevel[key];
    });
  });

  return result;
}

export default formDataToObject