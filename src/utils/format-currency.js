export default function currency (val) {
  if (val && val.length) {
    return parseInt(val.replace(/,/gi, '')).toLocaleString()
  }

  return val
}
