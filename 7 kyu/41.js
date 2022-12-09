function calculateYears(principal, interest, tax, desired) {
    let year = 0
    while (principal < desired) {
    let gains = (principal * interest) -(principal * interest * tax )
    principal = principal + gains
    year++
  }
  return year
}
  