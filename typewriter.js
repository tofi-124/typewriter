const sentence = "hello there from lighthouse labs";
let i = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), 50 * i);
  i++;
}

setTimeout(() => process.stdout.write("\n"), 50 * sentence.length);
