export function isValid(e: React.FormEvent<HTMLInputElement>, max: number) {
  const targetValue = e.currentTarget.value
  return targetValue.replace(/\D/g, '').length < max
}
