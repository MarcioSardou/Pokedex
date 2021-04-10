export function getId(url){
  const id = url?.substring(34, url.length - 1)
  return id
}
