export function checkNumbers(...nums) {
  return nums.some(num => typeof num !== "number" || num < 0 || !Number.isInteger(num) )
}

export function checkStrings(...strs) {
  return strs.some((str) => typeof str !== "string" || str.length === 0)
}

export function checkArrays(...arrs) {
  return arrs.some(arr => !Array.isArray(arr) || arr.length === 0)
}

export function checkObjects(...objs) {
  return objs.some((obj) => typeof obj !== "object" || obj === null || Array.isArray(obj))
}