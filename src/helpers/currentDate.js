export default function() {
  const date = new Date()
  const params = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  return date.toLocaleDateString('ru', params)
}
