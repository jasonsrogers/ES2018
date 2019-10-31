//Regular Expression s (dotAll) Flag
console.log('Regular Expression s (dotAll) Flag')

// without a flag
console.log("foo\r\nbar".match(/.+/))
// any group of characters but because it has no flag it stops at the first line and returns
// foo

console.log("foo\r\nbar".match(/.+/g))
// any group of characters + flag g => will return more that one match
// foo
// bar


console.log("foo\r\nbar".match(/.+/s))
// any group of character including the new line characters
// foo\r\nbar