function binarySearch(array, x, left = 0, right = array.length - 1) {
  // End condition if x is larger than the last element
  if (left > right) return false
  // Mid point
  let mid = Math.floor((left + right) / 2)
  // Mid matches element
  if (array[mid] === x) {
    return true
    // Number is less than mid, search left side
  } else if (x < array[mid]) {
    return binarySearch(array, x, left, (mid - 1))
    // Number is greater than mid, search right side
  } else {
    return binarySearch(array, x, (mid + 1), right)
  }
  // Number not found
  return false
}

let nums = [1, 2, 4, 6, 8, 20, 100, 101]

console.log(binarySearch(nums, 20))