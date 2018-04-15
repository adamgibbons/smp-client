export default function formatOptionsList (options) {
  return options.map((option) => {
    return { name: option, value: option }
  })
}
