class TrieNode {
  constructor() {
    this.children = {};
    this.flag = false;
  }

  containsKey(ch) {
    return this.children[ch];
  }

  put(ch, node) {
    this.children[ch] = node;
  }

  get(ch) {
    return this.children[ch];
  }

  setEnd() {
    this.flag = true;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word) {
    const chars = word.split("");
    let node = this.root;
    chars.forEach((ch) => {
      if (!node.containsKey(ch)) {
        node.put(ch, new TrieNode());
      }
      node = node.get(ch);
    });
    node.setEnd();
  }

  searchWord(word) {
    let node = this.root;
    let searched = true;
    const chars = word.split("");
    for (let i = 0; i < chars.length; i++) {
      if (!node.containsKey(chars[i])) {
        searched = false;
        break;
      }
      node = node.get(chars[i]);
    }
    return searched && node.flag;
  }

  searchWildCard(word) {
    let node = this.root;
    let searched = true;
    const chars = word.split("");
    for (let i = 0; i < chars.length; i++) {
      if (!node.containsKey(chars[i])) {
        searched = false;
        break;
      }
      node = node.get(chars[i]);
    }
    return searched;
  }
}

const trie = new Trie();

const words = ["hello", "help", "help", "hel", "hel"];

words.forEach((word) => {
  trie.insertWord(word);
});

const searched1 = trie.searchWord("help");
const searched2 = trie.searchWord("hellp");
console.log("Word help found :", searched1);
console.log("Word hell found :", searched2);

const searchedWild1 = trie.searchWildCard("he");
const searchedWild2 = trie.searchWildCard("xe");
console.log("Word he found :", searchedWild1);
console.log("Word xe found :", searchedWild2);
