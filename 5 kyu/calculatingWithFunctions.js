function zero(operation) {
 const value = 0
  return operation ? operation(value) :value
}
function one(operation) {
const value = 1
  return operation ? operation(value) :value
}
function two(operation) {
 const value = 2
   return operation ? operation(value) :value
}
function three(operation) {
 const value = 3
   return operation ? operation(value) :value
}

function four(operation) { 
  const value = 4
   return operation ? operation(value) :value
}

function five(operation) {
   const value = 5
   return operation ? operation(value) :value
}

function six(operation) {
   const value = 6
   return operation ? operation(value) :value
}

function seven(operation) {
   const value = 7
   return operation ? operation(value) :value
}

function eight(operation) {
   const value = 8
   return operation ? operation(value) :value
}

function nine(operation) {
   const value = 9
   return operation ? operation(value) :value
}

function plus(value) {
  return function(otherValue) {
    return Math.floor(value + otherValue)
  }
}

function minus(value) {
  return function(otherValue) {
    return Math.floor(otherValue-value)
  }
}

function times(value) {
  return function(otherValue) {
    return Math.floor(value * otherValue)
  }
}

function dividedBy(value) {
  return function(otherValue) {
    return Math.floor(otherValue/ value)
  }
}
