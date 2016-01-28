// As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:

// all

// This function returns true only if the predicate supplied returns true for all the items in the array

// [1, 2, 3].all(isGreaterThanZero) => true
// [-1, 0, 2].all(isGreaterThanZero) => false
// none

// This function returns true only if the predicate supplied returns false for all the items in the array

// [-1, 2, 3].none(isLessThanZero) => false
// [-1, -2, -3].none(isGreaterThanZero) => true
// any

// This function returns true if at least one of the items in the array returns true for the predicate supplied

// [-1, 2, 3].any(isGreaterThanZero) => true
// [-1, -2, -3].any(isGreaterThanZero) => false
// You do not need to worry about the data supplied, it will be an array at all times.
Array.prototype.all = function(p) {
	// console.log('P: ' + p(-1));
	//console.log(p(this[0]));
	var trueCount = 0;
	for (var i = 0; i < this.length; i++) {
		// console.log('p(this[i]) ' + p(this[i]));
		if (p(this[i])) {
			trueCount++;
		}
	}
	if (trueCount === this.length) {
		return true;
	} else {
		return false;
	}

};
Array.prototype.none = function(p) {
	var trueCount = 0;
	for (var i = 0; i < this.length; i++) {
		// console.log('p(this[i]) ' + p(this[i]));
		if (!p(this[i])) {
			trueCount++;
		}
	}
	if (trueCount === this.length) {
		return true;
	} else {
		return false;
	}

};

Array.prototype.any = function(p) {
	var trueCount = 0;
	for (var i = 0; i < this.length; i++) {
		// console.log('p(this[i]) ' + p(this[i]));
		if (p(this[i])) {
			trueCount++;
		}
	}
	if (trueCount > 0) {
		return true;
	} else {
		return false;
	}

};

function isGreaterThanZero(num) {
	return num > 0;
}

function isLessThanZero(num) {
	return num < 0;
}

console.log([1, 2, 3].all(isGreaterThanZero));          // true
console.log([-1, 0, 2].all(isGreaterThanZero)) ;        // false

console.log([-1, 2, 3].none(isLessThanZero));           // false
console.log([-1, -2, -3].none(isGreaterThanZero));      // true

console.log([-1, 2, 3].any(isGreaterThanZero));         // true
console.log([-1, -2, -3].any(isGreaterThanZero));       // false


////////////////////////////////////////////////
Array.prototype.all = function (p) {
  return this.filter(p).length == this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length == 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};