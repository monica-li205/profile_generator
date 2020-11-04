const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`Nice to meet you ${answer1}`);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`${answer2} sounds exciting!`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`I like to listen to ${answer3} too!`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`i like ${answer4} too`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`noodles are better than ${answer5}...`);
          rl.question('Which tv show is your absolute favourite? ', (answer6) => {
            console.log(`${answer6} is very interesting!`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer7} is amazing!!`);
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other show, and is amazing at ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});