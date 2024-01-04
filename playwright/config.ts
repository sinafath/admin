const baseUrl = process.env.TEST_URL ?? ""
const email = process.env.EMAIL_AUTH ?? ""
const password = process.env.PASSWORD_AUTH ?? ""
export { email, password }
export default baseUrl