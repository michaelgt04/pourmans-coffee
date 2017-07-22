export const envVar = property => {
  let envVariable = document.getElementById('react-app').dataset[property]
  if(envVariable == 'true') return true
  if(envVariable == 'false') return false
  return envVariable
}
