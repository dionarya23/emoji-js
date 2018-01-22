'uses strict';

class Emoji{
    constructor(){
        this.text = null;
        this.regex = [
            /:smiley:/g, /:smile:/g, /:flushed:/g, /:grin:/g,
            /:stuck_out_tongoue_closed_eyes:/g, /:kissing_smiling_eyes:/g,
            /:worried:/g, /:open_mouth:/g, /:hushed:/g, /:sweat_smile:/g,
            /:weary:/g, /:confounded:/g, /:persevere:/g, /:joy:/g, /:kissing:/g,
            /:sleeping:/g, /:scream:/g, /:camera:/g, /:computer:/g, /:couple:/g,
            /:runner:/g, /:poop:/g, /:heart:/g, /:yum:/g, /:laughing:/g
        ];
        this.emoji = [
            '😃', '😄', '😳', '😁', '😝', '😙',
            '😟', '😮', '😯', '😅', '😩', '😖',
            '😣', '😂', '😗',  '😴', '😱', '📷',
            '💻', '👫', '🏃', '💩', '❤️', '😋',
            '😆'
        ];

    }

    mainFucn(text, callback){
        this.text = text;
        this.convert();
        callback(false, this.text);
    }

   convert() {
       let i, sizeArray = this.emoji.length;
       for (i=0;i<sizeArray;i++){
            if(this.regex[i].test(this.text)){
                this.text = this.text.replace(
                            this.regex[i],
                            this.emoji[i]);
            }
       }
   }
}

const emojiJS = new Emoji();
module.export = {
  convert : emojiJS.mainFucn
}
