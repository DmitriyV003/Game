export default function (number, numbers) {
  if (number === null) {
    return null
  }
  return Number(number).toFixed(numbers)
}
