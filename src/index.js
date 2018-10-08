module.exports = function check(str, bracketsConfig) {
	let brackets = '';
	brackets = brackets.concat(str).concat(bracketsConfig);
	brackets = brackets.replace(/,/g, "");

	function isCorrect(brackets) {
		const braketsVariety = "(){}[]123456";
		const stack = [];
		for (let i = 0; i < brackets.length; ++i) {
			let even = brackets[i];
			let lastBraket;
			if (braketsVariety.indexOf(even) != -1) {
				let index = braketsVariety.indexOf(even);
				if (index % 2 != 0) {
					if (!stack.length) {
						return false;
					}
					else {
						lastBraket = stack[stack.length - 1];
						lastBraket != braketsVariety[index - 1] ? false : stack.splice(-1, 1);
					}
				}
				else {
					stack.push(even);
				}
			}
			else {
				lastBraket = stack[stack.length - 1];
				lastBraket != even ? stack.push(even) : stack.splice(-1, 1);
			}
		}
		return !stack.length;
	}
	return isCorrect(brackets);
};
