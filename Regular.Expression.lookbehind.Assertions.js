//Regular Expression lookbehind Assertions
console.log('Regular Expression lookbehind Assertions')

{

    const
      reLookahead = /\D(?=\d+)/,
      match       = reLookahead.exec('$123.89');
    
    console.log( match[0] ); // $
}
{

    const
      reLookbehind = /(?<=\D)\d+/,
      match        = reLookbehind.exec('$123.89');
    
    console.log( match[0] ); // 123.89
}


const test = "foobarbarfoo"
{
    //bar(?=bar)     finds the 1st bar ("bar" which has "bar" after it)
    const
      reLookbehind = /bar(?=bar)/,
      match        = reLookbehind.exec(test);
    
    console.log( match ); // [ 'bar', index: 3, input: 'foobarbarfoo', groups: undefined ]
}

{
    //bar(?!bar)     finds the 2nd bar ("bar" which does not have "bar" after it)
    const
      reLookbehind = /bar(?!bar)/,
      match        = reLookbehind.exec(test);
    
    console.log( match ); // [ 'bar', index: 6, input: 'foobarbarfoo', groups: undefined ]
}

{
    //(?<=foo)bar    finds the 1st bar ("bar" which has "foo" before it)
    const
      reLookbehind = /(?<=foo)bar/,
      match        = reLookbehind.exec(test);
    
    console.log( match ); // [ 'bar', index: 3, input: 'foobarbarfoo', groups: undefined ]
}
{
    // (?<!foo)bar    finds the 2nd bar ("bar" which does not have "foo" before it)
    const
      reLookbehind = /(?<!foo)bar/,
      match        = reLookbehind.exec(test);
    
    console.log( match ); // [ 'bar', index: 6, input: 'foobarbarfoo', groups: undefined ]
}


{
    // The Power of a Smile
    // by Tupac Shakur

    // The goal here is the extra the object/thing and the verb
    // line one returns `gun` `kill`
    // note last line, the verb is on the second line ^^

    let poem = `
    The power of a gun can kill
    and the power of fire can burn
    the power of wind can chill
    and the power of a mind can learn
    the power of anger can rage
    inside until it tears u apart
    but the power of a smile
    especially yours can heal a frozen heart`;

    
   


    


    function *powers(poem, re) {
        let match;
        while (match = re.exec(poem)) {
            let { groups: { thing, verb } } = match;
            yield `${thing}: ${verb}`;
        }
    }
    console.log('Try 1')
    // Doesn't work because (?<thing>.*) is greedy and grabs everythin till the last `can`
    for (let power of powers(poem, /power of (?<thing>.*) can (?<verb>\w+)/gs)) {
        console.log(power);
    }
    /*
    a gun can kill
    and the power of fire can burn
    the power of wind can chill
    and the power of a mind can learn
    the power of anger can rage
    inside until it tears u apart
    but the power of a smile
    especially yours: heal
    */
    // Better by adding a options `a ` we capture things that object or not, but we are note
    console.log('Try 2')
    for (let power of powers(poem, /power of (?<thing>(a )?\w+) can (?<verb>\w+)/gs)) {
        console.log(power);
    }
    /*
    a gun: kill
    fire: burn
    wind: chill
    a mind: learn
    anger: rage
    */

    // We are there, we captured what we wanted by allowing anything between thing and verb .*?
    // BUT if we look at the actual match, we get `power of a gun can kill` so we are capturing more that needed even if we are only returning 
    // the groups
    console.log('Try 3')
    for (let power of powers(poem, /power of (?<thing>(a )?\w+).*?can (?<verb>\w+)/gs)) {
        console.log(power);
    }
    /*
    a gun: kill
    fire: burn
    wind: chill
    a mind: learn
    anger: rage
    a smile: heal
    */
    // TADA, by using look behind we have reduced our match group to just the point of interest `a gun can kill`
    for (let power of powers(poem, /(?<=power of )(?<thing>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs)) {
        console.log(power);
    }
    // a gun: kill
    // fire: burn
    // wind: chill
    // a mind: learn
    // anger: rage
    // smile: heal

    // lets expand just a bit by concidering:
    for (let power of powers('but the misuse of the power of a smile can hurts', /(?<=power of )(?<thing>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs)){
        console.log(power)
    }
    // a smile: hurts <==== correctly captured but not really insperational

    // we can easily improve our regex using look behind
    for (let power of powers('but the misuse of the power of a smile can hurts', /(?<!misuse.*?)(?<=power of )(?<thing>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs)){
        console.log(power)
    }
}

