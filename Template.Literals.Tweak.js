//  Template Literals Tweak
console.log('Template Literals Tweak')

function latex(str) { 
 return { "cooked": str[0], "raw": str.raw[0] }
} 
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
console.log(latex`\unicode`)
console.log(latex`\xerxes`)
// { cooked: undefined, raw: "\\unicode" }

// Note, the revision is only for template literals so the following is still illegal

// const result = `some random string with \unicode in it`; //❌ SyntaxError: Invalid Unicode escape sequence 