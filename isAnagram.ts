const isAnagram = (s: string, t: string) => {
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  const setStr = (word: string, map: Map<string, number>) => {
    for (const str of word) {
      map.set(str, (map.get(str) ?? 0) + 1);
    }
  };

  setStr(s, sMap);
  setStr(t, tMap);

  if (sMap.size !== tMap.size) return false;

  for (const [char, count] of sMap) {
    if (!tMap.has(char) || count !== tMap.get(char)) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("aacc", "ccac"));
