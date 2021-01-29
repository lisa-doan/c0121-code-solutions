/* exported isVowel */
function isVowel(character) {
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  if (vowels[character.toLowerCase()]) return true;
  return false;
}
