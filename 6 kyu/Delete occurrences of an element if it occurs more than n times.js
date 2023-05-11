function deleteNth(arr, n) {
  const result = []
  const count = {}

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    if (!count[num]) {
      count[num] = 1
      result.push(num)
    } else if (count[num] < n) {
      count[num]++
      result.push(num)
    }
  }

  return result
}
