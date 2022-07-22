function random(n: number): string | number {
  const candy = n % 2 ? '' : 'canday'
  const bar = n % 11 ? '' : 'bar'
  return candy + bar || n
}
