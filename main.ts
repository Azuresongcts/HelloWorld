PyramidBuilding(level);
var level = 5;
var line = getLine(level);
var Star:string="";
var Blank:string="";
PyramidBuilding(line);
function PyramidBuilding(level) {
    for (var BlankCount = 0; BlankCount < level; BlankCount++) {
      for (var StarCount = 0; StarCount < level - BlankCount; StarCount++) {
      Blank=Blank+" ";
      }
      for (StarCount= 0; StarCount< 2 * BlankCount + 1; StarCount++) {
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