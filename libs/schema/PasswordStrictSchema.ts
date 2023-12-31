import { z } from "zod";
import ZodString from "../Zod/ZodString";

const PasswordStrictSchema = z.object({
    password:ZodString("رمز").refine((password) => {
    // Define regular expressions for each requirement
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // Add more special characters as needed
  
    // Check if the password meets all requirements
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);
  
    // Return true if all requirements are met, otherwise false
    return hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
  }, {
    message: 'رمز عبور باید حداقل شامل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر ویژه باشد.',
  })});
  export default PasswordStrictSchema