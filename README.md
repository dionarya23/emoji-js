# Emoji JS
> simple emoji `:octocat:` => :octocat:

[![version](https://img.shields.io/npm/v/dap-emoji.svg)](https://www.npmjs.com/package/dap-emoji)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=social)](https://github.com/dionarya6661/emoji-js)

dap-emoji merupakan library nodeJS yang bisa mengkonversi string biasa menjadi sebuah emoji
`:smiley:` => :smiley:
## Install
```bash
npm install dap-emoji --save
```

## Cara Penggunaan
```javascript
const emoji = require('dap-emoji');

var someText = "Hello World :smiley: :runner:";

emoji.convert(someText, function(error, response){
      if(!error){
        console.log(response);
        // Output => Hello World 😃 🏃
      }
});

```

## List Kode
| Code          | Output        |
| ------------- |:-------------:|
| `:smiley:`    | :smiley:      |
| `:smile:`     | :smile:       |
| `:flushed:`   | :flushed:     |
| `:grin:`      | :grin:  |
| `:stuck_out_tongoue_closed_eyes:` | :stuck_out_tongoue_closed_eyes: |
| `:kissing_smiling_eyes:` | :kissing_smiling_eyes: |
| `:worried:` | :worried: |
| `:open_mouth:` | :open_mouth: |
| `:hushed:` | :hushed: |
| `:sweat_smile:` | :sweat_smile: |
| `:weary:` | :weary: |
| `:confounded:` | :confounded: |
| `:persevere:` | :persevere: |
| `:joy:` | :joy: |
| `:kissing:` | :kissing: |
| `:sleeping:` | :sleeping: |
| `:scream:` | :scream: |
| `:camera:` | :camera: |
| `:computer:` | :computer: |
| `:couple:` | :couple: |
| `:runner:` | :runner: |
| `:poop:` | :poop: |
| `:heart:` | :heart: |
| `:yum:` | :yum: |
| `:laughing:` | :laughing:  |
