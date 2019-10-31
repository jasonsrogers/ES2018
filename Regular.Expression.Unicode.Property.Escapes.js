// Regular Expression Unicode Property Escapes
console.log('Regular Expression Unicode Property Escapes')

// new regex flag lets you specify unicode names/types
// for example: simeple test for white space without /u
console.log(`Is string only white space ${/^\s+$/u.test('\t \n\r')}`)//✅
console.log(`Is string only white space ${/^\s+$/u.test('\t \nabc\r')}`)//❌

// this can now be replaced by
console.log(`Is string only white space ${/^\p{White_Space}+$/u.test('\t \n\r')}`)//✅
console.log(`Is string only white space ${/^\p{White_Space}+$/u.test('\t \nabc\r')}`)//❌

// not the most useful example but a bit more verbrose, but what happens when we want to test Greek ?
console.log(`Is string using only Greek characters ${/^\p{Script=Greek}+$/u.test('μετά')}`)//✅
console.log(`Is string using only Greek characters ${/^\p{Script=Greek}+$/u.test('something')}`)//❌

// And off course, since they are there on unicode... emoji 😀😀😀
console.log(`Is 😀 in the tweet ${/^.*?\p{Emoji}+.*?/u.test('playing about with emoji can be fun 😀 !!!')}`)//✅
console.log(`Is 😀 in the tweet ${/^.*?\p{Emoji}+.*?/u.test('there are no emoji !!!')}`)//❌

/**
/^\p{ASCII}+$/u.test('abc')   //✅
/^\p{ASCII}+$/u.test('ABC@')  //✅
/^\p{ASCII}+$/u.test('ABC🙃') //❌
/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF') //✅
/^\p{ASCII_Hex_Digit}+$/u.test('h')                //❌
/^\p{Lowercase}$/u.test('h') //✅
/^\p{Uppercase}$/u.test('H') //✅

/^\p{Emoji}+$/u.test('H')   //❌
/^\p{Emoji}+$/u.test('🙃🙃') //✅
/^\p{Script=Greek}+$/u.test('ελληνικά') //✅
/^\p{Script=Latin}+$/u.test('hey') //✅
 */

 // and the negation \P{}

console.log(`Latin character string: ${/^\p{Script=Latin}+$/u.test('hey')}`) //✅
console.log(`Latin character string: ${/^\p{Script=Latin}+$/u.test('ελληνικά')}`)//❌
console.log(`NOT Latin character string: ${/^\P{Script=Latin}+$/u.test('ελληνικά')}`)//✅