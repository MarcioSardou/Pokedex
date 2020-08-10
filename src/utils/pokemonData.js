export function getId(url){
  const id = url.substring(34, url.length - 1)
  return id
}

export function PokemonName(name){
  const capitalyzePokemonName = name.charAt(0).toUpperCase() + name.slice(1)
  return capitalyzePokemonName
}