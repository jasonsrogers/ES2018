//Regular Expression Named Capture Groups
console.log("Regular Expression Named Capture Groups");

// old way
{ // <= just in case your wondering the {} is just to isolate the scope to be able to redeclare let/const, this is mainly for the deconstruct

  const reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
    match = reDate.exec("2018-04-30"),
    year = match[1], // 2018
    month = match[2], // 04
    day = match[3]; // 30
  // Not great to know what is what
  console.log(`${match[1]}-${match[2]}-${match[3]}`);
}
// Note: Don't use this as email regex parser, doesn't handle multiple . (.co.uk)
{
  const reDate = /(.+)@(.+)\.(.+)/,
    match = reDate.exec("example@test.com");
  (year = match[1]), // example
    (month = match[2]), // test
    (day = match[3]); // com
  console.log(`${match[1]}@${match[2]}.${match[3]}`);
}

// introducing named group
{
  const reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
  const match = reDate.exec("2018-04-30");
  //   year   = match.groups.year,  // 2018
  //   month  = match.groups.month, // 04
  //   day    = match.groups.day;   // 30
  // lets use deconstruct
  const { year, month, day } = match.groups;
  console.log(`${year}-${month}-${day}`);
  // change to US date
  const d = "2018-04-30";
  console.log(d.replace(reDate, "$<month>-$<day>-$<year>"));
}
