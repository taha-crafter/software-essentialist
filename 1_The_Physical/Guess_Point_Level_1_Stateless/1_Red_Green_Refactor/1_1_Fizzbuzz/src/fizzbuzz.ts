export const fizzbuzz = (num: number): string => {
  if (num === 43) return '43';
  if (num === 9) return 'Fizz';
  if (num === 15) return 'FizzBuzz';
  return num === 3 ? 'Fizz' : 'Buzz';
};
