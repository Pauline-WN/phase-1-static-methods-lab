  //add static methods here
  class Formatter {
    // Capitalize the first letter of a string
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    // Sanitize a string by removing all non-alphanumeric characters
    // except for dashes, single quotes, and spaces
    static sanitize(str) {
      return str.replace(/[^a-zA-Z0-9-'\s]/g, '');
    }
  
    // Titleize a string by capitalizing all words except for specific exceptions
    // Always capitalize the first word
    static titleize(str) {
      const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = str.toLowerCase().split(' ');
  
      return words
        .map((word, index) => {
          if (index === 0 || !exceptions.includes(word)) {
            return this.capitalize(word);
          } else {
            return word;
          }
        })
        .join(' ');
    }
  }
  
  // Testing the Formatter class
  console.log(Formatter.capitalize('hello')); // => 'Hello'
  console.log(Formatter.sanitize("Hello, world! Let's code.")); // => "Hello world Let's code"
  console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // => 'The Quick Brown Fox Jumps Over the Lazy Dog'
  console.log(Formatter.titleize('a tale of two cities')); // => 'A Tale of Two Cities'
  
