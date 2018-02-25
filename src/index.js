module.exports = function check(str, bracketsConfig) {
  // your solution
var brackets_str = '';
brackets_str = brackets_str.concat(str);
brackets_str = brackets_str.concat(bracketsConfig);

var brackets_str = brackets_str.replace(/,/g,"");

function isCorrect(brackets) {
	var br = "(){}[]123456";
	var st = [];
	for (var i = 0; i < brackets.length; ++i) {
	var ch = brackets[i];
	var last_br;
	if(br.indexOf(ch)!=-1){
	var ind = br.indexOf(ch);

	if (ind % 2 != 0) {
		if (!st.length) {
			return false;
		} 
		else {
			last_br = st[st.length-1];
			if (last_br != br[ind - 1]) {
				return false;
			} 
			else {
				st.splice(-1,1);
			}
		}
	} 
	else { 
		  st.push(ch);
		             }
	}	
	else{
		last_br = st[st.length-1];
	    if (last_br != ch) 
		{st.push(ch);} 
		else {st.splice(-1,1);}		
	}			
    }
	  return !st.length;
}		
	return isCorrect(brackets_str)
}
  

