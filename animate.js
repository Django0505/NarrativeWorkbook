// Dependencies 
var TextAnimation = require("text-animation");
 
// Animate bottom-top 
TextAnimation("Hello...", function (err) {
    if (err) throw err;
    // And then, top-bottom 
    TextAnimation({
        text: "Codex is cool!"
      , animation: "top-bottom"
    });
});
