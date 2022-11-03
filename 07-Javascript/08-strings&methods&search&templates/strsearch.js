/*/````````````````````````````\*\

\*\______.______.______.______./*/

/*/````````````````````````````\*\
    JavaScript Search Methods
    _________________________

    String indexOf()
    String lastIndexOf()
    String search()
    String match()
    String matchAll()
    String includes()
    String startsWith()
    String endsWith()
\*\______.______.______.______./*/

/*/````````````````````````````\*\
            indexOf()
\*\______.______.______.______./*/

let str = 'Please locate where "Locate" occurs!';

console.log(str.indexOf("locate"));
console.log(str.indexOf("locate", 15));

/*/````````````````````````````\*\
          lastIndexOf()
\*\______.______.______.______./*/

console.log(str.lastIndexOf("where"));

/*/````````````````````````````\*\
             search()
\*\______.______.______.______./*/

console.log(str.search("locate"));
console.log(str.search(/locate/));

/*/````````````````````````````\*\
             match()
\*\______.______.______.______./*/


