const fudges = {
  SPANISH: 4,
  FRENCH: 3,
  ENGLISH: 2,
}

fudge = fudges[recipe] || 1
amt = base * fudge
sugar = 2 * bottom(amt) + top(amt) * 1.17
if (recipe === 'FRENCH') chocolate = 7
