/**
 * JavaScript ESLint Rules Examples
 * ===============================
 * This file demonstrates 10 important ESLint rules from @chronoverse-eslint/javascript
 * Each example shows both problematic code (❌) and recommended approach (✅)
 */

// =======================================
// EXAMPLE 1: ARRAY METHODS WITH RETURN
// =======================================

/** ❌ BAD: Missing return in array method callback */
const _badMap = [
	1,
	2,
	3,
].map(item => {
	/** This won't return anything - ESLint will catch this mistake */
	console.log(item * 2);
});

/** ✅ GOOD: Proper return in array method */
const goodMap = [
	1,
	2,
	3,
].map(item => item * 2);

// =======================================
// EXAMPLE 2: VARIABLE DECLARATIONS
// =======================================

/** ❌ BAD: Using var and let when not needed */
const _badVariables = function () {
	var oldStyle = 'avoid var'; // ESLint prefers const/let
	let unchanging = 'should be const'; // ESLint detects this isn't reassigned
	return { oldStyle, unchanging };
};

/** ✅ GOOD: Using const and let appropriately */
const goodVariables = function () {
	const immutable = 'cannot change';
	let mutable = 'can change';
	mutable = 'changed value';
	return { immutable, mutable };
};

// =======================================
// EXAMPLE 3: STRICT EQUALITY
// =======================================

/** ❌ BAD: Using loose equality (==) */
const _badEquality = function (value) {
	/** ESLint will warn about loose equality */
	if (value == 0) {
		return 'Equal with ==';
	}
	return 'Not equal';
};

/** ✅ GOOD: Using strict equality (===) */
const goodEquality = function (value) {
	if (value === 0) {
		return 'Equal with ===';
	}
	return 'Not equal';
};

// =======================================
// EXAMPLE 4: OBJECT SHORTHAND
// =======================================

/** ❌ BAD: Not using object shorthand */
const createBadObject = function (name, age) {
	/** ESLint will suggest using shorthand */
	return {
		name: name,
		age: age,
		greet: function () {
			return `Hello, ${name}!`;
		},
	};
};

/** ✅ GOOD: Using object shorthand */
const createGoodObject = function (name, age) {
	return {
		name,
		age,
		greet() {
			return `Hello, ${name}!`;
		},
	};
};

// =======================================
// EXAMPLE 5: TEMPLATE LITERALS
// =======================================

/** ❌ BAD: Using string concatenation */
const _badString = function (name, age) {
	/** ESLint prefers template literals */
	return 'Hello, ' + name + '! You are ' + age + ' years old.';
};

/** ✅ GOOD: Using template literals */
const goodString = function (name, age) {
	return `Hello, ${name}! You are ${age} years old.`;
};

// =======================================
// EXAMPLE 6: DESTRUCTURING
// =======================================

/** ❌ BAD: Accessing object properties directly */
const _processBadUser = function (user) {
	/** ESLint will suggest destructuring */
	const name = user.name;
	const email = user.email;
	return `${name} (${email})`;
};

/** ✅ GOOD: Using object destructuring */
const processGoodUser = function (user) {
	const { name, email } = user;
	return `${name} (${email})`;
};

// =======================================
// EXAMPLE 7: ARROW FUNCTIONS
// =======================================

/** ❌ BAD: Verbose arrow function with unnecessary braces */
const _badArrow = x => {
	/** ESLint prefers concise arrow functions */
	return x * 2;
};

/** ✅ GOOD: Concise arrow function */
const goodArrow = x => x * 2;

// =======================================
// EXAMPLE 8: CONDITIONALS AND BLOCKS
// =======================================

/** ❌ BAD: Missing curly braces in multi-line if */
const _badIf = function (condition) {
	/** ESLint warns because second line is outside the if block */
	if (condition) console.log('Inside if');
	console.log('Always runs');
	return condition;
};

/** ✅ GOOD: Proper curly braces for blocks */
const goodIf = function (condition) {
	if (condition) {
		console.log('Inside if');
	}
	console.log('Always runs');
	return condition;
};

// =======================================
// EXAMPLE 9: CALLBACKS AND RETURNS
// =======================================

/** ❌ BAD: Missing return in conditional callbacks */
const _badCallback = function (err, data, callback) {
	/** ESLint warns that code below will still execute */
	if (err) {
		callback(err);
	}
	console.log(data);
	callback(null, data);
};

/** ✅ GOOD: Using return with callbacks */
const goodCallback = function (err, data, callback) {
	if (err) {
		return callback(err);
	}
	console.log(data);
	return callback(null, data);
};

// =======================================
// EXAMPLE 10: DISALLOWED METHODS
// =======================================

/** ❌ BAD: Using eval, alert, debugger */
const _badDisallowed = function () {
	/** ESLint disallows these unsafe practices */
	/** eval('console.log("Danger!")'); // Commented to prevent real errors */
	/** alert('Bad practice!');         // Commented to prevent real errors */
	/** debugger;                      // Commented to prevent real errors */
	console.log('These would cause ESLint errors if uncommented');
};

/** ✅ GOOD: Using safer alternatives */
const goodDisallowed = function () {
	/** Use custom notification system */
	const notify = message => console.log(`Notification: ${message}`);
	notify('Safe practice!');

	/** Use proper error handling instead of debugger */
	try {
		const result = JSON.parse('{"valid": "json"}');
		return result;
	} catch (error) {
		console.error('Error occurred:', error.message);
		return null;
	}
};

/**  Export the good examples for use elsewhere */
export {
	goodMap,
	goodVariables,
	goodEquality,
	createGoodObject,
	goodString,
	processGoodUser,
	goodArrow,
	goodIf,
	goodCallback,
	goodDisallowed,
};
