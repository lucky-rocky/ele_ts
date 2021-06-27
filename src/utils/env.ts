export const baseUrl = 'https://elm.cangdu.org'

/**
 * token
 */
let token = ''
export const setToken = function(tokenValue: string): void {
  if (tokenValue) {
    token = tokenValue
  }
}
export const getToken = function(): string {
  return token
}
