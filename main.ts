Pyramid(level);
var level = 5;
var line = getLine(level);
var Star:string="";
var Blank:string="";
Pyramid(line);
function Pyramid(level) {
    for (var i = 0; i < level; i++) {
      for (var j = 0; j < level - i; j++) {
      Blank=Blank+" ";
      }
      for (j = 0; j < 2 * i + 1; j++) {
      Star=Star+"*";
      }
      console.log(Blank+Star);
      Star="";
      Blank="";
      }
  }
  function getLine(line) {
  return line;
  }
