(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



function _Coerce_decodeFrameThunk(valAndId) {
  var val = elm$core$Tuple$first(valAndId);
  var id = elm$core$Tuple$second(valAndId);
  return A2(elm$browser$Reader$TraceData$Thunk, id, val.a.thunk.func);
}




// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



function _Expando_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3(elm$browser$Debugger$Expando$Constructor, elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return elm$browser$Debugger$Expando$S('"' + _Expando_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return elm$browser$Debugger$Expando$S("'" + _Expando_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3(elm$browser$Debugger$Expando$Sequence, elm$browser$Debugger$Expando$ListSeq, true,
				A2(elm$core$List$map, _Expando_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3(elm$browser$Debugger$Expando$Sequence, elm$browser$Debugger$Expando$SetSeq, true,
				A3(elm$core$Set$foldr, _Expando_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2(elm$browser$Debugger$Expando$Dictionary, true,
				A3(elm$core$Dict$foldr, _Expando_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3(elm$browser$Debugger$Expando$Sequence, elm$browser$Debugger$Expando$ArraySeq, true,
				A3(elm$core$Array$foldr, _Expando_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Expando_init(value[i]), list);
			}
			return A3(elm$browser$Debugger$Expando$Constructor, char === 35 ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(tag), true, elm$core$List$reverse(list));
		}

		return elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3(elm$core$Dict$insert, i, _Expando_init(value[i]), dict);
		}
		return A2(elm$browser$Debugger$Expando$Record, true, dict);
	}

	return elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Expando_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Expando_init(value), list);
});

var _Expando_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Expando_init(key), _Expando_init(value)),
		list
	);
});

function _Expando_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}}


// _Reader_impl is the application specification for when the reader runs as a standalone application,
// i.e. when the mode (in Reader.elm) is ModeBrowse, and the reader applied to initialization code.
var _Reader_impl = function (debugData) {
  var programData = Object.assign({}, debugData, {traces: _Reader_contextJSON()});
  console.info("Program data:", programData);
  _Reader_initSourceMaps(debugData.source_map);
  return {
    init: function () {
      return A2(elm$core$Tuple$pair,
        A3(elm$browser$Reader$parseConfig, elm$browser$Reader$ModeBrowse, _Reader_sourceMapsElm, _Json_wrap(programData)),
        elm$core$Platform$Cmd$none);
    },
    update: elm$browser$Reader$update,
    view: elm$browser$Reader$view,
    subscriptions: function () { return elm$core$Platform$Sub$none; }
  };
};


var _Reader_mouseEventToMessage = function (eventValue) {
  var event = eventValue.a;
  var target = event && event.target;
  if (!target) {
    return elm$json$Json$Decode$fail("Ignore event");
  }
  var classes = target.className.split(" ");
  var i;
  var exprId = null;
  for (i = 0; i < classes.length; i += 1) {
    var match = /elm-reader-expr-([\d]+)/.exec(classes[i]);
    if (match) {
      exprId = +match[1];
    }
  }
  if (!exprId) {
    return elm$json$Json$Decode$fail("Ignore event");
  }
  var frameWrapper = target;
  var frameClassMatch = null;
outer:
  while (frameWrapper) {
    for (i = 0; i < frameWrapper.classList.length; i++) {
      frameClassMatch = /elm-reader-frame-([\d]+)/.exec(frameWrapper.classList[i]);
      if (frameClassMatch) {
        break outer;
      }
    }
    frameWrapper = frameWrapper.parentElement;
  }
  if (!frameClassMatch) {
    return elm$json$Json$Decode$fail("Ignore event");
  }
  var frameId = +frameClassMatch[1];
  if (event.shiftKey) {
    event.preventDefault();
  }
  var messageConstructor =
    (event.type === "mouseover"
      ? elm$browser$Reader$Msg$HoverExpr
      : event.shiftKey ? elm$browser$Reader$Msg$PinExpr : elm$browser$Reader$Msg$OpenExpr);
  return elm$json$Json$Decode$succeed(
    A2(messageConstructor,
      A2(elm$browser$Reader$TraceData$FrameId, frameId, _List_Nil),
      elm$browser$Reader$SourceMap$Ids$ExprId(exprId),
    )
  );
}


var _Reader_thunkExec = F3(function (func, thunk, childFrameId) {
  _Reader_contextDepth = 0;
  // this wrapper context "emulates" the parent frame from which `func` was called
  var wrapperContext = {
    $: 0,
    a: [],
    b: childFrameId.b, // take the cdr of childFrameId to get its parent
  };
  _Reader_context = wrapperContext;

  // set the UID of the thunk's frame, whether it is instrumented or not.
  _Reader_nextFrameId.specify(childFrameId.a);
  // TODO: is this `.a` reliable? Replace with Elm function call?
  // Same for `.b` above.

  // if the thunk's frame isn't instrumented, set up the non-instrumented-frame context to
  // capture traces within it
  if (!func.elmReaderInstrumented) {
    _Reader_context = {
      $: 0,
      a: [],
      b: _Reader_nextFrameId(_Reader_context.b),
    };
  }
  thunk(_Utils_Tuple0); // intentionally ignore the result, which was already recorded
  if (!func.elmReaderInstrumented) {
    wrapperContext.a = [{
      $: 0,
      a: _Reader_context.a,
      b: _Reader_context.b,
    }];
    _Reader_context = wrapperContext;
  }

  // get the frame information we want from _Reader_context
  var contextPrepared = _Reader_contextJSON();
  if (contextPrepared.length !== 1) {
    throw new Error("_Reader_thunkExec: _Reader_context got: "
      + contextPrepared.length
      + " frames");
  }
  return elm$browser$Reader$parseFrame(_Json_wrap(contextPrepared[0]));
});

// Reader.updateExec (see Reader.elm for type signature)
var _Reader_updateExec = F3(function (updateFn, msg, model) {
  _Reader_nextFrameId.reset();
  _Reader_contextDepth = 0;
  _Reader_context = {
    $: 0,
    a: [],
    b: _Reader_nextFrameId(),
  };
  var result = A2(updateFn, msg, model);
  console.log("Result of updateFn(", msg, ", ", model, "):\n    ", result);
  var newUserModel = elm$core$Tuple$first(result);
  if (!_Reader_sourceMapsElm) {
    console.error("_Reader_sourceMapsElm uninitialized.");
  }
  var debugMetadata = {
    traces: _Reader_contextJSON(),
  };
  //FIXME console.log("debugMetadata: ", debugMetadata);
  var readerModel = A3(elm$browser$Reader$parseConfig, elm$browser$Reader$ModeDebug, _Reader_sourceMapsElm, _Json_wrap(debugMetadata));
  return A2(elm$core$Tuple$pair, newUserModel, readerModel);
});

var _Reader_sourceMaps = null;
var _Reader_sourceMapsElm = null;
function _Reader_initSourceMaps(srcMaps) {
  console.log("initializing source maps to: ", srcMaps);
  _Reader_sourceMaps = srcMaps;
  var maybeSrcMaps = elm$browser$Reader$parseSourceMap(_Json_wrap(_Reader_sourceMaps));
  if (maybeSrcMaps.$ !== 'Ok') {
    console.error("failed to parse elm source maps! -- ", maybeSrcMaps);
  } else {
    _Reader_sourceMapsElm = maybeSrcMaps.a;
  }
}

/*
Types:
type context
  = 0 (a: Array of frames, runtimeId)
  | 1 (c: object representing map from expr IDs to exprs, runtimeId)
  | 2 (d: frame resulting from call, runtimeId)
  | 3 (e: function returning the frame, f: the runtime id of the child frame)

type frame
  = 0 (a: Array of frames, b: runtime ID of frame)
  | 1 (f: ID of source map frame, c, b)
  | 2 (g: id of the frame, e: function returning the frame's trace)

type expr = { h: value of expression, d: frame that returned it }
*/

var _Reader_nextFrameId = (function () {
  var nextUid = 0;
  var nextIdForced = -1;

  // Construct a linked list as each stack frame's ID,
  // with the first element being that frame's unique
  // integer ID.
  var nextFrameId = function (parent) {
    var uid;
    if (nextIdForced !== -1) {
      uid = nextIdForced;
      nextIdForced = -1;
    } else {
      uid = nextUid;
      nextUid += 1
    }
    return _List_Cons(uid, parent || _List_Nil);
  };
  nextFrameId.reset = function () {
    nextUid = 0;
  };
  nextFrameId.specify = function (idnum) {
    nextIdForced = idnum;
  };
  return nextFrameId;
}());

var _Reader_context = {
  $: 0,
  a: [],
  b: _Reader_nextFrameId(),
};

var _Reader_contextDepth = 0;

var _Reader_numFramesRecorded = 0;

var _Reader_recordExpr = F2(function (exprId, val) {
  if (_Reader_context.$ === 3 || (_Reader_context.c && exprId in _Reader_context.c)) {
    // TODO: remove the latter condition, and instead
    // change the instrumentation to stop executing recordExpr on values
    // in let bindings which already got recordCall'd (this extra recordExpr
    // overwrites the d with null).
    return val;
  }
  if (_Reader_context.$ === 1) {
    _Reader_context.c[exprId] = {
      h: val,
      d: null,
    };
    return val;
  }
  //console.warn(
  //  'Elm Reader: Someone tried to record an expression from a non-instrumented context.',
  //  'expression id: ', exprId,
  //  'value: ', val
  //);
  return val;
});

var _Reader_log = F2(function (msg, val) {
  // Differs from built-in log because it puts the actual JS value to the console,
  // enabling in-console inspection.
  console.log(msg, val);
  return val;
});

var _Reader_recordCall = F3(function (exprId, func, body) {
  if (!window.recordCallNumInvocations) {
    window.recordCallNumInvocations = 1;
  } else {
    window.recordCallNumInvocations++;
  }
  if (_Reader_context.$ == 3) {
    return body(_Utils_Tuple0);
  }
  if (_Reader_context.$ !== 1) {
    var result = body(_Utils_Tuple0);
    console.warn(
      'Elm Reader: Someone tried to record a function call from a non-instrumented context.',
      'expression id: ', exprId,
      'value: ', result
    );
    return result;
  }

  if (!func.elmReaderInstrumented) {
    var newContext;
    if (_Reader_contextDepth > 0) {
      var childFrameId = _Reader_nextFrameId(_Reader_context.b);
      newContext = {
        $: 3,
        f: childFrameId,
        e: function () {
          return A3(_Reader_thunkExec, func, body, childFrameId);
        },
      };
    } else {
      newContext = {
        $: 0,
        a: [],
        b: _Reader_nextFrameId(_Reader_context.b),
      };
    }

    var oldContext = _Reader_context;
    _Reader_context = newContext;
    _Reader_contextDepth += 1;
    var framesRecordedBeforeCall = _Reader_numFramesRecorded;
    var result = body(_Utils_Tuple0);
    _Reader_context = oldContext;
    _Reader_contextDepth -= 1;

    var childFrame = null;
    if (_Reader_numFramesRecorded > framesRecordedBeforeCall) {
      // Check that at least one frame was recorded, so that
      // partial applications don't get recorded as calls.
      if (newContext.$ === 3) {
        childFrame = {
          $: 2,
          g: newContext.f,
          e: newContext.e,
        };
      } else {
        childFrame = {
          $: 0,
          a: newContext.a,
          b: newContext.b,
        };
      }
    }

    _Reader_context.c[exprId] = {
      h: result,
      d: childFrame,
    };

    return result;
  }

  var newContext;
  if (_Reader_contextDepth > 0) {
    var childFrameId = _Reader_nextFrameId(_Reader_context.b);
    newContext = {
      $: 3,
      f: childFrameId,
      e: function () {
        return A3(_Reader_thunkExec, func, body, childFrameId);
      },
    };
  } else {
    newContext = {
      $: 2,
      d: null,
      b: _Reader_nextFrameId(_Reader_context.b),
    };
  }

  var oldContext = _Reader_context;
  _Reader_context = newContext;
  _Reader_contextDepth++;
  var framesRecordedBeforeCall = _Reader_numFramesRecorded;
  var result = body(_Utils_Tuple0);
  _Reader_context = oldContext;
  _Reader_contextDepth--;

  var childFrame = newContext.d || null;
  if (newContext.$ === 3) {
    // Check that at least one frame was recorded, so that
    // partial applications don't get recorded as calls.
    if (_Reader_numFramesRecorded > framesRecordedBeforeCall) {
      childFrame = {
        $: 2,
        g: newContext.f,
        e: newContext.e,
      };
    }
  }
  _Reader_context.c[exprId] = {
    h: result,
    d: childFrame,
  };

  return result;
});

var _Reader_recordFrame = F2(function (frameIdRaw, body) {
  _Reader_numFramesRecorded += 1;
  if (_Reader_context.$ === 3) {
    return body(_Utils_Tuple0);
  }

  var newContext = {
    $: 1,
    c: {},
    b:
      (_Reader_context.$ === 2
        ? _Reader_context.b
        : _Reader_nextFrameId(_Reader_context.b)),
  };

  var oldContext = _Reader_context;
  _Reader_context = newContext;
  var result = body(_Utils_Tuple0);
  _Reader_context = oldContext;

  var newFrame = {
    $: 1,
    f: JSON.parse(frameIdRaw),
    c: newContext.c,
    b: newContext.b,
  };

  if (_Reader_context.$ === 2) {
    _Reader_context.d = newFrame;
  }
  else if (_Reader_context.$ === 0) {
    _Reader_context.a.push(newFrame);
  }

  return result;
});

var _Reader_markInstrumented = function (func) {
  func.elmReaderInstrumented = true;
  return func;
};

var _Reader_seq = F2(function (sideEffect, val) {
  return val;
});

var _Reader_contextJSON = function () {
  return _Reader_frameToJSON(_Reader_context).child_frames;
};

var _Reader_runtimeIdToJson = function (runtimeId) {
  var uid = runtimeId.a;
  var idPathList = elm$core$List$reverse(runtimeId);
  var ids = elm$core$Tuple$first(
    A2(_JsArray_initializeFromList, elm$core$List$length(idPathList) - 1, idPathList)
  );
  return {
    uid: uid,
    id_path: ids,
  };
};

function _Reader_frameToJSON(frame) {
  if (frame.$ === 1) {
    var readableExprs = [];
    Object.keys(frame.c).forEach(function (id) {
      var expr = frame.c[id];
      var val =
        (typeof expr.h === "function"
          ? { "#<function>": {} }
          : expr.h);
      readableExprs.push({
        id: +id,
        expr: {
          val: val,
          child_frame: expr.d && _Reader_frameToJSON(expr.d),
        }
      });
    });
    return {
      tag: 'Instrumented',
      is_thunk: false,
      source_map_id: frame.f,
      runtime_id: _Reader_runtimeIdToJson(frame.b),
      exprs: readableExprs
    };
  }
  if (frame.$ === 0) {
    console.log("Serializing frame -- ", frame, " -- with runtime ID: ", frame.b);
    return {
      tag: 'NonInstrumented',
      is_thunk: false,
      child_frames: frame.a.map(_Reader_frameToJSON),
      runtime_id: _Reader_runtimeIdToJson(frame.b),
    };
  }
  // otherwise, frame.$ is 2
  return {
    tag: 'Thunk',
    is_thunk: true,
    thunk: { func: frame.e },
    runtime_id: _Reader_runtimeIdToJson(frame.g),
  };
};

// Tools for debugging the debugger from the JavaScript console

// Need to export as global to be available from the console
window.elmReaderRoot = function () {
  return _Reader_frameToJSON(_Reader_context);
};



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	//FIXME console.log("debug metadata:", debugMetadata);
	_Reader_initSourceMaps(debugMetadata.source_map);
	if (debugMetadata.reader) {
		// Swap out the user's main for our own.
		impl = _Reader_impl(debugMetadata);
	}
	var update = F2(function (a, b) {
		//FIXME console.log("MODEL:", b);
		return impl.update(a)(b);
	});
	return _Platform_initialize(
		flagDecoder,
		args,
		A3(elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		elm$browser$Debugger$Main$wrapUpdate(update),
		elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, elm$browser$Debugger$Main$UserMsg, view(elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				if (!model.popout.b)
				{
					var cornerNext = elm$browser$Debugger$Main$cornerView(model);
					var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
					cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
					cornerCurr = cornerNext;
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	consoel.log("in _Debugger_document; debugMetadata:", debugMetadata);
	return _Platform_initialize(
		flagDecoder,
		args,
		A3(elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		elm$browser$Debugger$Main$wrapUpdate(impl.update),
		elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp(elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2(elm$core$List$map, _VirtualDom_map(elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons(elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var debuggerWindow;
    if (document.getElementById("debugger-window")) {
		debuggerWindow = document.getElementById("debugger-window").contentWindow;
	} else {
		var w = 900, h = 360, x = screen.width - w, y = screen.height - h;
		debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	}
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.which === 38 && (popout.a(elm$browser$Debugger$Main$Up), event.preventDefault());
		event.which === 40 && (popout.a(elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a(elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});
	function close() {
		popout.b = undefined;
		popout.a(elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}



// UPLOAD


function _Debugger_upload()
{
	return _Scheduler_binding(function(callback)
	{
		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			document.body.removeChild(element);
		});
		document.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Expando_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Expando_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	if (isScroll) return;
	var allow = true;
	for (var node = event.target; node; node = node.parentNode)
	{
		if (node.id === "elm-container") {
			allow = false;
		}
		// if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		// {
		// 	return;
		// }
	}
	if (allow) return;

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');





// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Main$Alive = {$: 'Alive'};
var author$project$Main$Dead = {$: 'Dead'};
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$branchFactor = 32;
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Elm$JsArray$slice = _JsArray_slice;
var elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = elm$core$Elm$JsArray$length(tail);
		var notAppended = (elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3(elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Elm$JsArray$push = _JsArray_push;
var elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					elm$core$Elm$JsArray$push,
					elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, elm$core$Elm$JsArray$empty));
				return A2(elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, subTree));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(
						elm$core$Array$insertTailInTree,
						shift - elm$core$Array$shiftStep,
						index,
						tail,
						elm$core$Elm$JsArray$singleton(value)));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var originalTailLen = elm$core$Elm$JsArray$length(tail);
		var newTailLen = elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + elm$core$Array$shiftStep;
				var newTree = A4(
					elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					elm$core$Elm$JsArray$singleton(
						elm$core$Array$SubTree(tree)));
				return A4(elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4(elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4(elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = elm$core$Elm$JsArray$length(toAppend);
		var notAppended = (elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2(elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3(elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2(elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var elm$core$Array$builderFromArray = function (_n0) {
	var len = _n0.a;
	var tree = _n0.c;
	var tail = _n0.d;
	var helper = F2(
		function (node, acc) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2(elm$core$List$cons, node, acc);
			}
		});
	return {
		nodeList: A3(elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		nodeListSize: (len / elm$core$Array$branchFactor) | 0,
		tail: tail
	};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$True = {$: 'True'};
var elm$core$Basics$le = _Utils_le;
var elm$core$Array$append = F2(
	function (a, _n0) {
		var aTail = a.d;
		var bLen = _n0.a;
		var bTree = _n0.c;
		var bTail = _n0.d;
		if (_Utils_cmp(bLen, elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3(elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2(elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				elm$core$Array$appendHelpTree,
				bTail,
				A3(elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3(elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2(elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				elm$core$Array$builderToArray,
				true,
				A2(
					elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						elm$core$Elm$JsArray$foldl,
						foldHelper,
						elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var elm$browser$Reader$ModeBrowse = {$: 'ModeBrowse'};
var elm$browser$Reader$ModeDebug = {$: 'ModeDebug'};
var elm$browser$Reader$ProgramDataError = function (a) {
	return {$: 'ProgramDataError', a: a};
};
var elm$browser$Reader$ProgramDataReceived = function (a) {
	return {$: 'ProgramDataReceived', a: a};
};
var elm$browser$Reader$TraceData$TraceData = function (a) {
	return {$: 'TraceData', a: a};
};
var elm$browser$Reader$Dict$Dict = function (a) {
	return {$: 'Dict', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$browser$Reader$Dict$fromList = elm$browser$Reader$Dict$Dict;
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Basics$False = {$: 'False'};
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$browser$Reader$Dict$decode = F2(
	function (_n0, _n1) {
		var keyName = _n0.a;
		var decodeKey = _n0.b;
		var valName = _n1.a;
		var decodeVal = _n1.b;
		var decodeEntry = A3(
			elm$json$Json$Decode$map2,
			elm$core$Tuple$pair,
			A2(elm$json$Json$Decode$field, keyName, decodeKey),
			A2(elm$json$Json$Decode$field, valName, decodeVal));
		return A2(
			elm$json$Json$Decode$map,
			elm$browser$Reader$Dict$fromList,
			elm$json$Json$Decode$list(decodeEntry));
	});
var elm$browser$Reader$Dict$toList = function (_n0) {
	var lst = _n0.a;
	return lst;
};
var elm$browser$Reader$SourceMap$ExprDict$ExprDict = function (a) {
	return {$: 'ExprDict', a: a};
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$browser$Reader$SourceMap$ExprDict$fromList = function (lst) {
	return elm$browser$Reader$SourceMap$ExprDict$ExprDict(
		elm$core$Dict$fromList(
			A2(
				elm$core$List$map,
				function (_n0) {
					var i = _n0.a.a;
					var val = _n0.b;
					return _Utils_Tuple2(i, val);
				},
				lst)));
};
var elm$browser$Reader$SourceMap$Ids$ExprId = function (a) {
	return {$: 'ExprId', a: a};
};
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$browser$Reader$SourceMap$Ids$decodeExprId = A2(elm$json$Json$Decode$map, elm$browser$Reader$SourceMap$Ids$ExprId, elm$json$Json$Decode$int);
var elm$browser$Reader$SourceMap$Ids$FrameId = F3(
	function (mod, def, frameIndex) {
		return {def: def, frameIndex: frameIndex, mod: mod};
	});
var elm$browser$Reader$SourceMap$Ids$ModuleId = F2(
	function (_package, mod) {
		return {mod: mod, _package: _package};
	});
var elm$browser$Reader$SourceMap$Ids$PackageId = function (a) {
	return {$: 'PackageId', a: a};
};
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$browser$Reader$SourceMap$Ids$decodePackageId = A2(elm$json$Json$Decode$map, elm$browser$Reader$SourceMap$Ids$PackageId, elm$json$Json$Decode$string);
var elm$browser$Reader$SourceMap$Ids$decodeModuleId = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Reader$SourceMap$Ids$ModuleId,
	A2(elm$json$Json$Decode$field, 'package', elm$browser$Reader$SourceMap$Ids$decodePackageId),
	A2(elm$json$Json$Decode$field, 'module', elm$json$Json$Decode$string));
var elm$json$Json$Decode$map3 = _Json_map3;
var elm$browser$Reader$SourceMap$Ids$decodeFrameId = A4(
	elm$json$Json$Decode$map3,
	elm$browser$Reader$SourceMap$Ids$FrameId,
	A2(elm$json$Json$Decode$field, 'module', elm$browser$Reader$SourceMap$Ids$decodeModuleId),
	A2(elm$json$Json$Decode$field, 'def', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'frame_index', elm$json$Json$Decode$int));
var elm$browser$Reader$TraceData$Evaluated = function (a) {
	return {$: 'Evaluated', a: a};
};
var elm$browser$Reader$TraceData$Expr = function (a) {
	return {$: 'Expr', a: a};
};
var elm$browser$Reader$TraceData$Instrumented = function (a) {
	return {$: 'Instrumented', a: a};
};
var elm$browser$Reader$TraceData$InstrumentedFrameData = F3(
	function (sourceId, runtimeId, exprs) {
		return {exprs: exprs, runtimeId: runtimeId, sourceId: sourceId};
	});
var elm$browser$Reader$TraceData$NonInstrumented = F2(
	function (a, b) {
		return {$: 'NonInstrumented', a: a, b: b};
	});
var elm$browser$Reader$TraceData$FrameId = F2(
	function (a, b) {
		return {$: 'FrameId', a: a, b: b};
	});
var elm$browser$Reader$TraceData$decodeFrameId = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Reader$TraceData$FrameId,
	A2(elm$json$Json$Decode$field, 'uid', elm$json$Json$Decode$int),
	A2(
		elm$json$Json$Decode$field,
		'id_path',
		elm$json$Json$Decode$list(elm$json$Json$Decode$int)));
var elm$browser$Reader$TraceData$Value$Value = function (a) {
	return {$: 'Value', a: a};
};
var elm$json$Json$Decode$value = _Json_decodeValue;
var elm$browser$Reader$TraceData$Value$decode = A2(elm$json$Json$Decode$map, elm$browser$Reader$TraceData$Value$Value, elm$json$Json$Decode$value);
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		elm$json$Json$Decode$andThen,
		thunk,
		elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$nullable = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder)
			]));
};
var elm$browser$Reader$TraceData$Thunk = F2(
	function (a, b) {
		return {$: 'Thunk', a: a, b: b};
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
function elm$browser$Reader$TraceData$cyclic$decodeExpr() {
	return A3(
		elm$json$Json$Decode$map2,
		F2(
			function (val, frame) {
				return elm$browser$Reader$TraceData$Expr(
					{childFrame: frame, value: val});
			}),
		A2(
			elm$json$Json$Decode$field,
			'val',
			elm$json$Json$Decode$nullable(elm$browser$Reader$TraceData$Value$decode)),
		A2(
			elm$json$Json$Decode$field,
			'child_frame',
			elm$json$Json$Decode$nullable(
				elm$browser$Reader$TraceData$cyclic$decodeThunk())));
}
function elm$browser$Reader$TraceData$cyclic$decodeThunk() {
	var unevaluated = A3(
		elm$json$Json$Decode$map2,
		F2(
			function (_n1, a) {
				return a;
			}),
		A2(elm$json$Json$Decode$field, 'is_thunk', elm$json$Json$Decode$bool),
		A2(
			elm$json$Json$Decode$map,
			_Coerce_decodeFrameThunk,
			A3(
				elm$json$Json$Decode$map2,
				elm$core$Tuple$pair,
				elm$json$Json$Decode$value,
				A2(elm$json$Json$Decode$field, 'runtime_id', elm$browser$Reader$TraceData$decodeFrameId))));
	var evaluated = A2(
		elm$json$Json$Decode$map,
		elm$browser$Reader$TraceData$Evaluated,
		elm$browser$Reader$TraceData$cyclic$decodeFrame());
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[evaluated, unevaluated]));
}
function elm$browser$Reader$TraceData$cyclic$decodeFrame() {
	var decExpr = elm$json$Json$Decode$lazy(
		function (_n0) {
			return elm$browser$Reader$TraceData$cyclic$decodeExpr();
		});
	var decodeExprDict = A2(
		elm$json$Json$Decode$map,
		elm$browser$Reader$SourceMap$ExprDict$fromList,
		A2(
			elm$json$Json$Decode$map,
			elm$browser$Reader$Dict$toList,
			A2(
				elm$browser$Reader$Dict$decode,
				_Utils_Tuple2('id', elm$browser$Reader$SourceMap$Ids$decodeExprId),
				_Utils_Tuple2('expr', decExpr))));
	var decodeInstrumentedFrameData = A4(
		elm$json$Json$Decode$map3,
		F3(
			function (sid, rid, exprs) {
				return A3(elm$browser$Reader$TraceData$InstrumentedFrameData, sid, rid, exprs);
			}),
		A2(elm$json$Json$Decode$field, 'source_map_id', elm$browser$Reader$SourceMap$Ids$decodeFrameId),
		A2(elm$json$Json$Decode$field, 'runtime_id', elm$browser$Reader$TraceData$decodeFrameId),
		A2(elm$json$Json$Decode$field, 'exprs', decodeExprDict));
	var decodeInstrumented = A2(elm$json$Json$Decode$map, elm$browser$Reader$TraceData$Instrumented, decodeInstrumentedFrameData);
	var decodeNonInstrumented = A3(
		elm$json$Json$Decode$map2,
		elm$browser$Reader$TraceData$NonInstrumented,
		A2(elm$json$Json$Decode$field, 'runtime_id', elm$browser$Reader$TraceData$decodeFrameId),
		A2(
			elm$json$Json$Decode$field,
			'child_frames',
			elm$json$Json$Decode$list(decodeInstrumentedFrameData)));
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[decodeNonInstrumented, decodeInstrumented]));
}
try {
	var elm$browser$Reader$TraceData$decodeExpr = elm$browser$Reader$TraceData$cyclic$decodeExpr();
	elm$browser$Reader$TraceData$cyclic$decodeExpr = function () {
		return elm$browser$Reader$TraceData$decodeExpr;
	};
	var elm$browser$Reader$TraceData$decodeThunk = elm$browser$Reader$TraceData$cyclic$decodeThunk();
	elm$browser$Reader$TraceData$cyclic$decodeThunk = function () {
		return elm$browser$Reader$TraceData$decodeThunk;
	};
	var elm$browser$Reader$TraceData$decodeFrame = elm$browser$Reader$TraceData$cyclic$decodeFrame();
	elm$browser$Reader$TraceData$cyclic$decodeFrame = function () {
		return elm$browser$Reader$TraceData$decodeFrame;
	};
} catch ($) {
throw 'Some top-level definitions from `Reader.TraceData` are causing infinite recursion:\n\n  ┌─────┐\n  │    decodeExpr\n  │     ↓\n  │    decodeThunk\n  │     ↓\n  │    decodeFrame\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var elm$browser$Reader$TraceData$decode = A2(
	elm$json$Json$Decode$map,
	elm$browser$Reader$TraceData$TraceData,
	elm$json$Json$Decode$list(elm$browser$Reader$TraceData$decodeFrame));
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$json$Json$Decode$decodeValue = _Json_run;
var elm$browser$Reader$parseConfig = F3(
	function (mode, srcMap, data) {
		var decode = A2(
			elm$json$Json$Decode$map,
			function (traces) {
				return {sources: srcMap, traces: traces};
			},
			A2(elm$json$Json$Decode$field, 'traces', elm$browser$Reader$TraceData$decode));
		var _n0 = A2(elm$json$Json$Decode$decodeValue, decode, data);
		if (_n0.$ === 'Err') {
			var e = _n0.a;
			return elm$browser$Reader$ProgramDataError(e);
		} else {
			var sources = _n0.a.sources;
			var traces = _n0.a.traces;
			var tracesOutline = function () {
				var _n1 = traces;
				var topLevelFrames = _n1.a;
				var instrumentedFrameTraces = A2(
					elm$core$List$filterMap,
					function (f) {
						if (f.$ === 'Instrumented') {
							var frameData = f.a;
							return elm$core$Maybe$Just(frameData);
						} else {
							return elm$core$Maybe$Nothing;
						}
					},
					topLevelFrames);
				return {
					numNoninstrumented: elm$core$List$length(topLevelFrames) - elm$core$List$length(instrumentedFrameTraces),
					topLevelInstrumented: instrumentedFrameTraces
				};
			}();
			return elm$browser$Reader$ProgramDataReceived(
				{mode: mode, sources: sources, stackUI: elm$core$Maybe$Nothing, tracesOutline: tracesOutline});
		}
	});
var elm$core$Debug$todo = _Debug_todo;
var elm$browser$Reader$parseFrame = function (data) {
	var _n0 = A2(elm$json$Json$Decode$decodeValue, elm$browser$Reader$TraceData$decodeFrame, data);
	if (_n0.$ === 'Err') {
		var e = _n0.a;
		return _Debug_todo(
			'Reader',
			{
				start: {line: 97, column: 13},
				end: {line: 97, column: 23}
			})(
			'Reader.parseFrame: failed to decode frame trace: ' + elm$json$Json$Decode$errorToString(e));
	} else {
		var frameTrace = _n0.a;
		return frameTrace;
	}
};
var elm$browser$Reader$SourceMap$SourceMap = F2(
	function (frames, sources) {
		return {frames: frames, sources: sources};
	});
var elm$browser$Reader$SourceMap$Frame = F3(
	function (region, exprRegions, exprNames) {
		return {exprNames: exprNames, exprRegions: exprRegions, region: region};
	});
var elm$browser$Reader$SourceMap$Region = F3(
	function (mod, start, end) {
		return {end: end, mod: mod, start: start};
	});
var elm$browser$Reader$SourceMap$Position = F2(
	function (line, col) {
		return {col: col, line: line};
	});
var elm$browser$Reader$SourceMap$decodePosition = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Reader$SourceMap$Position,
	A2(elm$json$Json$Decode$field, 'line', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'column', elm$json$Json$Decode$int));
var elm$browser$Reader$SourceMap$decodeRegion = A4(
	elm$json$Json$Decode$map3,
	elm$browser$Reader$SourceMap$Region,
	A2(elm$json$Json$Decode$field, 'module', elm$browser$Reader$SourceMap$Ids$decodeModuleId),
	A2(elm$json$Json$Decode$field, 'start', elm$browser$Reader$SourceMap$decodePosition),
	A2(elm$json$Json$Decode$field, 'end', elm$browser$Reader$SourceMap$decodePosition));
var elm$browser$Reader$SourceMap$decodeExprRegions = function () {
	var decodeEntry = A3(
		elm$json$Json$Decode$map2,
		elm$core$Tuple$pair,
		A2(
			elm$json$Json$Decode$field,
			'id',
			A2(elm$json$Json$Decode$map, elm$browser$Reader$SourceMap$Ids$ExprId, elm$json$Json$Decode$int)),
		A2(
			elm$json$Json$Decode$field,
			'regions',
			elm$json$Json$Decode$list(elm$browser$Reader$SourceMap$decodeRegion)));
	return A2(
		elm$json$Json$Decode$map,
		elm$browser$Reader$SourceMap$ExprDict$fromList,
		elm$json$Json$Decode$list(decodeEntry));
}();
var elm$browser$Reader$SourceMap$decodeFrame = function () {
	var decodeExprName = A3(
		elm$json$Json$Decode$map2,
		elm$core$Tuple$pair,
		A2(elm$json$Json$Decode$field, 'module', elm$browser$Reader$SourceMap$Ids$decodeModuleId),
		A2(elm$json$Json$Decode$field, 'name', elm$json$Json$Decode$string));
	return A4(
		elm$json$Json$Decode$map3,
		elm$browser$Reader$SourceMap$Frame,
		A2(elm$json$Json$Decode$field, 'region', elm$browser$Reader$SourceMap$decodeRegion),
		A2(elm$json$Json$Decode$field, 'expr_regions', elm$browser$Reader$SourceMap$decodeExprRegions),
		A2(
			elm$json$Json$Decode$field,
			'expr_names',
			A2(
				elm$browser$Reader$Dict$decode,
				_Utils_Tuple2('id', elm$browser$Reader$SourceMap$Ids$decodeExprId),
				_Utils_Tuple2('qualified_name', decodeExprName))));
}();
var elm$browser$Reader$SourceMap$decode = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Reader$SourceMap$SourceMap,
	A2(
		elm$json$Json$Decode$field,
		'frames',
		A2(
			elm$browser$Reader$Dict$decode,
			_Utils_Tuple2('id', elm$browser$Reader$SourceMap$Ids$decodeFrameId),
			_Utils_Tuple2('frame', elm$browser$Reader$SourceMap$decodeFrame))),
	A2(
		elm$json$Json$Decode$field,
		'sources',
		A2(
			elm$browser$Reader$Dict$decode,
			_Utils_Tuple2('module', elm$browser$Reader$SourceMap$Ids$decodeModuleId),
			_Utils_Tuple2('source', elm$json$Json$Decode$string))));
var elm$browser$Reader$parseSourceMap = elm$json$Json$Decode$decodeValue(elm$browser$Reader$SourceMap$decode);
var elm$browser$Reader$map1_3 = F4(
	function (f, maybeA, b, c) {
		if (maybeA.$ === 'Just') {
			var a = maybeA.a;
			return elm$core$Maybe$Just(
				A3(f, a, b, c));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$browser$Reader$map1_4 = F5(
	function (f, maybeA, b, c, d) {
		if (maybeA.$ === 'Just') {
			var a = maybeA.a;
			return elm$core$Maybe$Just(
				A4(f, a, b, c, d));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$browser$Reader$Dict$lookupPairs = F2(
	function (targetKey, pairs) {
		lookupPairs:
		while (true) {
			if (!pairs.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var _n1 = pairs.a;
				var k = _n1.a;
				var v = _n1.b;
				var rest = pairs.b;
				if (_Utils_eq(k, targetKey)) {
					return elm$core$Maybe$Just(v);
				} else {
					var $temp$targetKey = targetKey,
						$temp$pairs = rest;
					targetKey = $temp$targetKey;
					pairs = $temp$pairs;
					continue lookupPairs;
				}
			}
		}
	});
var elm$browser$Reader$Dict$get = F2(
	function (k, _n0) {
		var pairs = _n0.a;
		return A2(elm$browser$Reader$Dict$lookupPairs, k, pairs);
	});
var elm$browser$Reader$SourceMap$getFrame = F2(
	function (frameId, _n0) {
		var frames = _n0.frames;
		return A2(elm$browser$Reader$Dict$get, frameId, frames);
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$browser$Reader$SourceMap$getFrameHeight = F2(
	function (id, sourceMap) {
		return A2(
			elm$core$Maybe$map,
			function (_n0) {
				var region = _n0.region;
				return (region.end.line - region.start.line) + 1;
			},
			A2(elm$browser$Reader$SourceMap$getFrame, id, sourceMap));
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2(elm$core$Dict$map, func, left),
				A2(elm$core$Dict$map, func, right));
		}
	});
var elm$browser$Reader$SourceMap$ExprDict$map = F2(
	function (func, _n0) {
		var dict = _n0.a;
		return elm$browser$Reader$SourceMap$ExprDict$ExprDict(
			A2(
				elm$core$Dict$map,
				A2(elm$core$Basics$composeR, elm$browser$Reader$SourceMap$Ids$ExprId, func),
				dict));
	});
var elm$browser$Reader$SourceMap$ExprDict$empty = elm$browser$Reader$SourceMap$ExprDict$ExprDict(elm$core$Dict$empty);
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$browser$Reader$SourceMap$ExprDict$get = F2(
	function (_n0, _n1) {
		var i = _n0.a;
		var dict = _n1.a;
		return A2(elm$core$Dict$get, i, dict);
	});
var elm$browser$Reader$SourceMap$ExprDict$keys = function (_n0) {
	var dict = _n0.a;
	return A2(
		elm$core$List$map,
		elm$browser$Reader$SourceMap$Ids$ExprId,
		elm$core$Dict$keys(dict));
};
var elm$browser$Reader$SourceMap$ExprDict$toList = function (_n0) {
	var dict = _n0.a;
	return A2(
		elm$core$List$map,
		function (_n1) {
			var i = _n1.a;
			var val = _n1.b;
			return _Utils_Tuple2(
				elm$browser$Reader$SourceMap$Ids$ExprId(i),
				val);
		},
		elm$core$Dict$toList(dict));
};
var elm$browser$Reader$TraceData$exprChildFrame = function (_n0) {
	var childFrame = _n0.a.childFrame;
	return childFrame;
};
var elm$browser$Reader$TraceData$exprValue = function (_n0) {
	var value = _n0.a.value;
	return value;
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$browser$Reader$StackUI$exprsFromTrace = F2(
	function (srcMap, frame) {
		var _n0 = A2(elm$browser$Reader$SourceMap$getFrame, frame.sourceId, srcMap);
		if (_n0.$ === 'Nothing') {
			return _Utils_Tuple2(elm$browser$Reader$SourceMap$ExprDict$empty, elm$browser$Reader$SourceMap$ExprDict$empty);
		} else {
			var sourceFrame = _n0.a;
			var frameRegions = sourceFrame.exprRegions;
			var exprStartLine = function (exprId) {
				return A2(
					elm$core$Maybe$map,
					elm$core$Tuple$first,
					A2(
						elm$core$Maybe$andThen,
						A2(
							elm$core$Basics$composeR,
							elm$core$List$map(
								function (r) {
									return _Utils_Tuple2(r.start.line, r.start.col);
								}),
							elm$core$List$minimum),
						A2(elm$browser$Reader$SourceMap$ExprDict$get, exprId, frameRegions)));
			};
			var liveExprs = elm$browser$Reader$SourceMap$ExprDict$fromList(
				A2(
					elm$core$List$filterMap,
					function (_n2) {
						var exprId = _n2.a;
						var expr = _n2.b;
						var _n3 = _Utils_Tuple2(
							elm$browser$Reader$TraceData$exprValue(expr),
							exprStartLine(exprId));
						if ((_n3.a.$ === 'Just') && (_n3.b.$ === 'Just')) {
							var value = _n3.a.a;
							var line = _n3.b.a;
							return elm$core$Maybe$Just(
								_Utils_Tuple2(
									exprId,
									{
										childFrame: elm$browser$Reader$TraceData$exprChildFrame(expr),
										line: line - sourceFrame.region.start.line,
										model: elm$core$Maybe$Nothing,
										value: value
									}));
						} else {
							return elm$core$Maybe$Nothing;
						}
					},
					elm$browser$Reader$SourceMap$ExprDict$toList(frame.exprs)));
			var deadExprs = elm$browser$Reader$SourceMap$ExprDict$fromList(
				A2(
					elm$core$List$filterMap,
					function (exprId) {
						var _n1 = A2(
							elm$core$Maybe$map,
							elm$browser$Reader$TraceData$exprValue,
							A2(elm$browser$Reader$SourceMap$ExprDict$get, exprId, frame.exprs));
						if (_n1.$ === 'Just') {
							var value = _n1.a;
							return elm$core$Maybe$Nothing;
						} else {
							return elm$core$Maybe$Just(
								_Utils_Tuple2(exprId, _Utils_Tuple0));
						}
					},
					elm$browser$Reader$SourceMap$ExprDict$keys(sourceFrame.exprRegions)));
			return _Utils_Tuple2(liveExprs, deadExprs);
		}
	});
var elm$browser$Reader$StackUI$OpenFrame$Instrumented = function (a) {
	return {$: 'Instrumented', a: a};
};
var elm$browser$Reader$StackUI$OpenFrame$NonInstrumented = F3(
	function (a, b, c) {
		return {$: 'NonInstrumented', a: a, b: b, c: c};
	});
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$browser$Reader$StackUI$OpenFrame$fromTrace = function (frame) {
	if (frame.$ === 'Instrumented') {
		var data = frame.a;
		return elm$browser$Reader$StackUI$OpenFrame$Instrumented(data);
	} else {
		var stackFrameId = frame.a;
		var subframes = frame.b;
		return A3(
			elm$browser$Reader$StackUI$OpenFrame$NonInstrumented,
			stackFrameId,
			0,
			elm$core$Array$fromList(subframes));
	}
};
var elm$browser$Reader$SourceMap$FrameDict$toKey = function (_n0) {
	var mod = _n0.mod;
	var def = _n0.def;
	var frameIndex = _n0.frameIndex;
	var moduleName = mod.mod;
	var _n1 = mod._package;
	var packageName = _n1.a;
	return _Utils_Tuple3(
		_Utils_Tuple2(packageName, moduleName),
		def,
		frameIndex);
};
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$browser$Reader$SourceMap$FrameDict$member = F2(
	function (id, _n0) {
		var dict = _n0.a;
		return A2(
			elm$core$Dict$member,
			elm$browser$Reader$SourceMap$FrameDict$toKey(id),
			dict);
	});
var elm$browser$Reader$SourceMap$FrameDict$FrameDict = function (a) {
	return {$: 'FrameDict', a: a};
};
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$browser$Reader$SourceMap$FrameDict$set = F3(
	function (id, newVal, _n0) {
		var dict = _n0.a;
		return elm$browser$Reader$SourceMap$FrameDict$FrameDict(
			A3(
				elm$core$Dict$update,
				elm$browser$Reader$SourceMap$FrameDict$toKey(id),
				function (_n1) {
					return elm$core$Maybe$Just(newVal);
				},
				dict));
	});
var elm$browser$Reader$StackUI$RenderedFrameMap$RenderedFrameMap = function (a) {
	return {$: 'RenderedFrameMap', a: a};
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$String$indices = _String_indexes;
var elm$core$String$slice = _String_slice;
var elm$browser$Reader$SourceMap$lookupRegionSource = F2(
	function (_n0, sourceMap) {
		var mod = _n0.mod;
		var start = _n0.start;
		var end = _n0.end;
		var nthLine = F2(
			function (n, str) {
				if (str === '') {
					return elm$core$Maybe$Nothing;
				} else {
					if (n <= 1) {
						return elm$core$Maybe$Just(0);
					} else {
						var newlines = A2(elm$core$String$indices, '\n', str);
						var lineBreakPos = elm$core$List$head(
							A2(elm$core$List$drop, n - 2, newlines));
						return A2(
							elm$core$Maybe$map,
							elm$core$Basics$add(1),
							lineBreakPos);
					}
				}
			});
		var modSource = A2(elm$browser$Reader$Dict$get, mod, sourceMap.sources);
		var startPos = A2(
			elm$core$Maybe$map,
			elm$core$Basics$add(start.col - 1),
			A2(
				elm$core$Maybe$andThen,
				nthLine(start.line),
				modSource));
		var endPos = A2(
			elm$core$Maybe$map,
			elm$core$Basics$add(end.col - 1),
			A2(
				elm$core$Maybe$andThen,
				nthLine(end.line),
				modSource));
		var _n1 = _Utils_Tuple2(startPos, endPos);
		if ((_n1.a.$ === 'Just') && (_n1.b.$ === 'Just')) {
			var startIndex = _n1.a.a;
			var endIndex = _n1.b.a;
			return A2(
				elm$core$Maybe$map,
				A2(elm$core$String$slice, startIndex, endIndex),
				modSource);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$browser$Reader$SourceMap$comparePositions = F2(
	function (p1, p2) {
		return _Utils_eq(p1.line, p2.line) ? A2(elm$core$Basics$compare, p1.col, p2.col) : A2(elm$core$Basics$compare, p1.line, p2.line);
	});
var elm$core$Debug$log = _Debug_log;
var elm$core$Debug$toString = _Debug_toString;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$browser$Reader$SourceMap$exprsWithARegionFulfilling = F2(
	function (condition, exprRegions) {
		return A2(
			elm$core$List$filterMap,
			function (_n0) {
				var exprId = _n0.a;
				var regions = _n0.b;
				var _n1 = A2(elm$core$List$filter, condition, regions);
				if (_n1.b) {
					if (!_n1.b.b) {
						var region = _n1.a;
						return elm$core$Maybe$Just(
							_Utils_Tuple2(exprId, region));
					} else {
						var firstRegion = _n1.a;
						return A2(
							elm$core$Debug$log,
							'exprsWithARegionFulfilling: got multiple overlapping regions for expr ' + elm$core$Debug$toString(exprId),
							elm$core$Maybe$Just(
								_Utils_Tuple2(exprId, firstRegion)));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			},
			elm$browser$Reader$SourceMap$ExprDict$toList(exprRegions));
	});
var elm$core$List$sortWith = _List_sortWith;
var elm$browser$Reader$SourceMap$exprsEndingAt = F2(
	function (pos, exprRegions) {
		return A2(
			elm$core$List$map,
			function (_n2) {
				var exprId = _n2.a;
				return exprId;
			},
			A2(
				elm$core$List$sortWith,
				F2(
					function (_n0, _n1) {
						var r1 = _n0.b;
						var r2 = _n1.b;
						return A2(elm$browser$Reader$SourceMap$comparePositions, r2.start, r1.start);
					}),
				A2(
					elm$browser$Reader$SourceMap$exprsWithARegionFulfilling,
					function (region) {
						return _Utils_eq(region.end, pos);
					},
					exprRegions)));
	});
var elm$browser$Reader$SourceMap$exprsStartingAt = F2(
	function (pos, exprRegions) {
		return A2(
			elm$core$List$map,
			function (_n2) {
				var exprId = _n2.a;
				return exprId;
			},
			A2(
				elm$core$List$sortWith,
				F2(
					function (_n0, _n1) {
						var r1 = _n0.b;
						var r2 = _n1.b;
						return A2(elm$browser$Reader$SourceMap$comparePositions, r2.end, r1.end);
					}),
				A2(
					elm$browser$Reader$SourceMap$exprsWithARegionFulfilling,
					function (region) {
						return _Utils_eq(region.start, pos);
					},
					exprRegions)));
	});
var elm$browser$Reader$StackUI$RenderFrame$TokenExprEnd = function (a) {
	return {$: 'TokenExprEnd', a: a};
};
var elm$browser$Reader$StackUI$RenderFrame$TokenExprStart = function (a) {
	return {$: 'TokenExprStart', a: a};
};
var elm$browser$Reader$StackUI$RenderFrame$TokenText = function (a) {
	return {$: 'TokenText', a: a};
};
var elm$browser$Reader$StackUI$RenderFrame$thenAppend = F2(
	function (addendum, base) {
		return A2(elm$core$Array$append, base, addendum);
	});
var elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			elm$core$Array$unsafeReplaceTail,
			A2(elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var elm$browser$Reader$StackUI$RenderFrame$thenMaybePush = F2(
	function (addendum, base) {
		if (addendum.$ === 'Just') {
			var elem = addendum.a;
			return A2(elm$core$Array$push, elem, base);
		} else {
			return base;
		}
	});
var elm$core$Basics$not = _Basics_not;
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm$browser$Reader$StackUI$RenderFrame$tokenGenerationIterator = F2(
	function (exprRegions, src) {
		return F2(
			function (_char, _n0) {
				var position = _n0.position;
				var idx = _n0.idx;
				var tokenStart = _n0.tokenStart;
				var tokenStream = _n0.tokenStream;
				var starts = A2(
					elm$core$List$map,
					elm$browser$Reader$StackUI$RenderFrame$TokenExprStart,
					A2(elm$browser$Reader$SourceMap$exprsStartingAt, position, exprRegions));
				var nextPos = _Utils_eq(
					_char,
					_Utils_chr('\n')) ? {col: 1, line: position.line + 1} : {col: position.col + 1, line: position.line};
				var ends = A2(
					elm$core$List$map,
					elm$browser$Reader$StackUI$RenderFrame$TokenExprEnd,
					A2(elm$browser$Reader$SourceMap$exprsEndingAt, position, exprRegions));
				var _n1 = (!(elm$core$List$isEmpty(starts) && elm$core$List$isEmpty(ends))) ? _Utils_Tuple2(
					elm$core$Maybe$Just(
						elm$browser$Reader$StackUI$RenderFrame$TokenText(
							A3(elm$core$String$slice, tokenStart, idx, src))),
					idx) : _Utils_Tuple2(elm$core$Maybe$Nothing, tokenStart);
				var priorToken = _n1.a;
				var nextTokenStart = _n1.b;
				return {
					idx: idx + 1,
					position: nextPos,
					tokenStart: nextTokenStart,
					tokenStream: A2(
						elm$browser$Reader$StackUI$RenderFrame$thenAppend,
						elm$core$Array$fromList(starts),
						A2(
							elm$browser$Reader$StackUI$RenderFrame$thenAppend,
							elm$core$Array$fromList(ends),
							A2(elm$browser$Reader$StackUI$RenderFrame$thenMaybePush, priorToken, tokenStream)))
				};
			});
	});
var elm$core$String$foldl = _String_foldl;
var elm$browser$Reader$StackUI$RenderFrame$frameSrcToTokens = F3(
	function (initialPos, src, exprRegions) {
		var _n0 = A4(
			elm$browser$Reader$StackUI$RenderFrame$tokenGenerationIterator,
			exprRegions,
			src,
			_Utils_chr('X'),
			A3(
				elm$core$String$foldl,
				A2(elm$browser$Reader$StackUI$RenderFrame$tokenGenerationIterator, exprRegions, src),
				{idx: 0, position: initialPos, tokenStart: 0, tokenStream: elm$core$Array$empty},
				src));
		var tokenStream = _n0.tokenStream;
		return tokenStream;
	});
var elm$browser$Reader$StackUI$RenderFrame$frameToTokens = F2(
	function (srcMap, frameId) {
		var _n0 = A2(elm$browser$Reader$SourceMap$getFrame, frameId, srcMap);
		if (_n0.$ === 'Nothing') {
			return elm$core$Result$Err('could not find frameId in srcMap.frames');
		} else {
			var region = _n0.a.region;
			var exprRegions = _n0.a.exprRegions;
			var _n1 = A2(elm$browser$Reader$SourceMap$lookupRegionSource, region, srcMap);
			if (_n1.$ === 'Nothing') {
				return elm$core$Result$Err('could not find frame.region in srcMap.sources');
			} else {
				var src = _n1.a;
				return elm$core$Result$Ok(
					A3(elm$browser$Reader$StackUI$RenderFrame$frameSrcToTokens, region.start, src, exprRegions));
			}
		}
	});
var elm$core$Array$foldl = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldl,
			func,
			A3(elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$browser$Reader$StackUI$RenderFrame$joinArray = F2(
	function (sep, entries) {
		return A2(
			elm$core$Maybe$withDefault,
			'',
			A3(
				elm$core$Array$foldl,
				F2(
					function (entry, result) {
						if (result.$ === 'Just') {
							var accum = result.a;
							return elm$core$Maybe$Just(
								_Utils_ap(
									accum,
									_Utils_ap(sep, entry)));
						} else {
							return elm$core$Maybe$Just(entry);
						}
					}),
				elm$core$Maybe$Nothing,
				entries));
	});
var elm$browser$Reader$SourceMap$Ids$exprIdToInt = function (_n0) {
	var i = _n0.a;
	return i;
};
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$span = _VirtualDom_node('span');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$browser$Reader$StackUI$RenderFrame$exprElem = F2(
	function (exprId, contents) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(
					'elm-reader-expr-' + elm$core$String$fromInt(
						elm$browser$Reader$SourceMap$Ids$exprIdToInt(exprId))),
					elm$html$Html$Attributes$class('elm-reader-expr')
				]),
			contents);
	});
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return elm$core$Result$Err(msg);
		}
	});
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$browser$Reader$StackUI$RenderFrame$takeExprTokensToHtml = F3(
	function (currentExpr, idx, tokens) {
		var _n0 = A2(elm$core$Array$get, idx, tokens);
		if (_n0.$ === 'Nothing') {
			return elm$core$Result$Err('unexpected end of stream');
		} else {
			switch (_n0.a.$) {
				case 'TokenText':
					var txt = _n0.a.a;
					return A2(
						elm$core$Result$map,
						function (_n1) {
							var restHtmlInContext = _n1.a;
							var idxAfterExpr = _n1.b;
							return _Utils_Tuple2(
								A2(
									elm$core$List$cons,
									elm$html$Html$text(txt),
									restHtmlInContext),
								idxAfterExpr);
						},
						A3(elm$browser$Reader$StackUI$RenderFrame$takeExprTokensToHtml, currentExpr, idx + 1, tokens));
				case 'TokenExprStart':
					var hereExprId = _n0.a.a;
					return A2(
						elm$core$Result$andThen,
						function (_n2) {
							var htmlItemsHere = _n2.a;
							var idxAfterHereExpr = _n2.b;
							return A2(
								elm$core$Result$map,
								function (_n3) {
									var htmlItemsAfterHere = _n3.a;
									var idxAfterContext = _n3.b;
									return _Utils_Tuple2(
										A2(
											elm$core$List$cons,
											A2(elm$browser$Reader$StackUI$RenderFrame$exprElem, hereExprId, htmlItemsHere),
											htmlItemsAfterHere),
										idxAfterContext);
								},
								A3(elm$browser$Reader$StackUI$RenderFrame$takeExprTokensToHtml, currentExpr, idxAfterHereExpr, tokens));
						},
						A3(elm$browser$Reader$StackUI$RenderFrame$takeExprTokensToHtml, hereExprId, idx + 1, tokens));
				default:
					var closingExprId = _n0.a.a;
					return _Utils_eq(closingExprId, currentExpr) ? elm$core$Result$Ok(
						_Utils_Tuple2(_List_Nil, idx + 1)) : elm$core$Result$Err(
						'Unexpected TokenExprEnd ' + (elm$core$Debug$toString(closingExprId) + (' at index ' + (elm$core$String$fromInt(idx) + (' in tokens array: ' + elm$core$Debug$toString(tokens))))));
			}
		}
	});
var elm$core$Elm$JsArray$map = _JsArray_map;
var elm$core$Array$map = F2(
	function (func, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return elm$core$Array$SubTree(
					A2(elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return elm$core$Array$Leaf(
					A2(elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2(elm$core$Elm$JsArray$map, helper, tree),
			A2(elm$core$Elm$JsArray$map, func, tail));
	});
var elm$browser$Reader$StackUI$RenderFrame$viewFrameTokensHelp = F2(
	function (idx, tokens) {
		var _n0 = A2(elm$core$Array$get, idx, tokens);
		if (_n0.$ === 'Just') {
			switch (_n0.a.$) {
				case 'TokenText':
					var txt = _n0.a.a;
					return A2(
						elm$core$Result$map,
						function (restHtml) {
							return A2(
								elm$core$List$cons,
								elm$html$Html$text(txt),
								restHtml);
						},
						A2(elm$browser$Reader$StackUI$RenderFrame$viewFrameTokensHelp, idx + 1, tokens));
				case 'TokenExprStart':
					var exprId = _n0.a.a;
					var _n1 = A3(elm$browser$Reader$StackUI$RenderFrame$takeExprTokensToHtml, exprId, idx + 1, tokens);
					if (_n1.$ === 'Ok') {
						var _n2 = _n1.a;
						var htmlItems = _n2.a;
						var idxAfterExpr = _n2.b;
						return A2(
							elm$core$Result$map,
							function (restHtml) {
								return _Utils_ap(htmlItems, restHtml);
							},
							A2(elm$browser$Reader$StackUI$RenderFrame$viewFrameTokensHelp, idxAfterExpr, tokens));
					} else {
						var e = _n1.a;
						return elm$core$Result$Err(
							e + ('\n All tokens were:' + elm$core$Debug$toString(tokens)));
					}
				default:
					return elm$core$Result$Err(
						'unexpected TokenExprEnd [\n  ' + A2(
							elm$browser$Reader$StackUI$RenderFrame$joinArray,
							',\n  ',
							A2(elm$core$Array$map, elm$core$Debug$toString, tokens)));
			}
		} else {
			return elm$core$Result$Ok(_List_Nil);
		}
	});
var elm$html$Html$pre = _VirtualDom_node('pre');
var elm$browser$Reader$StackUI$RenderFrame$viewFrameTokens = function (tokens) {
	return A2(
		elm$core$Result$map,
		elm$html$Html$pre(_List_Nil),
		A2(elm$browser$Reader$StackUI$RenderFrame$viewFrameTokensHelp, 0, tokens));
};
var elm$browser$Reader$StackUI$RenderFrame$renderFrame = F2(
	function (srcMap, frameId) {
		return A2(
			elm$core$Result$andThen,
			elm$browser$Reader$StackUI$RenderFrame$viewFrameTokens,
			A2(elm$browser$Reader$StackUI$RenderFrame$frameToTokens, srcMap, frameId));
	});
var elm$html$Html$div = _VirtualDom_node('div');
var elm$browser$Reader$StackUI$RenderedFrameMap$renderFrame = F2(
	function (srcMap, id) {
		var _n0 = _Utils_Tuple2(
			A2(elm$browser$Reader$StackUI$RenderFrame$renderFrame, srcMap, id),
			A2(elm$browser$Reader$SourceMap$getFrameHeight, id, srcMap));
		if (_n0.a.$ === 'Err') {
			var message = _n0.a.a;
			var maybeLines = _n0.b;
			return {
				html: A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(message)
						])),
				lines: A2(elm$core$Maybe$withDefault, 1, maybeLines)
			};
		} else {
			if (_n0.b.$ === 'Nothing') {
				var _n1 = _n0.b;
				return {
					html: A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('Failed to get rendered frame\'s height!')
							])),
					lines: 1
				};
			} else {
				var html = _n0.a.a;
				var lines = _n0.b.a;
				return {html: html, lines: lines};
			}
		}
	});
var elm$browser$Reader$StackUI$RenderedFrameMap$ensure = F3(
	function (srcMap, frames, _n0) {
		var renderedFrameMap = _n0.a;
		return elm$browser$Reader$StackUI$RenderedFrameMap$RenderedFrameMap(
			A3(
				elm$core$List$foldl,
				F2(
					function (sourceId, renders) {
						return A2(elm$browser$Reader$SourceMap$FrameDict$member, sourceId, renders) ? renders : A3(
							elm$browser$Reader$SourceMap$FrameDict$set,
							sourceId,
							A2(elm$browser$Reader$StackUI$RenderedFrameMap$renderFrame, srcMap, sourceId),
							renders);
					}),
				renderedFrameMap,
				frames));
	});
var elm$browser$Reader$StackUI$StackTree$StackTreeI = function (a) {
	return {$: 'StackTreeI', a: a};
};
var elm$browser$Reader$StackUI$StackTree$StackTreeN = function (a) {
	return {$: 'StackTreeN', a: a};
};
var elm$browser$Reader$StackUI$StackTree$singleton = function (openFrame) {
	if (openFrame.$ === 'Instrumented') {
		var data = openFrame.a;
		return elm$core$Maybe$Just(
			elm$browser$Reader$StackUI$StackTree$StackTreeI(
				{first: data, openChild: elm$core$Maybe$Nothing, previouslyOpenedChildren: _List_Nil}));
	} else {
		var id = openFrame.a;
		var idx = openFrame.b;
		var subframes = openFrame.c;
		var _n1 = A2(elm$core$Array$get, idx, subframes);
		if (_n1.$ === 'Nothing') {
			return elm$core$Maybe$Nothing;
		} else {
			var data = _n1.a;
			return elm$core$Maybe$Just(
				elm$browser$Reader$StackUI$StackTree$StackTreeN(
					{
						first: _Utils_Tuple2(id, subframes),
						openChild: elm$browser$Reader$StackUI$StackTree$StackTreeI(
							{first: data, openChild: elm$core$Maybe$Nothing, previouslyOpenedChildren: _List_Nil}),
						openChildIndex: idx,
						previouslyOpenedChildren: _List_Nil
					}));
		}
	}
};
var elm$browser$Reader$TraceData$FrameDict$FrameDict = function (a) {
	return {$: 'FrameDict', a: a};
};
var elm$browser$Reader$TraceData$FrameDict$fromList = function (lst) {
	return elm$browser$Reader$TraceData$FrameDict$FrameDict(
		elm$core$Dict$fromList(
			A2(
				elm$core$List$map,
				function (_n0) {
					var _n1 = _n0.a;
					var uniq = _n1.a;
					var val = _n0.b;
					return _Utils_Tuple2(uniq, val);
				},
				lst)));
};
var elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2(elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var elm$core$Dict$size = function (dict) {
	return A2(elm$core$Dict$sizeHelp, 0, dict);
};
var elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$initHelp(false),
						items)) : ((elm$core$List$length(items) <= 8) ? A3(elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						elm$core$List$map,
						function (_n1) {
							var k = _n1.a;
							var v = _n1.b;
							return _Utils_Tuple2(
								k,
								A2(elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : ((elm$core$List$length(keyValuePairs) <= 8) ? A2(elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					elm$browser$Debugger$Expando$Record,
					false,
					A2(
						elm$core$Dict$map,
						F2(
							function (_n2, v) {
								return A2(elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : ((elm$core$Dict$size(entries) <= 4) ? A2(elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$initHelp(false),
						args)) : ((elm$core$List$length(args) <= 4) ? A3(elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var elm$core$Set$foldr = F3(
	function (func, initialState, _n0) {
		var dict = _n0.a;
		return A3(
			elm$core$Dict$foldr,
			F3(
				function (key, _n1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		elm$browser$Debugger$Expando$initHelp,
		true,
		_Expando_init(value));
};
var elm$browser$Reader$TraceData$Value$toExpando = function (_n0) {
	var x = _n0.a;
	return elm$browser$Debugger$Expando$init(
		_Json_unwrap(x));
};
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var elm$browser$Reader$StackUI$fromTrace = F3(
	function (srcMap, renderedFrames, frameTrace) {
		var openFrame = elm$browser$Reader$StackUI$OpenFrame$fromTrace(frameTrace);
		var _n0 = function () {
			if (frameTrace.$ === 'Instrumented') {
				var data = frameTrace.a;
				var height = A2(
					elm$core$Maybe$withDefault,
					10,
					A2(elm$browser$Reader$SourceMap$getFrameHeight, data.sourceId, srcMap));
				var _n2 = A2(elm$browser$Reader$StackUI$exprsFromTrace, srcMap, data);
				var liveExprs_ = _n2.a;
				var deadExprs = _n2.b;
				var liveExprs = A2(
					elm$browser$Reader$SourceMap$ExprDict$map,
					F2(
						function (_n3, expr) {
							var i = _n3.a;
							return ((i === 1) || (i === 2)) ? _Utils_update(
								expr,
								{
									model: elm$core$Maybe$Just(
										{
											pinned: true,
											ui: elm$browser$Reader$TraceData$Value$toExpando(expr.value)
										})
								}) : expr;
						}),
					liveExprs_);
				return _Utils_Tuple2(
					elm$browser$Reader$TraceData$FrameDict$fromList(
						_List_fromArray(
							[
								_Utils_Tuple2(
								data.runtimeId,
								{deadExprs: deadExprs, exprs: liveExprs, height: height, topY: 1})
							])),
					_List_fromArray(
						[data.sourceId]));
			} else {
				var subframes = frameTrace.b;
				return _Utils_Tuple2(
					elm$browser$Reader$TraceData$FrameDict$fromList(
						A2(
							elm$core$List$map,
							function (frame) {
								var height = A2(
									elm$core$Maybe$withDefault,
									10,
									A2(elm$browser$Reader$SourceMap$getFrameHeight, frame.sourceId, srcMap));
								var _n4 = A2(elm$browser$Reader$StackUI$exprsFromTrace, srcMap, frame);
								var liveExprs = _n4.a;
								var deadExprs = _n4.b;
								return _Utils_Tuple2(
									frame.runtimeId,
									{deadExprs: deadExprs, exprs: liveExprs, height: height, topY: 1});
							},
							subframes)),
					A3(
						elm$core$List$foldr,
						F2(
							function (item, accum) {
								return A2(elm$core$List$member, item, accum) ? accum : A2(elm$core$List$cons, item, accum);
							}),
						_List_Nil,
						A2(
							elm$core$List$map,
							function ($) {
								return $.sourceId;
							},
							subframes)));
			}
		}();
		var stackFrames = _n0.a;
		var sourceFrameIds = _n0.b;
		var _n5 = elm$browser$Reader$StackUI$StackTree$singleton(openFrame);
		if (_n5.$ === 'Just') {
			var singleton = _n5.a;
			return elm$core$Maybe$Just(
				{
					hoveredExpr: elm$core$Maybe$Nothing,
					renderedFrames: A3(elm$browser$Reader$StackUI$RenderedFrameMap$ensure, srcMap, sourceFrameIds, renderedFrames),
					stackFrames: stackFrames,
					stackTree: singleton
				});
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$browser$Reader$SourceMap$FrameDict$empty = elm$browser$Reader$SourceMap$FrameDict$FrameDict(elm$core$Dict$empty);
var elm$browser$Reader$StackUI$RenderedFrameMap$empty = elm$browser$Reader$StackUI$RenderedFrameMap$RenderedFrameMap(elm$browser$Reader$SourceMap$FrameDict$empty);
var elm$browser$Reader$StackUI$adaptFromTrace = F3(
	function (srcMap, old, newFrame) {
		return A3(
			elm$browser$Reader$StackUI$fromTrace,
			srcMap,
			A2(
				elm$core$Maybe$withDefault,
				elm$browser$Reader$StackUI$RenderedFrameMap$empty,
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.renderedFrames;
					},
					old)),
			newFrame);
	});
var elm$browser$Reader$SourceMap$ExprDict$set = F3(
	function (_n0, a, _n1) {
		var i = _n0.a;
		var dict = _n1.a;
		return elm$browser$Reader$SourceMap$ExprDict$ExprDict(
			A3(elm$core$Dict$insert, i, a, dict));
	});
var elm$browser$Reader$TraceData$FrameDict$get = F2(
	function (_n0, _n1) {
		var uniq = _n0.a;
		var dict = _n1.a;
		return A2(elm$core$Dict$get, uniq, dict);
	});
var elm$browser$Reader$TraceData$FrameDict$update = F3(
	function (_n0, updater, _n1) {
		var uniq = _n0.a;
		var dict = _n1.a;
		return elm$browser$Reader$TraceData$FrameDict$FrameDict(
			A3(
				elm$core$Dict$update,
				uniq,
				elm$core$Maybe$map(updater),
				dict));
	});
var elm$browser$Reader$StackUI$handleExprHover = F3(
	function (stackUI, frame, expr) {
		var maybeExprData = A2(
			elm$core$Maybe$andThen,
			elm$browser$Reader$SourceMap$ExprDict$get(expr),
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.exprs;
				},
				A2(elm$browser$Reader$TraceData$FrameDict$get, frame, stackUI.stackFrames)));
		var exprModel = A2(
			elm$core$Maybe$andThen,
			function ($) {
				return $.model;
			},
			maybeExprData);
		var _n0 = _Utils_Tuple2(maybeExprData, exprModel);
		if (_n0.a.$ === 'Nothing') {
			var _n1 = _n0.a;
			return _Utils_update(
				stackUI,
				{hoveredExpr: elm$core$Maybe$Nothing});
		} else {
			if (_n0.b.$ === 'Just') {
				return _Utils_update(
					stackUI,
					{
						hoveredExpr: elm$core$Maybe$Just(
							_Utils_Tuple2(frame, expr))
					});
			} else {
				var exprData = _n0.a.a;
				var _n2 = _n0.b;
				var newExprModel = {
					pinned: false,
					ui: elm$browser$Reader$TraceData$Value$toExpando(exprData.value)
				};
				var newStackFrames = A3(
					elm$browser$Reader$TraceData$FrameDict$update,
					frame,
					function (frameData) {
						return _Utils_update(
							frameData,
							{
								exprs: A3(
									elm$browser$Reader$SourceMap$ExprDict$set,
									expr,
									_Utils_update(
										exprData,
										{
											model: elm$core$Maybe$Just(newExprModel)
										}),
									frameData.exprs)
							});
					},
					stackUI.stackFrames);
				return _Utils_update(
					stackUI,
					{
						hoveredExpr: elm$core$Maybe$Just(
							_Utils_Tuple2(frame, expr)),
						stackFrames: newStackFrames
					});
			}
		}
	});
var elm$browser$Reader$SourceMap$ExprDict$update = F3(
	function (_n0, updater, _n1) {
		var i = _n0.a;
		var dict = _n1.a;
		return elm$browser$Reader$SourceMap$ExprDict$ExprDict(
			A3(
				elm$core$Dict$update,
				i,
				elm$core$Maybe$map(updater),
				dict));
	});
var elm$browser$Reader$StackUI$frameLineSpacing = 2;
var elm$browser$Reader$StackUI$nonInstrumentedFrameHeight = 2;
var elm$browser$Reader$StackUI$OpenFrame$childFrameOf = function (openFrame) {
	if (openFrame.$ === 'Instrumented') {
		var data = openFrame.a;
		return elm$core$Maybe$Nothing;
	} else {
		var idx = openFrame.b;
		var subframes = openFrame.c;
		return A2(
			elm$core$Maybe$map,
			elm$browser$Reader$TraceData$Instrumented,
			A2(elm$core$Array$get, idx, subframes));
	}
};
var elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf = function (openFrame) {
	if (openFrame.$ === 'Instrumented') {
		var runtimeId = openFrame.a.runtimeId;
		return runtimeId;
	} else {
		var id = openFrame.a;
		return id;
	}
};
var elm$browser$Reader$SourceMap$FrameDict$get = F2(
	function (id, _n0) {
		var dict = _n0.a;
		return A2(
			elm$core$Dict$get,
			elm$browser$Reader$SourceMap$FrameDict$toKey(id),
			dict);
	});
var elm$browser$Reader$StackUI$RenderedFrameMap$ensureOne = F3(
	function (srcMap, sourceId, renderedFrameMap) {
		var renders = renderedFrameMap.a;
		var _n0 = A2(elm$browser$Reader$SourceMap$FrameDict$get, sourceId, renders);
		if (_n0.$ === 'Just') {
			var render = _n0.a;
			return _Utils_Tuple2(renderedFrameMap, render);
		} else {
			var render = A2(elm$browser$Reader$StackUI$RenderedFrameMap$renderFrame, srcMap, sourceId);
			return _Utils_Tuple2(
				elm$browser$Reader$StackUI$RenderedFrameMap$RenderedFrameMap(
					A3(elm$browser$Reader$SourceMap$FrameDict$set, sourceId, render, renders)),
				render);
		}
	});
var elm$browser$Reader$StackUI$StackTree$frameIdOf = function (stackTree) {
	if (stackTree.$ === 'StackTreeI') {
		var first = stackTree.a.first;
		return first.runtimeId;
	} else {
		var first = stackTree.a.first;
		var _n1 = first;
		var id = _n1.a;
		return id;
	}
};
var elm$browser$Reader$StackUI$StackTree$getOpenChild = function (stackTree) {
	if (stackTree.$ === 'StackTreeI') {
		var st = stackTree.a;
		return st.openChild;
	} else {
		var st = stackTree.a;
		return elm$core$Maybe$Just(st.openChild);
	}
};
var elm$browser$Reader$StackUI$StackTree$getPreviouslyOpenedChildren = function (stackTree) {
	if (stackTree.$ === 'StackTreeI') {
		var st = stackTree.a;
		return st.previouslyOpenedChildren;
	} else {
		var st = stackTree.a;
		return st.previouslyOpenedChildren;
	}
};
var elm$browser$Reader$StackUI$StackTree$mapOpenChild = F2(
	function (stackTree, func) {
		if (stackTree.$ === 'StackTreeI') {
			var st = stackTree.a;
			return elm$browser$Reader$StackUI$StackTree$StackTreeI(
				_Utils_update(
					st,
					{
						openChild: A2(elm$core$Maybe$map, func, st.openChild)
					}));
		} else {
			var st = stackTree.a;
			return elm$browser$Reader$StackUI$StackTree$StackTreeN(
				_Utils_update(
					st,
					{
						openChild: func(st.openChild)
					}));
		}
	});
var elm$browser$Reader$StackUI$StackTree$pushIfJust = F2(
	function (maybeV, vs) {
		if (maybeV.$ === 'Just') {
			var v = maybeV.a;
			return A2(elm$core$List$cons, v, vs);
		} else {
			return vs;
		}
	});
var elm$core$Array$filter = F2(
	function (isGood, array) {
		return elm$core$Array$fromList(
			A3(
				elm$core$Array$foldr,
				F2(
					function (x, xs) {
						return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
					}),
				_List_Nil,
				array));
	});
var elm$core$Elm$JsArray$indexedMap = _JsArray_indexedMap;
var elm$core$Array$indexedMap = F2(
	function (func, _n0) {
		var len = _n0.a;
		var tree = _n0.c;
		var tail = _n0.d;
		var initialBuilder = {
			nodeList: _List_Nil,
			nodeListSize: 0,
			tail: A3(
				elm$core$Elm$JsArray$indexedMap,
				func,
				elm$core$Array$tailIndex(len),
				tail)
		};
		var helper = F2(
			function (node, builder) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldl, helper, builder, subTree);
				} else {
					var leaf = node.a;
					var offset = builder.nodeListSize * elm$core$Array$branchFactor;
					var mappedLeaf = elm$core$Array$Leaf(
						A3(elm$core$Elm$JsArray$indexedMap, func, offset, leaf));
					return {
						nodeList: A2(elm$core$List$cons, mappedLeaf, builder.nodeList),
						nodeListSize: builder.nodeListSize + 1,
						tail: builder.tail
					};
				}
			});
		return A2(
			elm$core$Array$builderToArray,
			true,
			A3(elm$core$Elm$JsArray$foldl, helper, initialBuilder, tree));
	});
var elm$browser$Reader$StackUI$StackTree$indexOf = F2(
	function (condition, arr) {
		return A2(
			elm$core$Array$get,
			0,
			A2(
				elm$core$Array$map,
				function (_n1) {
					var i = _n1.a;
					return i;
				},
				A2(
					elm$core$Array$filter,
					function (_n0) {
						var i = _n0.a;
						var cond = _n0.b;
						return cond;
					},
					A2(
						elm$core$Array$indexedMap,
						F2(
							function (i, elem) {
								return _Utils_Tuple2(
									i,
									condition(elem));
							}),
						arr))));
	});
var elm$browser$Reader$TraceData$frameIdsEqual = F2(
	function (_n0, _n1) {
		var uid1 = _n0.a;
		var uid2 = _n1.a;
		return _Utils_eq(uid1, uid2);
	});
var elm$browser$Reader$StackUI$StackTree$withThisOpenChild = F3(
	function (stackTree, newOpenChild, newChildren) {
		if (stackTree.$ === 'StackTreeI') {
			var st = stackTree.a;
			return elm$browser$Reader$StackUI$StackTree$StackTreeI(
				{
					first: st.first,
					openChild: elm$core$Maybe$Just(newOpenChild),
					previouslyOpenedChildren: newChildren
				});
		} else {
			var st = stackTree.a;
			var _n1 = st.first;
			var id = _n1.a;
			var subframes = _n1.b;
			var newIdx = A2(
				elm$core$Maybe$withDefault,
				st.openChildIndex,
				A2(
					elm$browser$Reader$StackUI$StackTree$indexOf,
					function (frame) {
						return A2(
							elm$browser$Reader$TraceData$frameIdsEqual,
							elm$browser$Reader$StackUI$StackTree$frameIdOf(newOpenChild),
							frame.runtimeId);
					},
					subframes));
			return elm$browser$Reader$StackUI$StackTree$StackTreeN(
				{
					first: _Utils_Tuple2(id, subframes),
					openChild: newOpenChild,
					openChildIndex: newIdx,
					previouslyOpenedChildren: newChildren
				});
		}
	});
var elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _n0) {
				var trues = _n0.a;
				var falses = _n0.b;
				return pred(x) ? _Utils_Tuple2(
					A2(elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2(elm$core$List$cons, x, falses));
			});
		return A3(
			elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var elm$browser$Reader$StackUI$StackTree$openChildFrameHelp = F4(
	function (parentRuntimeId, childSingleton, isChildFrame, stackTree) {
		if (A2(
			elm$browser$Reader$TraceData$frameIdsEqual,
			elm$browser$Reader$StackUI$StackTree$frameIdOf(stackTree),
			parentRuntimeId)) {
			var childAlreadyOpen = A2(
				elm$core$Maybe$withDefault,
				false,
				A2(
					elm$core$Maybe$map,
					isChildFrame,
					elm$browser$Reader$StackUI$StackTree$getOpenChild(stackTree)));
			if (childAlreadyOpen) {
				return stackTree;
			} else {
				var _n0 = A2(
					elm$core$List$partition,
					isChildFrame,
					elm$browser$Reader$StackUI$StackTree$getPreviouslyOpenedChildren(stackTree));
				if (_n0.a.b) {
					if (!_n0.a.b.b) {
						var _n1 = _n0.a;
						var theChild = _n1.a;
						var rest = _n0.b;
						return A3(
							elm$browser$Reader$StackUI$StackTree$withThisOpenChild,
							stackTree,
							theChild,
							A2(
								elm$browser$Reader$StackUI$StackTree$pushIfJust,
								elm$browser$Reader$StackUI$StackTree$getOpenChild(stackTree),
								rest));
					} else {
						return stackTree;
					}
				} else {
					var rest = _n0.b;
					return A3(
						elm$browser$Reader$StackUI$StackTree$withThisOpenChild,
						stackTree,
						childSingleton,
						A2(
							elm$browser$Reader$StackUI$StackTree$pushIfJust,
							elm$browser$Reader$StackUI$StackTree$getOpenChild(stackTree),
							rest));
				}
			}
		} else {
			return A2(
				elm$browser$Reader$StackUI$StackTree$mapOpenChild,
				stackTree,
				A3(elm$browser$Reader$StackUI$StackTree$openChildFrameHelp, parentRuntimeId, childSingleton, isChildFrame));
		}
	});
var elm$browser$Reader$StackUI$StackTree$openChildFrame = F3(
	function (parentRuntimeId, childFrame, stackTree) {
		var childFrameRuntimeId = elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf(childFrame);
		var _n0 = elm$browser$Reader$StackUI$StackTree$singleton(childFrame);
		if (_n0.$ === 'Just') {
			var childSingleton = _n0.a;
			return A4(
				elm$browser$Reader$StackUI$StackTree$openChildFrameHelp,
				parentRuntimeId,
				childSingleton,
				function (st) {
					return A2(
						elm$browser$Reader$TraceData$frameIdsEqual,
						childFrameRuntimeId,
						elm$browser$Reader$StackUI$StackTree$frameIdOf(st));
				},
				stackTree);
		} else {
			return stackTree;
		}
	});
var elm$browser$Reader$TraceData$frameIdOf = function (frame) {
	if (frame.$ === 'NonInstrumented') {
		var id = frame.a;
		return id;
	} else {
		var runtimeId = frame.a.runtimeId;
		return runtimeId;
	}
};
var elm$browser$Reader$TraceData$FrameDict$member = F2(
	function (_n0, _n1) {
		var uniq = _n0.a;
		var dict = _n1.a;
		return A2(elm$core$Dict$member, uniq, dict);
	});
var elm$browser$Reader$TraceData$FrameDict$set = F3(
	function (_n0, val, _n1) {
		var uniq = _n0.a;
		var dict = _n1.a;
		return elm$browser$Reader$TraceData$FrameDict$FrameDict(
			A3(elm$core$Dict$insert, uniq, val, dict));
	});
var elm$browser$Reader$StackUI$openChildFrame = F4(
	function (srcMap, stackUI, parentFrameId, childFrame) {
		openChildFrame:
		while (true) {
			var childsOpenFrame = elm$browser$Reader$StackUI$OpenFrame$fromTrace(childFrame);
			var _n0 = function () {
				if (childFrame.$ === 'Instrumented') {
					var sourceId = childFrame.a.sourceId;
					var _n2 = A3(elm$browser$Reader$StackUI$RenderedFrameMap$ensureOne, srcMap, sourceId, stackUI.renderedFrames);
					var renders = _n2.a;
					var renderedChild = _n2.b;
					return _Utils_Tuple2(renders, renderedChild.lines);
				} else {
					return _Utils_Tuple2(stackUI.renderedFrames, elm$browser$Reader$StackUI$nonInstrumentedFrameHeight);
				}
			}();
			var newRenderedFrames = _n0.a;
			var childFrameHeight = _n0.b;
			var newStackFrames = function () {
				if (A2(
					elm$browser$Reader$TraceData$FrameDict$member,
					elm$browser$Reader$TraceData$frameIdOf(childFrame),
					stackUI.stackFrames)) {
					return stackUI.stackFrames;
				} else {
					var childFrameTopY = function () {
						var _n6 = A2(elm$browser$Reader$TraceData$FrameDict$get, parentFrameId, stackUI.stackFrames);
						if (_n6.$ === 'Nothing') {
							return 1;
						} else {
							var parentFrame = _n6.a;
							return (parentFrame.topY + parentFrame.height) + elm$browser$Reader$StackUI$frameLineSpacing;
						}
					}();
					var _n4 = function () {
						if (childFrame.$ === 'Instrumented') {
							var data = childFrame.a;
							return A2(elm$browser$Reader$StackUI$exprsFromTrace, srcMap, data);
						} else {
							return _Utils_Tuple2(elm$browser$Reader$SourceMap$ExprDict$empty, elm$browser$Reader$SourceMap$ExprDict$empty);
						}
					}();
					var liveExprs = _n4.a;
					var deadExprs = _n4.b;
					return A3(
						elm$browser$Reader$TraceData$FrameDict$set,
						elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf(childsOpenFrame),
						{deadExprs: deadExprs, exprs: liveExprs, height: childFrameHeight, topY: childFrameTopY},
						stackUI.stackFrames);
				}
			}();
			var newStackUI = _Utils_update(
				stackUI,
				{
					renderedFrames: newRenderedFrames,
					stackFrames: newStackFrames,
					stackTree: A3(elm$browser$Reader$StackUI$StackTree$openChildFrame, parentFrameId, childsOpenFrame, stackUI.stackTree)
				});
			var _n3 = elm$browser$Reader$StackUI$OpenFrame$childFrameOf(childsOpenFrame);
			if (_n3.$ === 'Nothing') {
				return newStackUI;
			} else {
				var grandchildFrame = _n3.a;
				var $temp$srcMap = srcMap,
					$temp$stackUI = newStackUI,
					$temp$parentFrameId = elm$browser$Reader$TraceData$frameIdOf(childFrame),
					$temp$childFrame = grandchildFrame;
				srcMap = $temp$srcMap;
				stackUI = $temp$stackUI;
				parentFrameId = $temp$parentFrameId;
				childFrame = $temp$childFrame;
				continue openChildFrame;
			}
		}
	});
var elm$browser$Reader$TraceData$evaluate = function (frameThunk) {
	if (frameThunk.$ === 'Thunk') {
		var runtimeId = frameThunk.a;
		var thunk = frameThunk.b;
		return thunk(_Utils_Tuple0);
	} else {
		var frame = frameThunk.a;
		return frame;
	}
};
var elm$browser$Reader$StackUI$handleExprOpen = F4(
	function (stackUI, srcMap, parentFrameId, exprId) {
		var expr = A2(
			elm$core$Maybe$andThen,
			elm$browser$Reader$SourceMap$ExprDict$get(exprId),
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.exprs;
				},
				A2(elm$browser$Reader$TraceData$FrameDict$get, parentFrameId, stackUI.stackFrames)));
		var _n0 = A2(
			elm$core$Maybe$andThen,
			function ($) {
				return $.childFrame;
			},
			expr);
		if (_n0.$ === 'Just') {
			var childFrame = _n0.a;
			var evaluatedFrame = elm$browser$Reader$TraceData$evaluate(childFrame);
			var newStackFrames = function () {
				var setExprChildFrameCache = function (e) {
					return _Utils_update(
						e,
						{
							childFrame: elm$core$Maybe$Just(
								elm$browser$Reader$TraceData$Evaluated(evaluatedFrame))
						});
				};
				return A3(
					elm$browser$Reader$TraceData$FrameDict$update,
					parentFrameId,
					function (parentFrameData) {
						var newExprs = A3(elm$browser$Reader$SourceMap$ExprDict$update, exprId, setExprChildFrameCache, parentFrameData.exprs);
						return _Utils_update(
							parentFrameData,
							{exprs: newExprs});
					},
					stackUI.stackFrames);
			}();
			return A4(
				elm$browser$Reader$StackUI$openChildFrame,
				srcMap,
				_Utils_update(
					stackUI,
					{stackFrames: newStackFrames}),
				parentFrameId,
				evaluatedFrame);
		} else {
			return stackUI;
		}
	});
var elm$browser$Reader$StackUI$checkExpr = F4(
	function (stackUI, frameId, exprId, f) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(
				elm$core$Maybe$map,
				f,
				A2(
					elm$core$Maybe$andThen,
					elm$browser$Reader$SourceMap$ExprDict$get(exprId),
					A2(
						elm$core$Maybe$map,
						function ($) {
							return $.exprs;
						},
						A2(elm$browser$Reader$TraceData$FrameDict$get, frameId, stackUI.stackFrames)))));
	});
var elm$browser$Reader$StackUI$updateExpr = F4(
	function (stackUI, frameId, exprId, updater) {
		return _Utils_update(
			stackUI,
			{
				stackFrames: A3(
					elm$browser$Reader$TraceData$FrameDict$update,
					frameId,
					function (frameInfo) {
						return _Utils_update(
							frameInfo,
							{
								exprs: A3(elm$browser$Reader$SourceMap$ExprDict$update, exprId, updater, frameInfo.exprs)
							});
					},
					stackUI.stackFrames)
			});
	});
var elm$browser$Reader$StackUI$handleExprPin = F3(
	function (stackUI, frameId, exprId) {
		var newStackUI = A4(
			elm$browser$Reader$StackUI$updateExpr,
			stackUI,
			frameId,
			exprId,
			function (expr) {
				return _Utils_update(
					expr,
					{
						model: elm$core$Maybe$Just(
							{
								pinned: !A2(
									elm$core$Maybe$withDefault,
									false,
									A2(
										elm$core$Maybe$map,
										function ($) {
											return $.pinned;
										},
										expr.model)),
								ui: function () {
									var _n0 = expr.model;
									if (_n0.$ === 'Just') {
										var ui = _n0.a.ui;
										return ui;
									} else {
										return elm$browser$Reader$TraceData$Value$toExpando(expr.value);
									}
								}()
							})
					});
			});
		return (!A4(
			elm$browser$Reader$StackUI$checkExpr,
			newStackUI,
			frameId,
			exprId,
			A2(
				elm$core$Basics$composeR,
				function ($) {
					return $.model;
				},
				A2(
					elm$core$Basics$composeR,
					elm$core$Maybe$map(
						function ($) {
							return $.pinned;
						}),
					elm$core$Maybe$withDefault(false))))) ? _Utils_update(
			newStackUI,
			{hoveredExpr: elm$core$Maybe$Nothing}) : newStackUI;
	});
var elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				elm$core$List$cons,
				func(x),
				xs) : A2(
				elm$core$List$cons,
				x,
				A3(elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3(elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _n3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									elm$browser$Debugger$Expando$updateIndex,
									index,
									elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2(elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_n6) {
											var k = _n6.a;
											var v = _n6.b;
											return _Utils_Tuple2(
												A2(elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_n7) {
											var k = _n7.a;
											var v = _n7.b;
											return _Utils_Tuple2(
												k,
												A2(elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2(elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								elm$core$Dict$update,
								field,
								elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3(elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _n10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									elm$browser$Debugger$Expando$updateIndex,
									index,
									elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return elm$core$Maybe$Just(
				A2(elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var elm$browser$Reader$StackUI$handleExprUIMessage = F4(
	function (stackUI, frameId, exprId, expandoMsg) {
		return A4(
			elm$browser$Reader$StackUI$updateExpr,
			stackUI,
			frameId,
			exprId,
			function (expr) {
				return _Utils_update(
					expr,
					{
						model: A2(
							elm$core$Maybe$map,
							function (model) {
								return _Utils_update(
									model,
									{
										ui: A2(elm$browser$Debugger$Expando$update, expandoMsg, model.ui)
									});
							},
							expr.model)
					});
			});
	});
var elm$browser$Reader$StackUI$handleExprUnHover = function (stackUI) {
	return _Utils_update(
		stackUI,
		{hoveredExpr: elm$core$Maybe$Nothing});
};
var elm$browser$Reader$StackUI$handleOpenChildFrame = F4(
	function (stackUI, srcMap, parentId, child) {
		return A4(
			elm$browser$Reader$StackUI$openChildFrame,
			srcMap,
			stackUI,
			parentId,
			elm$browser$Reader$TraceData$Instrumented(child));
	});
var elm$browser$Reader$updateAfterInit = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return model;
			case 'OpenExpr':
				var frameId = msg.a;
				var exprId = msg.b;
				return _Utils_update(
					model,
					{
						stackUI: A4(
							elm$browser$Reader$map1_4(elm$browser$Reader$StackUI$handleExprOpen),
							model.stackUI,
							model.sources,
							frameId,
							exprId)
					});
			case 'PinExpr':
				var frameId = msg.a;
				var exprId = msg.b;
				return _Utils_update(
					model,
					{
						stackUI: A3(
							elm$browser$Reader$map1_3(elm$browser$Reader$StackUI$handleExprPin),
							model.stackUI,
							frameId,
							exprId)
					});
			case 'HoverExpr':
				var frameId = msg.a;
				var exprId = msg.b;
				return _Utils_update(
					model,
					{
						stackUI: A3(
							elm$browser$Reader$map1_3(elm$browser$Reader$StackUI$handleExprHover),
							model.stackUI,
							frameId,
							exprId)
					});
			case 'UnHoverExpr':
				return _Utils_update(
					model,
					{
						stackUI: A2(elm$core$Maybe$map, elm$browser$Reader$StackUI$handleExprUnHover, model.stackUI)
					});
			case 'OpenChildFrame':
				var parentFrameId = msg.a;
				var childFrame = msg.b;
				return _Utils_update(
					model,
					{
						stackUI: A4(
							elm$browser$Reader$map1_4(elm$browser$Reader$StackUI$handleOpenChildFrame),
							model.stackUI,
							model.sources,
							parentFrameId,
							childFrame)
					});
			case 'SelectTopLevelFrame':
				var frameTrace = msg.a;
				return _Utils_update(
					model,
					{
						stackUI: A3(
							elm$browser$Reader$StackUI$adaptFromTrace,
							model.sources,
							model.stackUI,
							elm$browser$Reader$TraceData$Instrumented(frameTrace))
					});
			default:
				var frameId = msg.a;
				var exprId = msg.b;
				var expandoMsg = msg.c;
				return _Utils_update(
					model,
					{
						stackUI: A4(
							elm$browser$Reader$map1_4(elm$browser$Reader$StackUI$handleExprUIMessage),
							model.stackUI,
							frameId,
							exprId,
							expandoMsg)
					});
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$browser$Reader$update = F2(
	function (msg, model) {
		if (model.$ === 'ProgramDataError') {
			var e = model.a;
			return _Utils_Tuple2(
				elm$browser$Reader$ProgramDataError(e),
				elm$core$Platform$Cmd$none);
		} else {
			var data = model.a;
			return _Utils_Tuple2(
				elm$browser$Reader$ProgramDataReceived(
					A2(elm$browser$Reader$updateAfterInit, msg, data)),
				elm$core$Platform$Cmd$none);
		}
	});
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$browser$Reader$Flex$displayFlex = A2(elm$html$Html$Attributes$style, 'display', 'flex');
var elm$browser$Reader$Flex$columnWith = F2(
	function (attrs, contents) {
		return A2(
			elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						elm$browser$Reader$Flex$displayFlex,
						A2(elm$html$Html$Attributes$style, 'flex-direction', 'column')
					]),
				attrs),
			contents);
	});
var elm$browser$Reader$Msg$SelectTopLevelFrame = function (a) {
	return {$: 'SelectTopLevelFrame', a: a};
};
var elm$browser$Reader$SourceMap$Ids$packageIdToString = function (_n0) {
	var str = _n0.a;
	return str;
};
var elm$browser$Reader$SourceMap$Ids$moduleIdToString = function (_n0) {
	var _package = _n0._package;
	var mod = _n0.mod;
	return elm$browser$Reader$SourceMap$Ids$packageIdToString(_package) + ('.' + mod);
};
var elm$browser$Reader$SourceMap$Ids$frameIdToString = function (_n0) {
	var mod = _n0.mod;
	var def = _n0.def;
	var frameIndex = _n0.frameIndex;
	return elm$browser$Reader$SourceMap$Ids$moduleIdToString(mod) + ('.' + (def + (' (subframe #' + (elm$core$String$fromInt(frameIndex) + ')'))));
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$browser$Reader$viewOutlineSidebar = F2(
	function (width, _n0) {
		var numNoninstrumented = _n0.numNoninstrumented;
		var topLevelInstrumented = _n0.topLevelInstrumented;
		var viewFrameLink = function (frame) {
			return A2(
				elm$html$Html$a,
				_List_fromArray(
					[
						elm$html$Html$Attributes$href('#'),
						elm$html$Html$Events$onClick(
						elm$browser$Reader$Msg$SelectTopLevelFrame(frame))
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$browser$Reader$SourceMap$Ids$frameIdToString(frame.sourceId))
					]));
		};
		return A2(
			elm$browser$Reader$Flex$columnWith,
			_List_fromArray(
				[width]),
			_Utils_ap(
				A2(elm$core$List$map, viewFrameLink, topLevelInstrumented),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(numNoninstrumented) + ' noninstrumented frames')
					])));
	});
var elm$browser$Reader$Flex$column = elm$browser$Reader$Flex$columnWith(_List_Nil);
var elm$browser$Reader$Msg$UnHoverExpr = {$: 'UnHoverExpr'};
var elm$browser$Reader$StackUI$onMouseDown = A2(
	elm$html$Html$Events$on,
	'mousedown',
	A2(elm$json$Json$Decode$andThen, _Reader_mouseEventToMessage, elm$json$Json$Decode$value));
var elm$browser$Reader$StackUI$onMouseOver = A2(
	elm$html$Html$Events$on,
	'mouseover',
	A2(elm$json$Json$Decode$andThen, _Reader_mouseEventToMessage, elm$json$Json$Decode$value));
var elm$core$Dict$values = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var elm$browser$Debugger$Expando$viewHeight = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return 1;
			case 'Primitive':
				var stringRep = expando.a;
				return 1;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return isClosed ? 1 : (2 + elm$core$List$sum(
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$viewHeight(maybeKey),
						valueList)));
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isClosed ? 1 : (2 + elm$core$List$sum(
					A2(
						elm$core$List$map,
						function (_n1) {
							var a = _n1.a;
							var b = _n1.b;
							return A2(elm$browser$Debugger$Expando$viewHeight, maybeKey, a) + A2(elm$browser$Debugger$Expando$viewHeight, maybeKey, b);
						},
						keyValuePairs)));
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return isClosed ? 1 : (2 + elm$core$List$sum(
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$viewHeight(maybeKey),
						elm$core$Dict$values(valueDict))));
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return isClosed ? 1 : (1 + elm$core$List$sum(
					A2(
						elm$core$List$map,
						elm$browser$Debugger$Expando$viewHeight(maybeKey),
						valueList)));
		}
	});
var elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var elm$browser$Debugger$Expando$Key = {$: 'Key'};
var elm$browser$Debugger$Expando$None = {$: 'None'};
var elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var elm$browser$Debugger$Expando$Value = {$: 'Value'};
var elm$browser$Debugger$Expando$blue = A2(elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'color', '#777'),
				A2(elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2(elm$html$Html$Attributes$style, 'width', '2ch'),
				A2(elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(arrow)
			]));
};
var elm$browser$Debugger$Expando$purple = A2(elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2(elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				elm$core$List$cons,
				arrow,
				A2(
					elm$core$List$cons,
					A2(
						elm$html$Html$span,
						_List_fromArray(
							[elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								elm$html$Html$text(key)
							])),
					A2(
						elm$core$List$cons,
						elm$html$Html$text(' = '),
						description)));
		}
	});
var elm$browser$Debugger$Expando$red = A2(elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + (elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + (elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + (elm$core$String$fromInt(n) + ')');
		}
	});
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$length = _String_length;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			elm$core$String$slice,
			-n,
			elm$core$String$length(string),
			string);
	});
var elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return (elm$core$String$length(str) <= 18) ? str : (A2(elm$core$String$left, 8, str) + ('...' + A2(elm$core$String$right, 8, str)));
};
var elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							elm$html$Html$text('…}')
						]));
			} else {
				var _n1 = A3(elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _n1.a;
				var otherHtmls = _n1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						elm$core$List$cons,
						elm$html$Html$text(starter),
						A2(
							elm$core$List$cons,
							A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		elm$core$String$length(str),
		_List_fromArray(
			[
				elm$html$Html$text(str)
			]));
};
var elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			elm$core$Dict$keys(record));
	} else {
		return elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					elm$browser$Debugger$Expando$seqTypeToString,
					elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + (elm$core$String$fromInt(
					elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return elm$browser$Debugger$Expando$viewTinyHelp(
					A2(elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + (elm$core$String$fromInt(
								elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				elm$html$Html$text('{}')
			])) : A3(
		elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		elm$core$Dict$toList(record));
};
var elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						elm$html$Html$text(' }')
					]));
		} else {
			var _n1 = entries.a;
			var field = _n1.a;
			var value = _n1.b;
			var rest = entries.b;
			var fieldLen = elm$core$String$length(field);
			var _n2 = elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _n2.a;
			var valueHtmls = _n2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							elm$html$Html$text(', … }')
						]));
			} else {
				var _n3 = A3(elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _n3.a;
				var otherHtmls = _n3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						elm$core$List$cons,
						elm$html$Html$text(starter),
						A2(
							elm$core$List$cons,
							A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										elm$html$Html$text(field)
									])),
							A2(
								elm$core$List$cons,
								elm$html$Html$text(' = '),
								A2(
									elm$core$List$cons,
									A2(elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					elm$html$Html$div,
					elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					elm$html$Html$div,
					elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								elm$html$Html$span,
								_List_fromArray(
									[elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4(elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3(elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3(elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4(elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			elm$core$List$map,
			A2(elm$core$Basics$composeL, elm$core$Tuple$second, elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _n7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_n7.a.$ === 'Nothing') {
				if (!_n7.b.b) {
					var _n8 = _n7.a;
					return _List_fromArray(
						[
							elm$html$Html$text('()')
						]);
				} else {
					var _n9 = _n7.a;
					var _n10 = _n7.b;
					var x = _n10.a;
					var xs = _n10.b;
					return A2(
						elm$core$List$cons,
						elm$html$Html$text('( '),
						A2(
							elm$core$List$cons,
							A2(elm$html$Html$span, _List_Nil, x),
							A3(
								elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											elm$core$List$cons,
											elm$html$Html$text(', '),
											A2(
												elm$core$List$cons,
												A2(elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_n7.b.b) {
					var name = _n7.a.a;
					return _List_fromArray(
						[
							elm$html$Html$text(name)
						]);
				} else {
					var name = _n7.a.a;
					var _n11 = _n7.b;
					var x = _n11.a;
					var xs = _n11.b;
					return A2(
						elm$core$List$cons,
						elm$html$Html$text(name + ' '),
						A2(
							elm$core$List$cons,
							A2(elm$html$Html$span, _List_Nil, x),
							A3(
								elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											elm$core$List$cons,
											elm$html$Html$text(' '),
											A2(
												elm$core$List$cons,
												A2(elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _n4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					elm$core$Maybe$Nothing,
					A2(elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								elm$core$Maybe$Nothing,
								A2(elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								elm$core$Maybe$Nothing,
								A2(elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								elm$core$Maybe$Just(isClosed),
								isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									elm$html$Html$map,
									A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, 0),
									elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						elm$core$Maybe$Just(isClosed),
						isClosed ? A2(elm$html$Html$div, _List_Nil, _List_Nil) : elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _n4.a;
		var openHtml = _n4.b;
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			elm$html$Html$map,
			A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$None, index),
			A2(
				elm$browser$Debugger$Expando$view,
				elm$core$Maybe$Just(
					elm$core$String$fromInt(index)),
				value));
	});
var elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + (elm$core$String$fromInt(
			elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								elm$html$Html$text(starter)
							]))),
					isClosed ? elm$html$Html$text('') : elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _n2) {
		var key = _n2.a;
		var value = _n2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					elm$html$Html$map,
					A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Value, index),
					A2(
						elm$browser$Debugger$Expando$view,
						elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					elm$html$Html$map,
					A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Value, index),
					A2(
						elm$browser$Debugger$Expando$view,
						elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$map,
							A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Key, index),
							A2(
								elm$browser$Debugger$Expando$view,
								elm$core$Maybe$Just('key'),
								key)),
							A2(
							elm$html$Html$map,
							A2(elm$browser$Debugger$Expando$Index, elm$browser$Debugger$Expando$Value, index),
							A2(
								elm$browser$Debugger$Expando$view,
								elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _n1 = isClosed ? _Utils_Tuple3(
			elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			elm$html$Html$text(''),
			elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					elm$html$Html$text('{')
				]),
			elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				elm$html$Html$div,
				elm$browser$Debugger$Expando$leftPad(
					elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						elm$html$Html$text('}')
					])));
		var start = _n1.a;
		var middle = _n1.b;
		var end = _n1.c;
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var elm$browser$Debugger$Expando$viewRecordEntry = function (_n0) {
	var field = _n0.a;
	var value = _n0.b;
	return A2(
		elm$html$Html$map,
		elm$browser$Debugger$Expando$Field(field),
		A2(
			elm$browser$Debugger$Expando$view,
			elm$core$Maybe$Just(field),
			value));
};
var elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(
			elm$core$List$map,
			elm$browser$Debugger$Expando$viewRecordEntry,
			elm$core$Dict$toList(record)));
};
var elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			elm$browser$Debugger$Expando$seqTypeToString,
			elm$core$List$length(valueList),
			seqType);
		return A2(
			elm$html$Html$div,
			elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								elm$html$Html$text(starter)
							]))),
					isClosed ? elm$html$Html$text('') : elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var elm$browser$Reader$Msg$ExprUIMsg = F3(
	function (a, b, c) {
		return {$: 'ExprUIMsg', a: a, b: b, c: c};
	});
var elm$browser$Reader$Msg$HoverExpr = F2(
	function (a, b) {
		return {$: 'HoverExpr', a: a, b: b};
	});
var elm$core$String$fromFloat = _String_fromNumber;
var elm$html$Html$Events$onMouseOut = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseout',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseover',
		elm$json$Json$Decode$succeed(msg));
};
var elm$browser$Reader$StackUI$viewExprUI = function (_n0) {
	var hovered = _n0.hovered;
	var y = _n0.y;
	var frameId = _n0.frameId;
	var exprId = _n0.exprId;
	var ui = _n0.ui;
	var _n1 = hovered ? _Utils_Tuple2(
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('elm-reader-expr-ui--hovered')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('elm-reader-expr-ui--hovered-rightborder')
					]),
				_List_Nil)
			])) : _Utils_Tuple2(
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('elm-reader-expr-ui-rightborder')
					]),
				_List_Nil)
			]));
	var hoverClass = _n1.a;
	var hoverBorder = _n1.b;
	return A2(
		elm$html$Html$div,
		_Utils_ap(
			hoverClass,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('elm-reader-expr-ui'),
					A2(
					elm$html$Html$Attributes$style,
					'top',
					elm$core$String$fromFloat(1.1 * y) + 'em'),
					elm$html$Html$Events$onMouseOver(
					A2(elm$browser$Reader$Msg$HoverExpr, frameId, exprId)),
					elm$html$Html$Events$onMouseOut(elm$browser$Reader$Msg$UnHoverExpr)
				])),
		A2(
			elm$core$List$cons,
			A2(
				elm$html$Html$map,
				A2(elm$browser$Reader$Msg$ExprUIMsg, frameId, exprId),
				A2(elm$browser$Debugger$Expando$view, elm$core$Maybe$Nothing, ui)),
			hoverBorder));
};
var elm$browser$Reader$StackUI$StackTree$toOpenFrame = function (stackTree) {
	if (stackTree.$ === 'StackTreeI') {
		var first = stackTree.a.first;
		return elm$browser$Reader$StackUI$OpenFrame$Instrumented(first);
	} else {
		var first = stackTree.a.first;
		var openChildIndex = stackTree.a.openChildIndex;
		var _n1 = first;
		var id = _n1.a;
		var subframes = _n1.b;
		return A3(elm$browser$Reader$StackUI$OpenFrame$NonInstrumented, id, openChildIndex, subframes);
	}
};
var elm$browser$Reader$StackUI$StackTree$map = F2(
	function (func, stackTree) {
		return A2(
			elm$core$List$cons,
			func(
				elm$browser$Reader$StackUI$StackTree$toOpenFrame(stackTree)),
			function () {
				var _n0 = elm$browser$Reader$StackUI$StackTree$getOpenChild(stackTree);
				if (_n0.$ === 'Nothing') {
					return _List_Nil;
				} else {
					var st = _n0.a;
					return A2(elm$browser$Reader$StackUI$StackTree$map, func, st);
				}
			}());
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var elm$core$List$sortBy = _List_sortBy;
var elm$browser$Reader$StackUI$viewDetailsSidebar = function (stackUI) {
	var isHovered = function () {
		var _n5 = stackUI.hoveredExpr;
		if (_n5.$ === 'Just') {
			var _n6 = _n5.a;
			var hoveredFrameId = _n6.a;
			var hoveredExprId = _n6.b;
			return F2(
				function (frameId, exprId) {
					return A2(elm$browser$Reader$TraceData$frameIdsEqual, frameId, hoveredFrameId) && _Utils_eq(exprId, hoveredExprId);
				});
		} else {
			return F2(
				function (_n7, _n8) {
					return false;
				});
		}
	}();
	var displayedExprs = A2(
		elm$core$List$map,
		elm$browser$Reader$StackUI$viewExprUI,
		A3(
			elm$core$List$foldl,
			F2(
				function (exprViewInfo, _n4) {
					var prevElems = _n4.a;
					var bottomOfPrev = _n4.b;
					var topOfThis = A2(elm$core$Basics$max, bottomOfPrev + 1, exprViewInfo.y);
					return _Utils_Tuple2(
						A2(
							elm$core$List$cons,
							_Utils_update(
								exprViewInfo,
								{y: topOfThis}),
							prevElems),
						topOfThis + A2(elm$browser$Debugger$Expando$viewHeight, elm$core$Maybe$Nothing, exprViewInfo.ui));
				}),
			_Utils_Tuple2(_List_Nil, 0),
			A2(
				elm$core$List$sortBy,
				function (_n3) {
					var y = _n3.y;
					return y;
				},
				A2(
					elm$core$List$concatMap,
					elm$core$Basics$identity,
					A2(
						elm$browser$Reader$StackUI$StackTree$map,
						function (openFrame) {
							var frameId = elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf(openFrame);
							var _n0 = A2(elm$browser$Reader$TraceData$FrameDict$get, frameId, stackUI.stackFrames);
							if (_n0.$ === 'Nothing') {
								return _List_Nil;
							} else {
								var topY = _n0.a.topY;
								var exprs = _n0.a.exprs;
								return A2(
									elm$core$List$filterMap,
									function (_n1) {
										var exprId = _n1.a;
										var line = _n1.b.line;
										var model = _n1.b.model;
										if (model.$ === 'Just') {
											var pinned = model.a.pinned;
											var ui = model.a.ui;
											return (pinned || A2(isHovered, frameId, exprId)) ? elm$core$Maybe$Just(
												{
													exprId: exprId,
													frameId: frameId,
													hovered: A2(isHovered, frameId, exprId),
													pinned: pinned,
													ui: ui,
													y: topY + line
												}) : elm$core$Maybe$Nothing;
										} else {
											return elm$core$Maybe$Nothing;
										}
									},
									elm$browser$Reader$SourceMap$ExprDict$toList(exprs));
							}
						},
						stackUI.stackTree)))).a);
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('elm-reader-details')
			]),
		displayedExprs);
};
var elm$browser$Reader$Msg$NoOp = {$: 'NoOp'};
var elm$browser$Reader$Msg$OpenChildFrame = F2(
	function (a, b) {
		return {$: 'OpenChildFrame', a: a, b: b};
	});
var elm$browser$Reader$StackUI$frameLinePadding = 0.5;
var elm$browser$Reader$StackUI$RenderedFrameMap$get = F2(
	function (frameId, _n0) {
		var map = _n0.a;
		return A2(elm$browser$Reader$SourceMap$FrameDict$get, frameId, map);
	});
var elm$core$Array$length = function (_n0) {
	var len = _n0.a;
	return len;
};
var elm$core$String$toInt = _String_toInt;
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var elm$browser$Reader$StackUI$viewOpenFrame = F2(
	function (stackUI, openFrame) {
		var runtimeId = elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf(openFrame);
		var numRuntimeId = runtimeId.a;
		var _n0 = A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(1, 1),
			A2(
				elm$core$Maybe$map,
				function (f) {
					return _Utils_Tuple2(f.topY, f.height);
				},
				A2(elm$browser$Reader$TraceData$FrameDict$get, runtimeId, stackUI.stackFrames)));
		var topY = _n0.a;
		var height = _n0.b;
		var frameWrapper = elm$html$Html$div(
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('elm-reader-frame'),
					elm$html$Html$Attributes$class(
					'elm-reader-frame-' + elm$core$String$fromInt(numRuntimeId)),
					A2(
					elm$html$Html$Attributes$style,
					'top',
					elm$core$String$fromFloat(1.1 * (topY - elm$browser$Reader$StackUI$frameLinePadding)) + 'em'),
					A2(
					elm$html$Html$Attributes$style,
					'height',
					elm$core$String$fromFloat(1.1 * height) + 'em')
				]));
		if (openFrame.$ === 'NonInstrumented') {
			var idx = openFrame.b;
			var subframes = openFrame.c;
			return frameWrapper(
				_List_fromArray(
					[
						elm$html$Html$text('This library function created '),
						elm$html$Html$text(
						elm$core$String$fromInt(
							elm$core$Array$length(subframes))),
						elm$html$Html$text(' sub-frames.'),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						elm$html$Html$text('Showing frame '),
						A2(
						elm$html$Html$input,
						_List_fromArray(
							[
								elm$html$Html$Attributes$value(
								elm$core$String$fromInt(idx)),
								elm$html$Html$Attributes$type_('number'),
								elm$html$Html$Events$onInput(
								function (value) {
									var _n2 = A2(
										elm$core$Maybe$andThen,
										function (i) {
											return A2(elm$core$Array$get, i, subframes);
										},
										elm$core$String$toInt(value));
									if (_n2.$ === 'Just') {
										var subFrameData = _n2.a;
										return A2(elm$browser$Reader$Msg$OpenChildFrame, runtimeId, subFrameData);
									} else {
										return elm$browser$Reader$Msg$NoOp;
									}
								})
							]),
						_List_Nil),
						elm$html$Html$text(' out of '),
						elm$html$Html$text(
						elm$core$String$fromInt(
							elm$core$Array$length(subframes)))
					]));
		} else {
			var sourceId = openFrame.a.sourceId;
			var _n3 = A2(elm$browser$Reader$StackUI$RenderedFrameMap$get, sourceId, stackUI.renderedFrames);
			if (_n3.$ === 'Just') {
				var html = _n3.a.html;
				return frameWrapper(
					_List_fromArray(
						[html]));
			} else {
				return frameWrapper(
					_List_fromArray(
						[
							elm$html$Html$text('Frame failed to render -- it is not present in RenderedFrameMap!')
						]));
			}
		}
	});
var elm$browser$Reader$StackUI$cssRuleForExprs = F2(
	function (exprs, rule) {
		if (elm$core$List$isEmpty(exprs)) {
			return _List_Nil;
		} else {
			var selector = A2(
				elm$core$String$join,
				', ',
				A2(
					elm$core$List$map,
					function (_n0) {
						var _n1 = _n0.a;
						var frameId = _n1.a;
						var exprId = _n0.b.a;
						return '.elm-reader-frame-' + (elm$core$String$fromInt(frameId) + (' .elm-reader-expr-' + elm$core$String$fromInt(exprId)));
					},
					exprs));
			return _List_fromArray(
				[
					elm$html$Html$text(selector),
					elm$html$Html$text(rule)
				]);
		}
	});
var elm$browser$Reader$StackUI$deadExprsCSSRule = ' {\n  color: #bbb;\n  background-color: none;\n}\n';
var elm$browser$Reader$StackUI$functionCallExprsCSSRule = ' {\n    cursor: pointer;\n}\n';
var elm$browser$Reader$StackUI$hoveredExprCSSRule = ' {\n  border-radius: 3px;\n  background-color: rgb(232, 232, 240) !important;\n}\n';
var elm$browser$Reader$StackUI$openFunctionCallExprsCSSRule = ' {\n  border-radius: 3px;\n  text-decoration: underline;\n  background-color: rgba(0,0,0,0.07);\n}\n';
var elm$browser$Reader$StackUI$StackTree$isOpen = F2(
	function (frameId, stackTree) {
		isOpen:
		while (true) {
			if (A2(
				elm$browser$Reader$TraceData$frameIdsEqual,
				frameId,
				elm$browser$Reader$StackUI$StackTree$frameIdOf(stackTree))) {
				return true;
			} else {
				var _n0 = elm$browser$Reader$StackUI$StackTree$getOpenChild(stackTree);
				if (_n0.$ === 'Nothing') {
					return false;
				} else {
					var child = _n0.a;
					var $temp$frameId = frameId,
						$temp$stackTree = child;
					frameId = $temp$frameId;
					stackTree = $temp$stackTree;
					continue isOpen;
				}
			}
		}
	});
var elm$browser$Reader$TraceData$frameIdOfThunk = function (frame) {
	if (frame.$ === 'Evaluated') {
		var f = frame.a;
		return elm$browser$Reader$TraceData$frameIdOf(f);
	} else {
		var id = frame.a;
		return id;
	}
};
var elm$browser$Reader$StackUI$viewStyle = function (stackUI) {
	var previewedExprStyle = function () {
		var _n8 = stackUI.hoveredExpr;
		if (_n8.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var _n9 = _n8.a;
			var _n10 = _n9.a;
			var frameId = _n10.a;
			var exprId = _n9.b.a;
			var selector = '.elm-reader-frame-' + (elm$core$String$fromInt(frameId) + (' .elm-reader-expr-' + elm$core$String$fromInt(exprId)));
			return _List_fromArray(
				[
					elm$html$Html$text(selector),
					elm$html$Html$text(elm$browser$Reader$StackUI$hoveredExprCSSRule)
				]);
		}
	}();
	var exprsWithChildFrames = A2(
		elm$core$List$concatMap,
		function (x) {
			return x;
		},
		A2(
			elm$browser$Reader$StackUI$StackTree$map,
			function (openFrame) {
				var runtimeId = elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf(openFrame);
				var _n6 = A2(elm$browser$Reader$TraceData$FrameDict$get, runtimeId, stackUI.stackFrames);
				if (_n6.$ === 'Just') {
					var exprs = _n6.a.exprs;
					return A2(
						elm$core$List$filterMap,
						function (_n7) {
							var exprId = _n7.a;
							var expr = _n7.b;
							return A2(
								elm$core$Maybe$map,
								function (child) {
									return _Utils_Tuple3(runtimeId, exprId, child);
								},
								expr.childFrame);
						},
						elm$browser$Reader$SourceMap$ExprDict$toList(exprs));
				} else {
					return _List_Nil;
				}
			},
			stackUI.stackTree));
	var functionCallExprs = A2(
		elm$core$List$map,
		function (_n5) {
			var runtimeId = _n5.a;
			var exprId = _n5.b;
			var child = _n5.c;
			return _Utils_Tuple2(runtimeId, exprId);
		},
		exprsWithChildFrames);
	var openFunctionCallExprs = A2(
		elm$core$List$map,
		function (_n4) {
			var runtimeId = _n4.a;
			var exprId = _n4.b;
			var child = _n4.c;
			return _Utils_Tuple2(runtimeId, exprId);
		},
		A2(
			elm$core$List$filter,
			function (_n3) {
				var runtimeId = _n3.a;
				var exprId = _n3.b;
				var child = _n3.c;
				return A2(
					elm$browser$Reader$StackUI$StackTree$isOpen,
					elm$browser$Reader$TraceData$frameIdOfThunk(child),
					stackUI.stackTree);
			},
			exprsWithChildFrames));
	var displayedDeadExprs = A2(
		elm$core$List$concatMap,
		function (maybeExpr) {
			if (maybeExpr.$ === 'Just') {
				var _n2 = maybeExpr.a;
				var frameId = _n2.a;
				var exprIds = _n2.b;
				return A2(
					elm$core$List$map,
					function (exprId) {
						return _Utils_Tuple2(frameId, exprId);
					},
					elm$browser$Reader$SourceMap$ExprDict$keys(exprIds));
			} else {
				return _List_Nil;
			}
		},
		A2(
			elm$browser$Reader$StackUI$StackTree$map,
			function (openFrame) {
				var runtimeId = elm$browser$Reader$StackUI$OpenFrame$runtimeFrameIdOf(openFrame);
				var _n0 = A2(elm$browser$Reader$TraceData$FrameDict$get, runtimeId, stackUI.stackFrames);
				if (_n0.$ === 'Just') {
					var deadExprs = _n0.a.deadExprs;
					return elm$core$Maybe$Just(
						_Utils_Tuple2(runtimeId, deadExprs));
				} else {
					return elm$core$Maybe$Nothing;
				}
			},
			stackUI.stackTree));
	return _Utils_ap(
		previewedExprStyle,
		_Utils_ap(
			A2(elm$browser$Reader$StackUI$cssRuleForExprs, displayedDeadExprs, elm$browser$Reader$StackUI$deadExprsCSSRule),
			_Utils_ap(
				A2(elm$browser$Reader$StackUI$cssRuleForExprs, functionCallExprs, elm$browser$Reader$StackUI$functionCallExprsCSSRule),
				A2(elm$browser$Reader$StackUI$cssRuleForExprs, openFunctionCallExprs, elm$browser$Reader$StackUI$openFunctionCallExprsCSSRule))));
};
var elm$browser$Reader$StackUI$StackTree$lastOpenChild = function (stackTree) {
	lastOpenChild:
	while (true) {
		var _n0 = elm$browser$Reader$StackUI$StackTree$getOpenChild(stackTree);
		if (_n0.$ === 'Nothing') {
			return elm$browser$Reader$StackUI$StackTree$frameIdOf(stackTree);
		} else {
			var child = _n0.a;
			var $temp$stackTree = child;
			stackTree = $temp$stackTree;
			continue lastOpenChild;
		}
	}
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$browser$Reader$StackUI$viewStackUI = function (stackUI) {
	var stackHeight = A2(
		elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			elm$core$Maybe$map,
			function (_n0) {
				var topY = _n0.topY;
				var height = _n0.height;
				var linesToMiddleOfLastFrame = elm$core$String$fromFloat(1.1 * (topY + ((height / 2) | 0))) + 'em';
				var total = 'calc(' + (linesToMiddleOfLastFrame + (' + max(50vh, 25vh + ' + (elm$core$String$fromFloat(1.1 * ((height / 2) | 0)) + 'em))')));
				return _List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'height', total)
					]);
			},
			A2(
				elm$browser$Reader$TraceData$FrameDict$get,
				elm$browser$Reader$StackUI$StackTree$lastOpenChild(stackUI.stackTree),
				stackUI.stackFrames)));
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('elm-reader-container')
			]),
		_List_fromArray(
			[
				elm$browser$Reader$StackUI$viewDetailsSidebar(stackUI),
				A2(
				elm$html$Html$div,
				_Utils_ap(
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('elm-reader-stack'),
							elm$html$Html$Events$onMouseOut(elm$browser$Reader$Msg$UnHoverExpr),
							elm$browser$Reader$StackUI$onMouseOver,
							elm$browser$Reader$StackUI$onMouseDown
						]),
					stackHeight),
				A2(
					elm$browser$Reader$StackUI$StackTree$map,
					elm$browser$Reader$StackUI$viewOpenFrame(stackUI),
					stackUI.stackTree)),
				A3(
				elm$html$Html$node,
				'style',
				_List_Nil,
				elm$browser$Reader$StackUI$viewStyle(stackUI))
			]));
};
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$browser$Reader$viewAfterInit = function (_n0) {
	var sources = _n0.sources;
	var tracesOutline = _n0.tracesOutline;
	var stackUI = _n0.stackUI;
	var mode = _n0.mode;
	var outlineSidebar = function () {
		if (mode.$ === 'ModeBrowse') {
			return _List_fromArray(
				[
					A2(
					elm$browser$Reader$viewOutlineSidebar,
					A2(elm$html$Html$Attributes$style, 'flex', '2'),
					tracesOutline)
				]);
		} else {
			return _List_Nil;
		}
	}();
	var heading = function (rest) {
		if (mode.$ === 'ModeBrowse') {
			return elm$browser$Reader$Flex$column(
				_List_fromArray(
					[
						A2(
						elm$html$Html$h1,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('Elm Reader')
							])),
						rest
					]));
		} else {
			return rest;
		}
	};
	return heading(
		A2(
			elm$html$Html$div,
			_List_Nil,
			_Utils_ap(
				outlineSidebar,
				function () {
					if (stackUI.$ === 'Just') {
						var stackUI_ = stackUI.a;
						return _List_fromArray(
							[
								elm$browser$Reader$StackUI$viewStackUI(stackUI_)
							]);
					} else {
						return _List_Nil;
					}
				}())));
};
var elm$browser$Reader$view = function (generalModel) {
	if (generalModel.$ === 'ProgramDataReceived') {
		var model = generalModel.a;
		return elm$browser$Reader$viewAfterInit(model);
	} else {
		var err = generalModel.a;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$pre,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							elm$json$Json$Decode$errorToString(err))
						]))
				]));
	}
};
var elm$browser$Reader$Msg$OpenExpr = F2(
	function (a, b) {
		return {$: 'OpenExpr', a: a, b: b};
	});
var elm$browser$Reader$Msg$PinExpr = F2(
	function (a, b) {
		return {$: 'PinExpr', a: a, b: b};
	});
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var elm$json$Json$Decode$fail = _Json_fail;
var author$project$Main$thenAppend = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F2(
			function (a, b) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "thenAppend",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, a),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, b),
								function () {
									var temp0 = elm$core$Array$append;
									var temp1 = b;
									var temp2 = a;
									return A3(
										_Reader_recordCall,
										3,
										temp0,
										function (_n1) {
											return A2(temp0, temp1, temp2);
										});
								}()));
					});
			})));
var elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			elm$core$Array$initialize,
			n,
			function (_n0) {
				return e;
			});
	});
var author$project$Main$initialModel = A2(
	_Reader_recordFrame,
	'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "initialModel",     "frame_index": 0 }',
	function (_n0) {
		var items = function () {
			var temp71 = function () {
				var temp69 = author$project$Main$thenAppend;
				var temp70 = function () {
					var temp66 = elm$core$Array$repeat;
					var temp67 = 408;
					var temp68 = A2(_Reader_recordExpr, 53, author$project$Main$Dead);
					return A3(
						_Reader_recordCall,
						51,
						temp66,
						function (_n31) {
							return A2(temp66, temp67, temp68);
						});
				}();
				return A3(
					_Reader_recordCall,
					50,
					temp69,
					function (_n30) {
						return temp69(temp70);
					});
			}();
			var temp72 = function () {
				var temp64 = function () {
					var temp62 = author$project$Main$thenAppend;
					var temp63 = function () {
						var temp59 = elm$core$Array$repeat;
						var temp60 = 1;
						var temp61 = A2(_Reader_recordExpr, 49, author$project$Main$Alive);
						return A3(
							_Reader_recordCall,
							47,
							temp59,
							function (_n29) {
								return A2(temp59, temp60, temp61);
							});
					}();
					return A3(
						_Reader_recordCall,
						46,
						temp62,
						function (_n28) {
							return temp62(temp63);
						});
				}();
				var temp65 = function () {
					var temp57 = function () {
						var temp55 = author$project$Main$thenAppend;
						var temp56 = function () {
							var temp52 = elm$core$Array$repeat;
							var temp53 = 27;
							var temp54 = A2(_Reader_recordExpr, 45, author$project$Main$Dead);
							return A3(
								_Reader_recordCall,
								43,
								temp52,
								function (_n27) {
									return A2(temp52, temp53, temp54);
								});
						}();
						return A3(
							_Reader_recordCall,
							42,
							temp55,
							function (_n26) {
								return temp55(temp56);
							});
					}();
					var temp58 = function () {
						var temp50 = function () {
							var temp48 = author$project$Main$thenAppend;
							var temp49 = function () {
								var temp45 = elm$core$Array$repeat;
								var temp46 = 1;
								var temp47 = A2(_Reader_recordExpr, 41, author$project$Main$Alive);
								return A3(
									_Reader_recordCall,
									39,
									temp45,
									function (_n25) {
										return A2(temp45, temp46, temp47);
									});
							}();
							return A3(
								_Reader_recordCall,
								38,
								temp48,
								function (_n24) {
									return temp48(temp49);
								});
						}();
						var temp51 = function () {
							var temp43 = function () {
								var temp41 = author$project$Main$thenAppend;
								var temp42 = function () {
									var temp38 = elm$core$Array$repeat;
									var temp39 = 29;
									var temp40 = A2(_Reader_recordExpr, 37, author$project$Main$Dead);
									return A3(
										_Reader_recordCall,
										35,
										temp38,
										function (_n23) {
											return A2(temp38, temp39, temp40);
										});
								}();
								return A3(
									_Reader_recordCall,
									34,
									temp41,
									function (_n22) {
										return temp41(temp42);
									});
							}();
							var temp44 = function () {
								var temp36 = function () {
									var temp34 = author$project$Main$thenAppend;
									var temp35 = function () {
										var temp31 = elm$core$Array$repeat;
										var temp32 = 3;
										var temp33 = A2(_Reader_recordExpr, 33, author$project$Main$Alive);
										return A3(
											_Reader_recordCall,
											31,
											temp31,
											function (_n21) {
												return A2(temp31, temp32, temp33);
											});
									}();
									return A3(
										_Reader_recordCall,
										30,
										temp34,
										function (_n20) {
											return temp34(temp35);
										});
								}();
								var temp37 = function () {
									var temp29 = function () {
										var temp27 = author$project$Main$thenAppend;
										var temp28 = function () {
											var temp24 = elm$core$Array$repeat;
											var temp25 = 111;
											var temp26 = A2(_Reader_recordExpr, 29, author$project$Main$Dead);
											return A3(
												_Reader_recordCall,
												27,
												temp24,
												function (_n19) {
													return A2(temp24, temp25, temp26);
												});
										}();
										return A3(
											_Reader_recordCall,
											26,
											temp27,
											function (_n18) {
												return temp27(temp28);
											});
									}();
									var temp30 = function () {
										var temp22 = function () {
											var temp20 = author$project$Main$thenAppend;
											var temp21 = function () {
												var temp17 = elm$core$Array$repeat;
												var temp18 = 2;
												var temp19 = A2(_Reader_recordExpr, 25, author$project$Main$Alive);
												return A3(
													_Reader_recordCall,
													23,
													temp17,
													function (_n17) {
														return A2(temp17, temp18, temp19);
													});
											}();
											return A3(
												_Reader_recordCall,
												22,
												temp20,
												function (_n16) {
													return temp20(temp21);
												});
										}();
										var temp23 = function () {
											var temp15 = function () {
												var temp13 = author$project$Main$thenAppend;
												var temp14 = function () {
													var temp10 = elm$core$Array$repeat;
													var temp11 = 29;
													var temp12 = A2(_Reader_recordExpr, 21, author$project$Main$Dead);
													return A3(
														_Reader_recordCall,
														19,
														temp10,
														function (_n15) {
															return A2(temp10, temp11, temp12);
														});
												}();
												return A3(
													_Reader_recordCall,
													18,
													temp13,
													function (_n14) {
														return temp13(temp14);
													});
											}();
											var temp16 = function () {
												var temp8 = function () {
													var temp6 = author$project$Main$thenAppend;
													var temp7 = function () {
														var temp3 = elm$core$Array$repeat;
														var temp4 = 1;
														var temp5 = A2(_Reader_recordExpr, 17, author$project$Main$Alive);
														return A3(
															_Reader_recordCall,
															15,
															temp3,
															function (_n13) {
																return A2(temp3, temp4, temp5);
															});
													}();
													return A3(
														_Reader_recordCall,
														14,
														temp6,
														function (_n12) {
															return temp6(temp7);
														});
												}();
												var temp9 = function () {
													var temp0 = elm$core$Array$repeat;
													var temp1 = 138;
													var temp2 = A2(_Reader_recordExpr, 13, author$project$Main$Dead);
													return A3(
														_Reader_recordCall,
														11,
														temp0,
														function (_n11) {
															return A2(temp0, temp1, temp2);
														});
												}();
												return A3(
													_Reader_recordCall,
													10,
													temp8,
													function (_n10) {
														return temp8(temp9);
													});
											}();
											return A3(
												_Reader_recordCall,
												9,
												temp15,
												function (_n9) {
													return temp15(temp16);
												});
										}();
										return A3(
											_Reader_recordCall,
											8,
											temp22,
											function (_n8) {
												return temp22(temp23);
											});
									}();
									return A3(
										_Reader_recordCall,
										7,
										temp29,
										function (_n7) {
											return temp29(temp30);
										});
								}();
								return A3(
									_Reader_recordCall,
									6,
									temp36,
									function (_n6) {
										return temp36(temp37);
									});
							}();
							return A3(
								_Reader_recordCall,
								5,
								temp43,
								function (_n5) {
									return temp43(temp44);
								});
						}();
						return A3(
							_Reader_recordCall,
							4,
							temp50,
							function (_n4) {
								return temp50(temp51);
							});
					}();
					return A3(
						_Reader_recordCall,
						3,
						temp57,
						function (_n3) {
							return temp57(temp58);
						});
				}();
				return A3(
					_Reader_recordCall,
					2,
					temp64,
					function (_n2) {
						return temp64(temp65);
					});
			}();
			return A3(
				_Reader_recordCall,
				1,
				temp71,
				function (_n1) {
					return temp71(temp72);
				});
		}();
		return A2(
			_Reader_seq,
			A2(_Reader_recordExpr, 1, items),
			A2(
				_Reader_recordExpr,
				54,
				{
					generations: 0,
					grid: A2(
						_Reader_recordExpr,
						56,
						{height: 25, items: items, width: 30}),
					running: A2(_Reader_recordExpr, 60, false)
				}));
	});
var author$project$Main$init = A2(
	_Reader_recordFrame,
	'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "init",     "frame_index": 0 }',
	function (_n0) {
		return A2(
			_Reader_recordExpr,
			0,
			_Utils_Tuple2(
				A2(_Reader_recordExpr, 1, author$project$Main$initialModel),
				A2(_Reader_recordExpr, 2, elm$core$Platform$Cmd$none)));
	});
var author$project$Main$NextGeneration = {$: 'NextGeneration'};
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var elm$time$Time$init = elm$core$Task$succeed(
	A2(elm$time$Time$State, elm$core$Dict$empty, elm$core$Dict$empty));
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$time$Time$addMySub = F2(
	function (_n0, state) {
		var interval = _n0.a;
		var tagger = _n0.b;
		var _n1 = A2(elm$core$Dict$get, interval, state);
		if (_n1.$ === 'Nothing') {
			return A3(
				elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _n1.a;
			return A3(
				elm$core$Dict$insert,
				interval,
				A2(elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$setInterval = _Time_setInterval;
var elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = elm$core$Process$spawn(
				A2(
					elm$time$Time$setInterval,
					interval,
					A2(elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					elm$time$Time$spawnHelp,
					router,
					rest,
					A3(elm$core$Dict$insert, interval, id, processes));
			};
			return A2(elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var elm$time$Time$onEffects = F3(
	function (router, subs, _n0) {
		var processes = _n0.processes;
		var rightStep = F3(
			function (_n6, id, _n7) {
				var spawns = _n7.a;
				var existing = _n7.b;
				var kills = _n7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						elm$core$Task$andThen,
						function (_n5) {
							return kills;
						},
						elm$core$Process$kill(id)));
			});
		var newTaggers = A3(elm$core$List$foldl, elm$time$Time$addMySub, elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _n4) {
				var spawns = _n4.a;
				var existing = _n4.b;
				var kills = _n4.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _n3) {
				var spawns = _n3.a;
				var existing = _n3.b;
				var kills = _n3.c;
				return _Utils_Tuple3(
					spawns,
					A3(elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _n1 = A6(
			elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				elm$core$Dict$empty,
				elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _n1.a;
		var existingDict = _n1.b;
		var killTask = _n1.c;
		return A2(
			elm$core$Task$andThen,
			function (newProcesses) {
				return elm$core$Task$succeed(
					A2(elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _n0 = A2(elm$core$Dict$get, interval, state.taggers);
		if (_n0.$ === 'Nothing') {
			return elm$core$Task$succeed(state);
		} else {
			var taggers = _n0.a;
			var tellTaggers = function (time) {
				return elm$core$Task$sequence(
					A2(
						elm$core$List$map,
						function (tagger) {
							return A2(
								elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$succeed(state);
				},
				A2(elm$core$Task$andThen, tellTaggers, elm$time$Time$now));
		}
	});
var elm$time$Time$subMap = F2(
	function (f, _n0) {
		var interval = _n0.a;
		var tagger = _n0.b;
		return A2(
			elm$time$Time$Every,
			interval,
			A2(elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager(elm$time$Time$init, elm$time$Time$onEffects, elm$time$Time$onSelfMsg, 0, elm$time$Time$subMap);
var elm$time$Time$subscription = _Platform_leaf('Time');
var elm$time$Time$every = F2(
	function (interval, tagger) {
		return elm$time$Time$subscription(
			A2(elm$time$Time$Every, interval, tagger));
	});
var author$project$Main$subscriptions = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		function (model) {
			return A2(
				_Reader_recordFrame,
				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "subscriptions",     "frame_index": 0 }',
				function (_n0) {
					return A2(
						_Reader_seq,
						A2(_Reader_recordExpr, 1, model),
						A2(
							_Reader_recordExpr,
							2,
							function () {
								if (A2(_Reader_recordExpr, 3, model.running)) {
									var temp2 = elm$time$Time$every;
									var temp3 = 100;
									var temp4 = function () {
										var temp0 = elm$core$Basics$always;
										var temp1 = A2(_Reader_recordExpr, 8, author$project$Main$NextGeneration);
										return A3(
											_Reader_recordCall,
											7,
											temp0,
											function (_n2) {
												return temp0(temp1);
											});
									}();
									return A3(
										_Reader_recordCall,
										5,
										temp2,
										function (_n1) {
											return A2(temp2, temp3, temp4);
										});
								} else {
									return A2(_Reader_recordExpr, 9, elm$core$Platform$Sub$none);
								}
							}()));
				});
		}));
var author$project$Main$gridGetAt = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F3(
			function (x, y, g) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "gridGetAt",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, x),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, y),
								A2(
									_Reader_seq,
									A2(_Reader_recordExpr, 3, g),
									function () {
										var i = A2(
											_Reader_recordExpr,
											5,
											x + A2(
												_Reader_recordExpr,
												7,
												y * A2(_Reader_recordExpr, 9, g.width)));
										return A2(
											_Reader_seq,
											A2(_Reader_recordExpr, 5, i),
											function () {
												var temp0 = elm$core$Array$get;
												var temp1 = i;
												var temp2 = A2(_Reader_recordExpr, 13, g.items);
												return A3(
													_Reader_recordCall,
													11,
													temp0,
													function (_n1) {
														return A2(temp0, temp1, temp2);
													});
											}());
									}())));
					});
			})));
var elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_n0.$ === 'SubTree') {
			var subTree = _n0.a;
			var newSub = A4(elm$core$Array$setHelp, shift - elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				elm$core$Elm$JsArray$unsafeSet,
				pos,
				elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _n0.a;
			var newLeaf = A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, values);
			return A3(
				elm$core$Elm$JsArray$unsafeSet,
				pos,
				elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, tail)) : A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4(elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var author$project$Main$gridSetAt = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F4(
			function (x, y, a, g) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "gridSetAt",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, x),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, y),
								A2(
									_Reader_seq,
									A2(_Reader_recordExpr, 3, a),
									A2(
										_Reader_seq,
										A2(_Reader_recordExpr, 4, g),
										function () {
											var i = A2(
												_Reader_recordExpr,
												6,
												x + A2(
													_Reader_recordExpr,
													8,
													y * A2(_Reader_recordExpr, 10, g.width)));
											return A2(
												_Reader_seq,
												A2(_Reader_recordExpr, 6, i),
												A2(
													_Reader_recordExpr,
													12,
													_Utils_update(
														g,
														{
															items: function () {
																var temp0 = elm$core$Array$set;
																var temp1 = i;
																var temp2 = a;
																var temp3 = A2(_Reader_recordExpr, 17, g.items);
																return A3(
																	_Reader_recordCall,
																	14,
																	temp0,
																	function (_n1) {
																		return A3(temp0, temp1, temp2, temp3);
																	});
															}()
														})));
										}()))));
					});
			})));
var author$project$Main$mapAt = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F4(
			function (g, x, y, f) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "mapAt",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, g),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, x),
								A2(
									_Reader_seq,
									A2(_Reader_recordExpr, 3, y),
									A2(
										_Reader_seq,
										A2(_Reader_recordExpr, 4, f),
										A2(
											_Reader_recordExpr,
											5,
											function () {
												var _n1 = function () {
													var temp0 = author$project$Main$gridGetAt;
													var temp1 = x;
													var temp2 = y;
													var temp3 = g;
													return A3(
														_Reader_recordCall,
														6,
														temp0,
														function (_n2) {
															return A3(temp0, temp1, temp2, temp3);
														});
												}();
												if (_n1.$ === 'Just') {
													var cell = _n1.a;
													return A2(
														_Reader_seq,
														A2(_Reader_recordExpr, 11, cell),
														function () {
															var temp6 = author$project$Main$gridSetAt;
															var temp7 = x;
															var temp8 = y;
															var temp9 = function () {
																var temp4 = f;
																var temp5 = cell;
																return A3(
																	_Reader_recordCall,
																	15,
																	temp4,
																	function (_n4) {
																		return temp4(temp5);
																	});
															}();
															var temp10 = g;
															return A3(
																_Reader_recordCall,
																12,
																temp6,
																function (_n3) {
																	return A4(temp6, temp7, temp8, temp9, temp10);
																});
														}());
												} else {
													return g;
												}
											}())))));
					});
			})));
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$Basics$modBy = _Basics_modBy;
var author$project$Main$countLiveNeighbours = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F2(
			function (i, grid) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "countLiveNeighbours",     "frame_index": 3 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, i),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, grid),
								function () {
									var below = A2(
										_Reader_recordExpr,
										4,
										i + A2(_Reader_recordExpr, 6, grid.width));
									return A2(
										_Reader_seq,
										A2(_Reader_recordExpr, 4, below),
										function () {
											var above = A2(
												_Reader_recordExpr,
												9,
												i - A2(_Reader_recordExpr, 11, grid.width));
											return A2(
												_Reader_seq,
												A2(_Reader_recordExpr, 9, above),
												function () {
													var neighbourCoords = function () {
														var temp10 = function () {
															var temp8 = elm$core$List$filter;
															var temp9 = A2(
																_Reader_recordExpr,
																37,
																_Reader_markInstrumented(
																	function (n) {
																		return A2(
																			_Reader_recordFrame,
																			'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "countLiveNeighbours",     "frame_index": 0 }',
																			function (_n10) {
																				return A2(
																					_Reader_seq,
																					A2(_Reader_recordExpr, 2, grid),
																					A2(
																						_Reader_seq,
																						A2(_Reader_recordExpr, 1, i),
																						A2(
																							_Reader_seq,
																							A2(_Reader_recordExpr, 38, n),
																							A2(
																								_Reader_recordExpr,
																								39,
																								function () {
																									var temp6 = elm$core$Basics$abs;
																									var temp7 = A2(
																										_Reader_recordExpr,
																										41,
																										function () {
																											var temp0 = elm$core$Basics$modBy;
																											var temp1 = A2(_Reader_recordExpr, 43, grid.width);
																											var temp2 = n;
																											return A3(
																												_Reader_recordCall,
																												42,
																												temp0,
																												function (_n12) {
																													return A2(temp0, temp1, temp2);
																												});
																										}() - function () {
																											var temp3 = elm$core$Basics$modBy;
																											var temp4 = A2(_Reader_recordExpr, 47, grid.width);
																											var temp5 = i;
																											return A3(
																												_Reader_recordCall,
																												46,
																												temp3,
																												function (_n13) {
																													return A2(temp3, temp4, temp5);
																												});
																										}());
																									return A3(
																										_Reader_recordCall,
																										40,
																										temp6,
																										function (_n11) {
																											return temp6(temp7);
																										});
																								}() <= 1))));
																			});
																	}));
															return A3(
																_Reader_recordCall,
																36,
																temp8,
																function (_n9) {
																	return temp8(temp9);
																});
														}();
														var temp11 = _List_fromArray(
															[
																A2(_Reader_recordExpr, 16, above - 1),
																above,
																A2(_Reader_recordExpr, 20, above + 1),
																A2(_Reader_recordExpr, 23, i - 1),
																A2(_Reader_recordExpr, 26, i + 1),
																A2(_Reader_recordExpr, 29, below - 1),
																below,
																A2(_Reader_recordExpr, 33, below + 1)
															]);
														return A3(
															_Reader_recordCall,
															14,
															temp10,
															function (_n8) {
																return temp10(temp11);
															});
													}();
													return A2(
														_Reader_seq,
														A2(_Reader_recordExpr, 14, neighbourCoords),
														function () {
															var neighbours = function () {
																var temp15 = elm$core$List$map;
																var temp16 = A2(
																	_Reader_recordExpr,
																	53,
																	_Reader_markInstrumented(
																		function (pos) {
																			return A2(
																				_Reader_recordFrame,
																				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "countLiveNeighbours",     "frame_index": 1 }',
																				function (_n6) {
																					return A2(
																						_Reader_seq,
																						A2(_Reader_recordExpr, 2, grid),
																						A2(
																							_Reader_seq,
																							A2(_Reader_recordExpr, 54, pos),
																							function () {
																								var temp12 = elm$core$Array$get;
																								var temp13 = pos;
																								var temp14 = A2(_Reader_recordExpr, 57, grid.items);
																								return A3(
																									_Reader_recordCall,
																									55,
																									temp12,
																									function (_n7) {
																										return A2(temp12, temp13, temp14);
																									});
																							}()));
																				});
																		}));
																var temp17 = neighbourCoords;
																return A3(
																	_Reader_recordCall,
																	52,
																	temp15,
																	function (_n5) {
																		return A2(temp15, temp16, temp17);
																	});
															}();
															return A2(
																_Reader_seq,
																A2(_Reader_recordExpr, 52, neighbours),
																function () {
																	var temp23 = elm$core$List$length;
																	var temp24 = function () {
																		var temp20 = elm$core$List$filter;
																		var temp21 = A2(
																			_Reader_recordExpr,
																			62,
																			_Reader_markInstrumented(
																				function (n) {
																					return A2(
																						_Reader_recordFrame,
																						'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "countLiveNeighbours",     "frame_index": 2 }',
																						function (_n3) {
																							return A2(
																								_Reader_seq,
																								A2(_Reader_recordExpr, 63, n),
																								A2(
																									_Reader_recordExpr,
																									64,
																									_Utils_eq(
																										n,
																										function () {
																											var temp18 = elm$core$Maybe$Just;
																											var temp19 = A2(_Reader_recordExpr, 67, author$project$Main$Alive);
																											return A3(
																												_Reader_recordCall,
																												66,
																												temp18,
																												function (_n4) {
																													return temp18(temp19);
																												});
																										}())));
																						});
																				}));
																		var temp22 = neighbours;
																		return A3(
																			_Reader_recordCall,
																			61,
																			temp20,
																			function (_n2) {
																				return A2(temp20, temp21, temp22);
																			});
																	}();
																	return A3(
																		_Reader_recordCall,
																		60,
																		temp23,
																		function (_n1) {
																			return temp23(temp24);
																		});
																}());
														}());
												}());
										}());
								}()));
					});
			})));
var author$project$Main$nextGenerationAt = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F3(
			function (g, i, cur) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "nextGenerationAt",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, g),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, i),
								A2(
									_Reader_seq,
									A2(_Reader_recordExpr, 3, cur),
									function () {
										var liveNeighbours = function () {
											var temp0 = author$project$Main$countLiveNeighbours;
											var temp1 = i;
											var temp2 = g;
											return A3(
												_Reader_recordCall,
												5,
												temp0,
												function (_n2) {
													return A2(temp0, temp1, temp2);
												});
										}();
										return A2(
											_Reader_seq,
											A2(_Reader_recordExpr, 5, liveNeighbours),
											A2(
												_Reader_recordExpr,
												8,
												function () {
													if (cur.$ === 'Alive') {
														return A2(
															_Reader_recordExpr,
															11,
															A2(
																_Reader_recordExpr,
																12,
																A2(_Reader_recordExpr, 13, liveNeighbours < 2) || A2(_Reader_recordExpr, 16, liveNeighbours > 3)) ? A2(_Reader_recordExpr, 19, author$project$Main$Dead) : A2(_Reader_recordExpr, 20, author$project$Main$Alive));
													} else {
														return A2(
															_Reader_recordExpr,
															22,
															A2(_Reader_recordExpr, 23, liveNeighbours === 3) ? A2(_Reader_recordExpr, 26, author$project$Main$Alive) : A2(_Reader_recordExpr, 27, author$project$Main$Dead));
													}
												}()));
									}())));
					});
			})));
var author$project$Main$nextGeneration = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		function (g) {
			return A2(
				_Reader_recordFrame,
				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "nextGeneration",     "frame_index": 0 }',
				function (_n0) {
					return A2(
						_Reader_seq,
						A2(_Reader_recordExpr, 1, g),
						A2(
							_Reader_recordExpr,
							2,
							_Utils_update(
								g,
								{
									items: function () {
										var temp2 = elm$core$Array$indexedMap;
										var temp3 = function () {
											var temp0 = author$project$Main$nextGenerationAt;
											var temp1 = g;
											return A3(
												_Reader_recordCall,
												5,
												temp0,
												function (_n2) {
													return temp0(temp1);
												});
										}();
										var temp4 = A2(_Reader_recordExpr, 7, g.items);
										return A3(
											_Reader_recordCall,
											4,
											temp2,
											function (_n1) {
												return A2(temp2, temp3, temp4);
											});
									}()
								})));
				});
		}));
var author$project$Main$toggle = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		function (c) {
			return A2(
				_Reader_recordFrame,
				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "toggle",     "frame_index": 0 }',
				function (_n0) {
					return A2(
						_Reader_seq,
						A2(_Reader_recordExpr, 1, c),
						A2(
							_Reader_recordExpr,
							2,
							function () {
								if (c.$ === 'Alive') {
									return A2(_Reader_recordExpr, 5, author$project$Main$Dead);
								} else {
									return A2(_Reader_recordExpr, 7, author$project$Main$Alive);
								}
							}()));
				});
		}));
var elm$core$Basics$neq = _Utils_notEqual;
var author$project$Main$update = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F2(
			function (msg, model) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "update",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, msg),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, model),
								A2(
									_Reader_recordExpr,
									3,
									function () {
										switch (msg.$) {
											case 'ToggleAt':
												var x = msg.a;
												var y = msg.b;
												return A2(
													_Reader_seq,
													A2(_Reader_recordExpr, 6, x),
													A2(
														_Reader_seq,
														A2(_Reader_recordExpr, 7, y),
														A2(
															_Reader_recordExpr,
															8,
															_Utils_Tuple2(
																A2(
																	_Reader_recordExpr,
																	9,
																	_Utils_update(
																		model,
																		{
																			grid: function () {
																				var temp0 = author$project$Main$mapAt;
																				var temp1 = A2(_Reader_recordExpr, 12, model.grid);
																				var temp2 = x;
																				var temp3 = y;
																				var temp4 = A2(_Reader_recordExpr, 16, author$project$Main$toggle);
																				return A3(
																					_Reader_recordCall,
																					11,
																					temp0,
																					function (_n2) {
																						return A4(temp0, temp1, temp2, temp3, temp4);
																					});
																			}()
																		})),
																A2(_Reader_recordExpr, 17, elm$core$Platform$Cmd$none)))));
											case 'ToggleRunning':
												return A2(
													_Reader_recordExpr,
													19,
													_Utils_Tuple2(
														A2(
															_Reader_recordExpr,
															20,
															_Utils_update(
																model,
																{
																	running: function () {
																		var temp5 = elm$core$Basics$not;
																		var temp6 = A2(_Reader_recordExpr, 23, model.running);
																		return A3(
																			_Reader_recordCall,
																			22,
																			temp5,
																			function (_n3) {
																				return temp5(temp6);
																			});
																	}()
																})),
														A2(_Reader_recordExpr, 25, elm$core$Platform$Cmd$none)));
											case 'NextGeneration':
												var nextGrid = function () {
													var temp7 = author$project$Main$nextGeneration;
													var temp8 = A2(_Reader_recordExpr, 29, model.grid);
													return A3(
														_Reader_recordCall,
														28,
														temp7,
														function (_n4) {
															return temp7(temp8);
														});
												}();
												return A2(
													_Reader_seq,
													A2(_Reader_recordExpr, 28, nextGrid),
													function () {
														var changed = A2(
															_Reader_recordExpr,
															32,
															!_Utils_eq(
																nextGrid,
																A2(_Reader_recordExpr, 34, model.grid)));
														return A2(
															_Reader_seq,
															A2(_Reader_recordExpr, 32, changed),
															A2(
																_Reader_recordExpr,
																36,
																_Utils_Tuple2(
																	A2(
																		_Reader_recordExpr,
																		37,
																		_Utils_update(
																			model,
																			{
																				generations: A2(
																					_Reader_recordExpr,
																					39,
																					A2(_Reader_recordExpr, 40, model.generations) + 1),
																				grid: nextGrid,
																				running: A2(
																					_Reader_recordExpr,
																					44,
																					A2(_Reader_recordExpr, 45, model.running) && changed)
																			})),
																	A2(_Reader_recordExpr, 48, elm$core$Platform$Cmd$none))));
													}());
											default:
												return A2(_Reader_recordExpr, 50, author$project$Main$init);
										}
									}())));
					});
			})));
var author$project$Main$cellSize = A2(
	_Reader_recordFrame,
	'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "cellSize",     "frame_index": 0 }',
	function (_n0) {
		return 10;
	});
var author$project$Main$ToggleAt = F2(
	function (a, b) {
		return {$: 'ToggleAt', a: a, b: b};
	});
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$rect = elm$svg$Svg$trustedNode('rect');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var elm$svg$Svg$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Main$cellToSvg = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F5(
			function (width_, height_, x_, y_, c) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "cellToSvg",     "frame_index": 0 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, width_),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, height_),
								A2(
									_Reader_seq,
									A2(_Reader_recordExpr, 3, x_),
									A2(
										_Reader_seq,
										A2(_Reader_recordExpr, 4, y_),
										A2(
											_Reader_seq,
											A2(_Reader_recordExpr, 5, c),
											function () {
												var colour = A2(
													_Reader_recordExpr,
													7,
													function () {
														if (c.$ === 'Alive') {
															return 'black';
														} else {
															return 'white';
														}
													}());
												return A2(
													_Reader_seq,
													A2(_Reader_recordExpr, 7, colour),
													function () {
														var temp45 = elm$svg$Svg$rect;
														var temp46 = _List_fromArray(
															[
																function () {
																var temp2 = elm$svg$Svg$Attributes$x;
																var temp3 = function () {
																	var temp0 = elm$core$String$fromInt;
																	var temp1 = A2(
																		_Reader_recordExpr,
																		17,
																		A2(_Reader_recordExpr, 18, author$project$Main$cellSize) * x_);
																	return A3(
																		_Reader_recordCall,
																		16,
																		temp0,
																		function (_n3) {
																			return temp0(temp1);
																		});
																}();
																return A3(
																	_Reader_recordCall,
																	15,
																	temp2,
																	function (_n2) {
																		return temp2(temp3);
																	});
															}(),
																function () {
																var temp6 = elm$svg$Svg$Attributes$y;
																var temp7 = function () {
																	var temp4 = elm$core$String$fromInt;
																	var temp5 = A2(
																		_Reader_recordExpr,
																		22,
																		A2(_Reader_recordExpr, 23, author$project$Main$cellSize) * y_);
																	return A3(
																		_Reader_recordCall,
																		21,
																		temp4,
																		function (_n5) {
																			return temp4(temp5);
																		});
																}();
																return A3(
																	_Reader_recordCall,
																	20,
																	temp6,
																	function (_n4) {
																		return temp6(temp7);
																	});
															}(),
																function () {
																var temp10 = elm$svg$Svg$Attributes$width;
																var temp11 = function () {
																	var temp8 = elm$core$String$fromInt;
																	var temp9 = A2(_Reader_recordExpr, 27, author$project$Main$cellSize);
																	return A3(
																		_Reader_recordCall,
																		26,
																		temp8,
																		function (_n7) {
																			return temp8(temp9);
																		});
																}();
																return A3(
																	_Reader_recordCall,
																	25,
																	temp10,
																	function (_n6) {
																		return temp10(temp11);
																	});
															}(),
																function () {
																var temp14 = elm$svg$Svg$Attributes$height;
																var temp15 = function () {
																	var temp12 = elm$core$String$fromInt;
																	var temp13 = A2(_Reader_recordExpr, 30, author$project$Main$cellSize);
																	return A3(
																		_Reader_recordCall,
																		29,
																		temp12,
																		function (_n9) {
																			return temp12(temp13);
																		});
																}();
																return A3(
																	_Reader_recordCall,
																	28,
																	temp14,
																	function (_n8) {
																		return temp14(temp15);
																	});
															}(),
																function () {
																var temp34 = A2(_Reader_recordExpr, 32, elm$svg$Svg$Attributes$strokeDasharray);
																var temp35 = A2(
																	_Reader_recordExpr,
																	33,
																	A2(
																		_Reader_recordExpr,
																		34,
																		A2(
																			_Reader_recordExpr,
																			35,
																			_Utils_cmp(
																				x_,
																				A2(_Reader_recordExpr, 37, width_ - 1)) < 0) && A2(
																			_Reader_recordExpr,
																			40,
																			_Utils_cmp(
																				y_,
																				A2(_Reader_recordExpr, 42, height_ - 1)) < 0)) ? A2(
																		_Reader_recordExpr,
																		45,
																		_Utils_ap(
																			function () {
																				var temp16 = elm$core$String$fromInt;
																				var temp17 = A2(_Reader_recordExpr, 47, author$project$Main$cellSize);
																				return A3(
																					_Reader_recordCall,
																					46,
																					temp16,
																					function (_n11) {
																						return temp16(temp17);
																					});
																			}(),
																			A2(
																				_Reader_recordExpr,
																				48,
																				',' + A2(
																					_Reader_recordExpr,
																					50,
																					_Utils_ap(
																						function () {
																							var temp18 = elm$core$String$fromInt;
																							var temp19 = A2(
																								_Reader_recordExpr,
																								52,
																								2 * A2(_Reader_recordExpr, 54, author$project$Main$cellSize));
																							return A3(
																								_Reader_recordCall,
																								51,
																								temp18,
																								function (_n12) {
																									return temp18(temp19);
																								});
																						}(),
																						A2(
																							_Reader_recordExpr,
																							55,
																							',' + function () {
																								var temp20 = elm$core$String$fromInt;
																								var temp21 = A2(_Reader_recordExpr, 58, author$project$Main$cellSize);
																								return A3(
																									_Reader_recordCall,
																									57,
																									temp20,
																									function (_n13) {
																										return temp20(temp21);
																									});
																							}())))))) : (A2(
																		_Reader_recordExpr,
																		59,
																		_Utils_cmp(
																			x_,
																			A2(_Reader_recordExpr, 61, width_ - 1)) < 0) ? A2(
																		_Reader_recordExpr,
																		64,
																		_Utils_ap(
																			function () {
																				var temp22 = elm$core$String$fromInt;
																				var temp23 = A2(_Reader_recordExpr, 66, author$project$Main$cellSize);
																				return A3(
																					_Reader_recordCall,
																					65,
																					temp22,
																					function (_n14) {
																						return temp22(temp23);
																					});
																			}(),
																			A2(
																				_Reader_recordExpr,
																				67,
																				',' + A2(
																					_Reader_recordExpr,
																					69,
																					_Utils_ap(
																						function () {
																							var temp24 = elm$core$String$fromInt;
																							var temp25 = A2(_Reader_recordExpr, 71, author$project$Main$cellSize);
																							return A3(
																								_Reader_recordCall,
																								70,
																								temp24,
																								function (_n15) {
																									return temp24(temp25);
																								});
																						}(),
																						A2(
																							_Reader_recordExpr,
																							72,
																							',' + function () {
																								var temp26 = elm$core$String$fromInt;
																								var temp27 = A2(
																									_Reader_recordExpr,
																									75,
																									2 * A2(_Reader_recordExpr, 77, author$project$Main$cellSize));
																								return A3(
																									_Reader_recordCall,
																									74,
																									temp26,
																									function (_n16) {
																										return temp26(temp27);
																									});
																							}())))))) : (A2(
																		_Reader_recordExpr,
																		78,
																		_Utils_cmp(
																			y_,
																			A2(_Reader_recordExpr, 80, height_ - 1)) < 0) ? A2(
																		_Reader_recordExpr,
																		83,
																		_Utils_ap(
																			function () {
																				var temp28 = elm$core$String$fromInt;
																				var temp29 = A2(
																					_Reader_recordExpr,
																					85,
																					2 * A2(_Reader_recordExpr, 87, author$project$Main$cellSize));
																				return A3(
																					_Reader_recordCall,
																					84,
																					temp28,
																					function (_n17) {
																						return temp28(temp29);
																					});
																			}(),
																			A2(
																				_Reader_recordExpr,
																				88,
																				',' + A2(
																					_Reader_recordExpr,
																					90,
																					_Utils_ap(
																						function () {
																							var temp30 = elm$core$String$fromInt;
																							var temp31 = A2(_Reader_recordExpr, 92, author$project$Main$cellSize);
																							return A3(
																								_Reader_recordCall,
																								91,
																								temp30,
																								function (_n18) {
																									return temp30(temp31);
																								});
																						}(),
																						A2(
																							_Reader_recordExpr,
																							93,
																							',' + function () {
																								var temp32 = elm$core$String$fromInt;
																								var temp33 = A2(_Reader_recordExpr, 96, author$project$Main$cellSize);
																								return A3(
																									_Reader_recordCall,
																									95,
																									temp32,
																									function (_n19) {
																										return temp32(temp33);
																									});
																							}())))))) : '')));
																return A3(
																	_Reader_recordCall,
																	31,
																	temp34,
																	function (_n10) {
																		return temp34(temp35);
																	});
															}(),
																function () {
																var temp36 = elm$svg$Svg$Attributes$fill;
																var temp37 = colour;
																return A3(
																	_Reader_recordCall,
																	98,
																	temp36,
																	function (_n20) {
																		return temp36(temp37);
																	});
															}(),
																function () {
																var temp38 = elm$svg$Svg$Attributes$stroke;
																var temp39 = '#ddd';
																return A3(
																	_Reader_recordCall,
																	100,
																	temp38,
																	function (_n21) {
																		return temp38(temp39);
																	});
															}(),
																function () {
																var temp43 = elm$svg$Svg$Events$onClick;
																var temp44 = function () {
																	var temp40 = author$project$Main$ToggleAt;
																	var temp41 = x_;
																	var temp42 = y_;
																	return A3(
																		_Reader_recordCall,
																		103,
																		temp40,
																		function (_n23) {
																			return A2(temp40, temp41, temp42);
																		});
																}();
																return A3(
																	_Reader_recordCall,
																	102,
																	temp43,
																	function (_n22) {
																		return temp43(temp44);
																	});
															}()
															]);
														var temp47 = _List_Nil;
														return A3(
															_Reader_recordCall,
															13,
															temp45,
															function (_n1) {
																return A2(temp45, temp46, temp47);
															});
													}());
											}())))));
					});
			})));
var elm$core$Array$toIndexedList = function (array) {
	var len = array.a;
	var helper = F2(
		function (entry, _n0) {
			var index = _n0.a;
			var list = _n0.b;
			return _Utils_Tuple2(
				index - 1,
				A2(
					elm$core$List$cons,
					_Utils_Tuple2(index, entry),
					list));
		});
	return A3(
		elm$core$Array$foldr,
		helper,
		_Utils_Tuple2(len - 1, _List_Nil),
		array).b;
};
var author$project$Main$flattenGrid = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		F2(
			function (f, g) {
				return A2(
					_Reader_recordFrame,
					'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "flattenGrid",     "frame_index": 1 }',
					function (_n0) {
						return A2(
							_Reader_seq,
							A2(_Reader_recordExpr, 1, f),
							A2(
								_Reader_seq,
								A2(_Reader_recordExpr, 2, g),
								function () {
									var temp12 = A2(_Reader_recordExpr, 22, elm$core$List$reverse);
									var temp13 = function () {
										var temp9 = elm$core$List$map;
										var temp10 = A2(
											_Reader_recordExpr,
											5,
											_Reader_markInstrumented(
												function (_n4) {
													var i = _n4.a;
													var c = _n4.b;
													return A2(
														_Reader_recordFrame,
														'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "flattenGrid",     "frame_index": 0 }',
														function (_n5) {
															return A2(
																_Reader_seq,
																A2(_Reader_recordExpr, 1, f),
																A2(
																	_Reader_seq,
																	A2(_Reader_recordExpr, 2, g),
																	A2(
																		_Reader_seq,
																		A2(_Reader_recordExpr, 6, i),
																		A2(
																			_Reader_seq,
																			A2(_Reader_recordExpr, 7, c),
																			function () {
																				var temp3 = f;
																				var temp4 = function () {
																					var temp0 = elm$core$Basics$modBy;
																					var temp1 = A2(_Reader_recordExpr, 11, g.width);
																					var temp2 = i;
																					return A3(
																						_Reader_recordCall,
																						10,
																						temp0,
																						function (_n7) {
																							return A2(temp0, temp1, temp2);
																						});
																				}();
																				var temp5 = A2(
																					_Reader_recordExpr,
																					14,
																					(i / A2(_Reader_recordExpr, 16, g.width)) | 0);
																				var temp6 = c;
																				return A3(
																					_Reader_recordCall,
																					8,
																					temp3,
																					function (_n6) {
																						return A3(temp3, temp4, temp5, temp6);
																					});
																			}()))));
														});
												}));
										var temp11 = function () {
											var temp7 = elm$core$Array$toIndexedList;
											var temp8 = A2(_Reader_recordExpr, 20, g.items);
											return A3(
												_Reader_recordCall,
												19,
												temp7,
												function (_n3) {
													return temp7(temp8);
												});
										}();
										return A3(
											_Reader_recordCall,
											4,
											temp9,
											function (_n2) {
												return A2(temp9, temp10, temp11);
											});
									}();
									return A3(
										_Reader_recordCall,
										3,
										temp12,
										function (_n1) {
											return temp12(temp13);
										});
								}()));
					});
			})));
var elm$html$Html$button = _VirtualDom_node('button');
var author$project$Main$nextGenerationLink = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		function (model) {
			return A2(
				_Reader_recordFrame,
				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "nextGenerationLink",     "frame_index": 0 }',
				function (_n0) {
					return A2(
						_Reader_seq,
						A2(_Reader_recordExpr, 1, model),
						function () {
							var temp4 = elm$html$Html$button;
							var temp5 = _List_fromArray(
								[
									function () {
									var temp0 = elm$html$Html$Events$onClick;
									var temp1 = A2(_Reader_recordExpr, 5, author$project$Main$NextGeneration);
									return A3(
										_Reader_recordCall,
										4,
										temp0,
										function (_n3) {
											return temp0(temp1);
										});
								}()
								]);
							var temp6 = _List_fromArray(
								[
									function () {
									var temp2 = elm$html$Html$text;
									var temp3 = 'Next generation';
									return A3(
										_Reader_recordCall,
										7,
										temp2,
										function (_n2) {
											return temp2(temp3);
										});
								}()
								]);
							return A3(
								_Reader_recordCall,
								2,
								temp4,
								function (_n1) {
									return A2(temp4, temp5, temp6);
								});
						}());
				});
		}));
var author$project$Main$Reset = {$: 'Reset'};
var author$project$Main$resetLink = A2(
	_Reader_recordFrame,
	'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "resetLink",     "frame_index": 0 }',
	function (_n0) {
		var temp4 = elm$html$Html$button;
		var temp5 = _List_fromArray(
			[
				function () {
				var temp0 = elm$html$Html$Events$onClick;
				var temp1 = A2(_Reader_recordExpr, 3, author$project$Main$Reset);
				return A3(
					_Reader_recordCall,
					2,
					temp0,
					function (_n3) {
						return temp0(temp1);
					});
			}()
			]);
		var temp6 = _List_fromArray(
			[
				function () {
				var temp2 = elm$html$Html$text;
				var temp3 = 'Reset';
				return A3(
					_Reader_recordCall,
					5,
					temp2,
					function (_n2) {
						return temp2(temp3);
					});
			}()
			]);
		return A3(
			_Reader_recordCall,
			0,
			temp4,
			function (_n1) {
				return A2(temp4, temp5, temp6);
			});
	});
var author$project$Main$ToggleRunning = {$: 'ToggleRunning'};
var author$project$Main$toggleRunningLink = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		function (model) {
			return A2(
				_Reader_recordFrame,
				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "toggleRunningLink",     "frame_index": 0 }',
				function (_n0) {
					return A2(
						_Reader_seq,
						A2(_Reader_recordExpr, 1, model),
						function () {
							var temp4 = elm$html$Html$button;
							var temp5 = _List_fromArray(
								[
									function () {
									var temp0 = elm$html$Html$Events$onClick;
									var temp1 = A2(_Reader_recordExpr, 5, author$project$Main$ToggleRunning);
									return A3(
										_Reader_recordCall,
										4,
										temp0,
										function (_n3) {
											return temp0(temp1);
										});
								}()
								]);
							var temp6 = _List_fromArray(
								[
									function () {
									var temp2 = elm$html$Html$text;
									var temp3 = A2(
										_Reader_recordExpr,
										8,
										A2(_Reader_recordExpr, 9, model.running) ? 'Stop' : 'Start');
									return A3(
										_Reader_recordCall,
										7,
										temp2,
										function (_n2) {
											return temp2(temp3);
										});
								}()
								]);
							return A3(
								_Reader_recordCall,
								2,
								temp4,
								function (_n1) {
									return A2(temp4, temp5, temp6);
								});
						}());
				});
		}));
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var author$project$Main$view = A2(
	_Reader_recordExpr,
	0,
	_Reader_markInstrumented(
		function (model) {
			return A2(
				_Reader_recordFrame,
				'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "view",     "frame_index": 0 }',
				function (_n0) {
					return A2(
						_Reader_seq,
						A2(_Reader_recordExpr, 1, model),
						function () {
							var temp30 = elm$html$Html$div;
							var temp31 = _List_Nil;
							var temp32 = _List_fromArray(
								[
									function () {
									var temp8 = elm$html$Html$div;
									var temp9 = _List_Nil;
									var temp10 = _List_fromArray(
										[
											A2(_Reader_recordExpr, 8, author$project$Main$resetLink),
											function () {
											var temp0 = author$project$Main$toggleRunningLink;
											var temp1 = model;
											return A3(
												_Reader_recordCall,
												9,
												temp0,
												function (_n3) {
													return temp0(temp1);
												});
										}(),
											function () {
											var temp2 = author$project$Main$nextGenerationLink;
											var temp3 = model;
											return A3(
												_Reader_recordCall,
												11,
												temp2,
												function (_n4) {
													return temp2(temp3);
												});
										}(),
											function () {
											var temp6 = elm$html$Html$text;
											var temp7 = A2(
												_Reader_recordExpr,
												14,
												' Generations: ' + function () {
													var temp4 = elm$core$String$fromInt;
													var temp5 = A2(_Reader_recordExpr, 17, model.generations);
													return A3(
														_Reader_recordCall,
														16,
														temp4,
														function (_n6) {
															return temp4(temp5);
														});
												}());
											return A3(
												_Reader_recordCall,
												13,
												temp6,
												function (_n5) {
													return temp6(temp7);
												});
										}()
										]);
									return A3(
										_Reader_recordCall,
										5,
										temp8,
										function (_n2) {
											return A2(temp8, temp9, temp10);
										});
								}(),
									function () {
									var temp27 = elm$svg$Svg$svg;
									var temp28 = _List_fromArray(
										[
											function () {
											var temp11 = elm$svg$Svg$Attributes$width;
											var temp12 = '100%';
											return A3(
												_Reader_recordCall,
												21,
												temp11,
												function (_n10) {
													return temp11(temp12);
												});
										}(),
											function () {
											var temp13 = elm$svg$Svg$Attributes$height;
											var temp14 = '100%';
											return A3(
												_Reader_recordCall,
												23,
												temp13,
												function (_n11) {
													return temp13(temp14);
												});
										}(),
											function () {
											var temp19 = A2(_Reader_recordExpr, 26, elm$svg$Svg$Attributes$viewBox);
											var temp20 = A2(
												_Reader_recordExpr,
												27,
												'0 0 ' + A2(
													_Reader_recordExpr,
													29,
													_Utils_ap(
														function () {
															var temp15 = elm$core$String$fromInt;
															var temp16 = A2(
																_Reader_recordExpr,
																31,
																A2(_Reader_recordExpr, 32, author$project$Main$cellSize) * A2(
																	_Reader_recordExpr,
																	33,
																	A2(_Reader_recordExpr, 34, model.grid).width));
															return A3(
																_Reader_recordCall,
																30,
																temp15,
																function (_n13) {
																	return temp15(temp16);
																});
														}(),
														A2(
															_Reader_recordExpr,
															36,
															' ' + function () {
																var temp17 = elm$core$String$fromInt;
																var temp18 = A2(
																	_Reader_recordExpr,
																	39,
																	A2(_Reader_recordExpr, 40, author$project$Main$cellSize) * A2(
																		_Reader_recordExpr,
																		41,
																		A2(_Reader_recordExpr, 42, model.grid).height));
																return A3(
																	_Reader_recordCall,
																	38,
																	temp17,
																	function (_n14) {
																		return temp17(temp18);
																	});
															}()))));
											return A3(
												_Reader_recordCall,
												25,
												temp19,
												function (_n12) {
													return temp19(temp20);
												});
										}()
										]);
									var temp29 = function () {
										var temp24 = author$project$Main$flattenGrid;
										var temp25 = function () {
											var temp21 = author$project$Main$cellToSvg;
											var temp22 = A2(
												_Reader_recordExpr,
												46,
												A2(_Reader_recordExpr, 47, model.grid).width);
											var temp23 = A2(
												_Reader_recordExpr,
												49,
												A2(_Reader_recordExpr, 50, model.grid).height);
											return A3(
												_Reader_recordCall,
												45,
												temp21,
												function (_n9) {
													return A2(temp21, temp22, temp23);
												});
										}();
										var temp26 = A2(_Reader_recordExpr, 52, model.grid);
										return A3(
											_Reader_recordCall,
											44,
											temp24,
											function (_n8) {
												return A2(temp24, temp25, temp26);
											});
									}();
									return A3(
										_Reader_recordCall,
										19,
										temp27,
										function (_n7) {
											return A2(temp27, temp28, temp29);
										});
								}()
								]);
							return A3(
								_Reader_recordCall,
								2,
								temp30,
								function (_n1) {
									return A2(temp30, temp31, temp32);
								});
						}());
				});
		}));
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$browser$Debugger$Main$Down = {$: 'Down'};
var elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var elm$browser$Debugger$Main$Up = {$: 'Up'};
var elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var elm$browser$Debugger$Main$Export = {$: 'Export'};
var elm$browser$Debugger$Main$Import = {$: 'Import'};
var elm$browser$Debugger$Main$Open = {$: 'Open'};
var elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var elm$html$Html$code = _VirtualDom_node('code');
var elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text(name)
			]));
};
var elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _n1 = items.b;
				var item2 = _n1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var elm$html$Html$li = _VirtualDom_node('li');
var elm$browser$Debugger$Overlay$viewProblemType = function (_n0) {
	var name = _n0.name;
	var problems = _n0.problems;
	return A2(
		elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				elm$browser$Debugger$Overlay$viewCode(name),
				elm$html$Html$text(
				' can contain ' + (elm$browser$Debugger$Overlay$addCommas(
					A2(elm$core$List$map, elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$ul = _VirtualDom_node('ul');
var elm$browser$Debugger$Overlay$viewBadMetadata = function (_n0) {
	var message = _n0.message;
	var problems = _n0.problems;
	return _List_fromArray(
		[
			A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('The '),
					elm$browser$Debugger$Overlay$viewCode(message),
					elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			elm$html$Html$ul,
			_List_Nil,
			A2(elm$core$List$map, elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(elm$browser$Debugger$Overlay$goodNews1),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/union_types.html')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('union types')
						])),
					elm$html$Html$text(', in your messages. From there, your '),
					elm$browser$Debugger$Overlay$viewCode('update'),
					elm$html$Html$text(elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin-right', '20px'),
						elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'height', '60px'),
				A2(elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2(elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2(elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2(elm$html$Html$Attributes$style, 'top', '0'),
					A2(elm$html$Html$Attributes$style, 'left', '0'),
					A2(elm$html$Html$Attributes$style, 'width', '100%'),
					A2(elm$html$Html$Attributes$style, 'height', '100%'),
					A2(elm$html$Html$Attributes$style, 'color', 'white'),
					A2(elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2(elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2(elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2(elm$html$Html$Attributes$style, 'width', '600px'),
							A2(elm$html$Html$Attributes$style, 'height', '100%'),
							A2(elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2(elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2(elm$html$Html$Attributes$style, 'height', '80px'),
									A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2(elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2(elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2(elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(title)
								])),
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$id('elm-debugger-details'),
									A2(elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2(elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2(elm$html$Html$Attributes$style, 'max-height', 'calc(100% - 156px)'),
									A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							elm$html$Html$map,
							config.wrap,
							elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var elm$browser$Debugger$Overlay$button = F2(
	function (msg, label) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var elm$browser$Debugger$Overlay$viewImportExport = F3(
	function (props, importMsg, exportMsg) {
		return A2(
			elm$html$Html$div,
			props,
			_List_fromArray(
				[
					A2(elm$browser$Debugger$Overlay$button, importMsg, 'Import'),
					elm$html$Html$text(' / '),
					A2(elm$browser$Debugger$Overlay$button, exportMsg, 'Export')
				]));
	});
var elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2(elm$html$Html$Attributes$style, 'bottom', '0'),
					A2(elm$html$Html$Attributes$style, 'right', '6px'),
					A2(elm$html$Html$Attributes$style, 'border-radius', '4px'),
					A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2(elm$html$Html$Attributes$style, 'color', 'white'),
					A2(elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2(elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					elm$html$Html$Attributes$id('debugger-corner')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'padding', '6px'),
							A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2(elm$html$Html$Attributes$style, 'min-width', '24ch'),
							elm$html$Html$Events$onClick(config.open)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							'Explore History (' + (elm$core$String$fromInt(numMsgs) + ')'))
						])),
					A3(
					elm$browser$Debugger$Overlay$viewImportExport,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'padding', '4px 0'),
							A2(elm$html$Html$Attributes$style, 'font-size', '0.8em'),
							A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
						]),
					config.importHistory,
					config.exportHistory)
				]));
	});
var elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _n0 = A2(
			elm$core$List$map,
			elm$browser$Debugger$Overlay$viewCode,
			elm$core$List$reverse(tags));
		if (!_n0.b) {
			return elm$html$Html$text('');
		} else {
			if (!_n0.b.b) {
				var tag = _n0.a;
				return A2(
					elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(verbed),
							tag,
							elm$html$Html$text('.')
						]));
			} else {
				if (!_n0.b.b.b) {
					var tag2 = _n0.a;
					var _n1 = _n0.b;
					var tag1 = _n1.a;
					return A2(
						elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text(verbed),
								tag1,
								elm$html$Html$text(' and '),
								tag2,
								elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _n0.a;
					var otherTags = _n0.b;
					return A2(
						elm$html$Html$li,
						_List_Nil,
						A2(
							elm$core$List$cons,
							elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									elm$core$List$intersperse,
									elm$html$Html$text(', '),
									elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										elm$html$Html$text(', and '),
										lastTag,
										elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		elm$html$Html$li,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						elm$html$Html$ul,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2(elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2(elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2(elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2(elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? elm$html$Html$text('') : elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						elm$browser$Debugger$Overlay$viewCode(old),
						elm$html$Html$text(' messages, but the new program works with '),
						elm$browser$Debugger$Overlay$viewCode(_new),
						elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text(
								isBad ? elm$browser$Debugger$Overlay$explanationBad : elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						elm$html$Html$ul,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2(elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2(elm$core$List$map, elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? elm$html$Html$text('') : (isPaused ? A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'width', '100%'),
							A2(elm$html$Html$Attributes$style, 'height', '100%'),
							A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2(elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2(elm$html$Html$Attributes$style, 'color', 'white'),
							A2(elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2(elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
									A2(elm$html$Html$Attributes$style, 'top', 'calc(50% - 40px)'),
									A2(elm$html$Html$Attributes$style, 'font-size', '80px'),
									A2(elm$html$Html$Attributes$style, 'line-height', '80px'),
									A2(elm$html$Html$Attributes$style, 'height', '80px'),
									A2(elm$html$Html$Attributes$style, 'width', '100%')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('Click to Resume')
								])),
							A2(elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2(elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2(elm$browser$Debugger$Overlay$viewReport, true, report),
					elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2(elm$browser$Debugger$Overlay$viewReport, false, report),
					A2(elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		elm$browser$Debugger$Overlay$view,
		{exportHistory: elm$browser$Debugger$Main$Export, importHistory: elm$browser$Debugger$Main$Import, open: elm$browser$Debugger$Main$Open, resume: elm$browser$Debugger$Main$Resume, wrap: elm$browser$Debugger$Main$OverlayMsg},
		elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var elm$browser$Debugger$Main$getUserModel = function (model) {
	return elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var elm$browser$Debugger$Main$ExpandoMsg = function (a) {
	return {$: 'ExpandoMsg', a: a};
};
var elm$browser$Debugger$Main$ReaderMsg = function (a) {
	return {$: 'ReaderMsg', a: a};
};
var elm$html$Html$Attributes$title = elm$html$Html$Attributes$stringProperty('title');
var elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(className),
					elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$title(messageName),
							elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(messageName)
						])),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							elm$core$String$fromInt(index))
						]))
				]));
	});
var elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var elm$html$Html$Lazy$lazy3 = elm$virtual_dom$VirtualDom$lazy3;
var elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _n0) {
		var index = _n0.a;
		var rest = _n0.b;
		return _Utils_Tuple2(
			index - 1,
			A2(
				elm$core$List$cons,
				A4(elm$html$Html$Lazy$lazy3, elm$browser$Debugger$History$viewMessage, currentIndex, index, msg),
				rest));
	});
var elm$browser$Debugger$History$styles = A3(
	elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var elm$browser$Debugger$History$maxSnapshotSize = 64;
var elm$browser$Debugger$History$viewSnapshot = F3(
	function (currentIndex, index, _n0) {
		var messages = _n0.messages;
		return A2(
			elm$html$Html$div,
			_List_Nil,
			A3(
				elm$core$Array$foldl,
				elm$browser$Debugger$History$consMsg(currentIndex),
				_Utils_Tuple2(index - 1, _List_Nil),
				messages).b);
	});
var elm$browser$Debugger$History$consSnapshot = F3(
	function (currentIndex, snapshot, _n0) {
		var index = _n0.a;
		var rest = _n0.b;
		var nextIndex = index - elm$browser$Debugger$History$maxSnapshotSize;
		var currentIndexHelp = ((_Utils_cmp(nextIndex, currentIndex) < 1) && (_Utils_cmp(currentIndex, index) < 0)) ? currentIndex : (-1);
		return _Utils_Tuple2(
			index - elm$browser$Debugger$History$maxSnapshotSize,
			A2(
				elm$core$List$cons,
				A4(elm$html$Html$Lazy$lazy3, elm$browser$Debugger$History$viewSnapshot, currentIndexHelp, index, snapshot),
				rest));
	});
var elm$browser$Debugger$History$viewSnapshots = F2(
	function (currentIndex, snapshots) {
		var highIndex = elm$browser$Debugger$History$maxSnapshotSize * elm$core$Array$length(snapshots);
		return A2(
			elm$html$Html$div,
			_List_Nil,
			A3(
				elm$core$Array$foldr,
				elm$browser$Debugger$History$consSnapshot(currentIndex),
				_Utils_Tuple2(highIndex, _List_Nil),
				snapshots).b);
	});
var elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var elm$html$Html$Lazy$lazy2 = elm$virtual_dom$VirtualDom$lazy2;
var elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _n0) {
		var snapshots = _n0.snapshots;
		var recent = _n0.recent;
		var numMessages = _n0.numMessages;
		var _n1 = function () {
			if (maybeIndex.$ === 'Nothing') {
				return _Utils_Tuple2(-1, 'calc(100% - 24px)');
			} else {
				var i = maybeIndex.a;
				return _Utils_Tuple2(i, 'calc(100% - 54px)');
			}
		}();
		var index = _n1.a;
		var height = _n1.b;
		var newStuff = A3(
			elm$core$List$foldl,
			elm$browser$Debugger$History$consMsg(index),
			_Utils_Tuple2(numMessages - 1, _List_Nil),
			recent.messages).b;
		var oldStuff = A3(elm$html$Html$Lazy$lazy2, elm$browser$Debugger$History$viewSnapshots, index, snapshots);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2(elm$html$Html$Attributes$style, 'width', '100%'),
					A2(elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2(elm$html$Html$Attributes$style, 'height', height)
				]),
			A2(
				elm$core$List$cons,
				elm$browser$Debugger$History$styles,
				A2(elm$core$List$cons, oldStuff, newStuff)));
	});
var elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var elm$browser$Debugger$Main$resumeStyle = '\n\n.elm-debugger-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.elm-debugger-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-reader-container {\n  margin: 0;\n}\n\n.elm-reader-details {\n  position: relative;\n  width: 30%;\n  top: 0;\n  line-height: 1.1em;\n}\n\n.elm-reader-expr-ui {\n  position: absolute;\n  width: 100%;\n  padding: 0.55em 5px 0.55em 5px;\n  box-sizing: border-box;\n}\n\n.elm-reader-expr-ui-rightborder {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 10px;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.elm-reader-expr-ui--hovered-rightborder {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 10px;\n  background-color: rgb(232, 232, 240);\n  box-sizing: border-box;\n}\n\n.elm-reader-expr-ui > div {\n  white-space: nowrap;\n}\n\n.elm-reader-expr-ui--hovered {\n  position: absolute;\n  background-color: rgb(232, 232, 240);\n}\n\n.elm-reader-stack {\n  position: relative;\n  width: 70%;\n  left: 30%;\n  user-select: none;\n}\n\n.elm-reader-expr {\n  cursor: default;\n}\n\n.elm-reader-call {\n  cursor: pointer;\n}\n\n.elm-reader-frame pre {\n  margin: 0;\n}\n\n.elm-reader-frame {\n  line-height: 1.1em;\n  width: calc(100% - 1.1em);\n  padding: 0.55em;\n  border-radius: 4px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  background-color: rgb(253, 253, 253);\n  position: absolute;\n}\n';
var elm$browser$Debugger$Main$viewResumeButton = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return elm$html$Html$text('');
	} else {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(elm$browser$Debugger$Main$Resume),
					elm$html$Html$Attributes$class('elm-debugger-resume')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Resume'),
					A3(
					elm$html$Html$node,
					'style',
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(elm$browser$Debugger$Main$resumeStyle)
						]))
				]));
	}
};
var elm$browser$Debugger$Main$viewTextButton = F2(
	function (msg, label) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var elm$browser$Debugger$Main$playButton = function (maybeIndex) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'width', '100%'),
				A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				elm$browser$Debugger$Main$viewResumeButton(maybeIndex),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'width', '100%'),
						A2(elm$html$Html$Attributes$style, 'height', '24px'),
						A2(elm$html$Html$Attributes$style, 'line-height', '24px'),
						A2(elm$html$Html$Attributes$style, 'font-size', '12px')
					]),
				_List_fromArray(
					[
						A2(elm$browser$Debugger$Main$viewTextButton, elm$browser$Debugger$Main$Import, 'Import'),
						elm$html$Html$text(' / '),
						A2(elm$browser$Debugger$Main$viewTextButton, elm$browser$Debugger$Main$Export, 'Export')
					]))
			]));
};
var elm$browser$Debugger$Main$viewSidebar = F2(
	function (state, history) {
		var maybeIndex = function () {
			if (state.$ === 'Running') {
				return elm$core$Maybe$Nothing;
			} else {
				var index = state.a;
				return elm$core$Maybe$Just(index);
			}
		}();
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'display', 'block'),
					A2(elm$html$Html$Attributes$style, 'float', 'left'),
					A2(elm$html$Html$Attributes$style, 'width', '30ch'),
					A2(elm$html$Html$Attributes$style, 'height', '100%'),
					A2(elm$html$Html$Attributes$style, 'color', 'white'),
					A2(elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$map,
					elm$browser$Debugger$Main$Jump,
					A2(elm$browser$Debugger$History$view, maybeIndex, history)),
					elm$browser$Debugger$Main$playButton(maybeIndex)
				]));
	});
var elm$browser$Debugger$Main$popoutView = function (_n0) {
	var history = _n0.history;
	var state = _n0.state;
	var expando = _n0.expando;
	var reader = _n0.reader;
	return A3(
		elm$html$Html$node,
		'body',
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin', '0'),
				A2(elm$html$Html$Attributes$style, 'padding', '0'),
				A2(elm$html$Html$Attributes$style, 'width', '100%'),
				A2(elm$html$Html$Attributes$style, 'height', '100%'),
				A2(elm$html$Html$Attributes$style, 'font-family', 'monospace'),
				A2(elm$html$Html$Attributes$style, 'overflow', 'auto')
			]),
		_List_fromArray(
			[
				A2(elm$browser$Debugger$Main$viewSidebar, state, history),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'height', '100%'),
						A2(elm$html$Html$Attributes$style, 'overflow', 'scroll')
					]),
				_List_fromArray(
					[
						function () {
						if (reader.$ === 'Nothing') {
							return A2(
								elm$html$Html$map,
								elm$browser$Debugger$Main$ExpandoMsg,
								A2(elm$browser$Debugger$Expando$view, elm$core$Maybe$Nothing, expando));
						} else {
							var readerModel = reader.a;
							return A2(
								elm$html$Html$map,
								elm$browser$Debugger$Main$ReaderMsg,
								elm$browser$Reader$view(readerModel));
						}
					}()
					]))
			]));
};
var elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? elm$browser$Debugger$Overlay$BlockAll : elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return elm$browser$Debugger$Overlay$BlockMost;
			default:
				return elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		elm$browser$Debugger$Overlay$toBlockerType,
		elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var elm$browser$Debugger$History$empty = function (model) {
	return A3(
		elm$browser$Debugger$History$History,
		elm$core$Array$empty,
		A3(elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var elm$browser$Debugger$Metadata$decodeAlias = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Debugger$Metadata$Alias,
	A2(
		elm$json$Json$Decode$field,
		'args',
		elm$json$Json$Decode$list(elm$json$Json$Decode$string)),
	A2(elm$json$Json$Decode$field, 'type', elm$json$Json$Decode$string));
var elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		elm$json$Json$Decode$map,
		elm$core$Dict$fromList,
		elm$json$Json$Decode$keyValuePairs(decoder));
};
var elm$browser$Debugger$Metadata$decodeUnion = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Debugger$Metadata$Union,
	A2(
		elm$json$Json$Decode$field,
		'args',
		elm$json$Json$Decode$list(elm$json$Json$Decode$string)),
	A2(
		elm$json$Json$Decode$field,
		'tags',
		elm$json$Json$Decode$dict(
			elm$json$Json$Decode$list(elm$json$Json$Decode$string))));
var elm$browser$Debugger$Metadata$decodeTypes = A4(
	elm$json$Json$Decode$map3,
	elm$browser$Debugger$Metadata$Types,
	A2(elm$json$Json$Decode$field, 'message', elm$json$Json$Decode$string),
	A2(
		elm$json$Json$Decode$field,
		'aliases',
		elm$json$Json$Decode$dict(elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		elm$json$Json$Decode$field,
		'unions',
		elm$json$Json$Decode$dict(elm$browser$Debugger$Metadata$decodeUnion)));
var elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var elm$browser$Debugger$Metadata$decodeVersions = A2(
	elm$json$Json$Decode$map,
	elm$browser$Debugger$Metadata$Versions,
	A2(elm$json$Json$Decode$field, 'elm', elm$json$Json$Decode$string));
var elm$browser$Debugger$Metadata$decoder = A3(
	elm$json$Json$Decode$map2,
	elm$browser$Debugger$Metadata$Metadata,
	A2(elm$json$Json$Decode$field, 'versions', elm$browser$Debugger$Metadata$decodeVersions),
	A2(elm$json$Json$Decode$field, 'types', elm$browser$Debugger$Metadata$decodeTypes));
var elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var elm$core$String$contains = _String_contains;
var elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _n0) {
		var problem = _n0.a;
		var token = _n0.b;
		return A2(elm$core$String$contains, token, tipe) ? elm$core$Maybe$Just(problem) : elm$core$Maybe$Nothing;
	});
var elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2(elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		elm$core$List$filterMap,
		elm$browser$Debugger$Metadata$hasProblem(tipe),
		elm$browser$Debugger$Metadata$problemTable);
};
var elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _n0, list) {
		var tipe = _n0.tipe;
		var _n1 = elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_n1.b) {
			return list;
		} else {
			var problems = _n1;
			return A2(
				elm$core$List$cons,
				A2(elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _n0, list) {
		var tags = _n0.tags;
		var _n1 = A2(
			elm$core$List$concatMap,
			elm$browser$Debugger$Metadata$findProblems,
			elm$core$List$concat(
				elm$core$Dict$values(tags)));
		if (!_n1.b) {
			return list;
		} else {
			var problems = _n1;
			return A2(
				elm$core$List$cons,
				A2(elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var elm$browser$Debugger$Metadata$isPortable = function (_n0) {
	var types = _n0.types;
	var badAliases = A3(elm$core$Dict$foldl, elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _n1 = A3(elm$core$Dict$foldl, elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_n1.b) {
		return elm$core$Maybe$Nothing;
	} else {
		var problems = _n1;
		return elm$core$Maybe$Just(
			A2(elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var elm$browser$Debugger$Metadata$decode = function (value) {
	var _n0 = A2(elm$json$Json$Decode$decodeValue, elm$browser$Debugger$Metadata$decoder, value);
	if (_n0.$ === 'Err') {
		return elm$core$Result$Err(
			A2(elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _n0.a;
		var _n1 = elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_n1.$ === 'Nothing') {
			return elm$core$Result$Ok(metadata);
		} else {
			var error = _n1.a;
			return elm$core$Result$Err(error);
		}
	}
};
var elm$browser$Debugger$Overlay$None = {$: 'None'};
var elm$browser$Debugger$Overlay$none = elm$browser$Debugger$Overlay$None;
var elm$core$Platform$Cmd$map = _Platform_map;
var elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _n0 = init(flags);
		var userModel = _n0.a;
		var userCommands = _n0.b;
		return _Utils_Tuple2(
			{
				expando: elm$browser$Debugger$Expando$init(userModel),
				history: elm$browser$Debugger$History$empty(userModel),
				metadata: elm$browser$Debugger$Metadata$decode(metadata),
				overlay: elm$browser$Debugger$Overlay$none,
				popout: popout,
				reader: elm$core$Maybe$Nothing,
				state: elm$browser$Debugger$Main$Running(userModel)
			},
			A2(elm$core$Platform$Cmd$map, elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var elm$core$Platform$Sub$map = _Platform_map;
var elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			elm$core$Platform$Sub$map,
			elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _n12 = A2(elm$core$Dict$get, key, oldDict);
		if (_n12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _n12.a;
			return A2(elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _n3 = _Utils_Tuple2(old, _new);
		_n3$6:
		while (true) {
			switch (_n3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_n3.a.$ === 'Sequence') {
						var _n4 = _n3.a;
						var isClosed = _n4.b;
						var oldValues = _n4.c;
						var _n5 = _n3.b;
						var seqType = _n5.a;
						var newValues = _n5.c;
						return A3(
							elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2(elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _n3$6;
					}
				case 'Dictionary':
					if (_n3.a.$ === 'Dictionary') {
						var _n6 = _n3.a;
						var isClosed = _n6.a;
						var _n7 = _n3.b;
						var keyValuePairs = _n7.b;
						return A2(elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _n3$6;
					}
				case 'Record':
					if (_n3.a.$ === 'Record') {
						var _n8 = _n3.a;
						var isClosed = _n8.a;
						var oldDict = _n8.b;
						var _n9 = _n3.b;
						var newDict = _n9.b;
						return A2(
							elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								elm$core$Dict$map,
								elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _n3$6;
					}
				default:
					if (_n3.a.$ === 'Constructor') {
						var _n10 = _n3.a;
						var isClosed = _n10.b;
						var oldValues = _n10.c;
						var _n11 = _n3.b;
						var maybeName = _n11.a;
						var newValues = _n11.c;
						return A3(
							elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2(elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _n3$6;
					}
			}
		}
		return _new;
	});
var elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _n0 = _Utils_Tuple2(olds, news);
		if (!_n0.a.b) {
			return news;
		} else {
			if (!_n0.b.b) {
				return news;
			} else {
				var _n1 = _n0.a;
				var x = _n1.a;
				var xs = _n1.b;
				var _n2 = _n0.b;
				var y = _n2.a;
				var ys = _n2.b;
				return A2(
					elm$core$List$cons,
					A2(elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2(elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Expando_init(value));
	});
var elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _n0) {
		var model = _n0.model;
		var messages = _n0.messages;
		var numMessages = _n0.numMessages;
		return _Utils_eq(numMessages, elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			elm$core$Maybe$Just(
				A2(
					elm$browser$Debugger$History$Snapshot,
					model,
					elm$core$Array$fromList(messages))),
			A3(
				elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			elm$core$Maybe$Nothing,
			A3(
				elm$browser$Debugger$History$RecentHistory,
				model,
				A2(elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var elm$browser$Debugger$History$add = F3(
	function (msg, model, _n0) {
		var snapshots = _n0.snapshots;
		var recent = _n0.recent;
		var numMessages = _n0.numMessages;
		var _n1 = A3(elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_n1.a.$ === 'Just') {
			var snapshot = _n1.a.a;
			var newRecent = _n1.b;
			return A3(
				elm$browser$Debugger$History$History,
				A2(elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _n2 = _n1.a;
			var newRecent = _n1.b;
			return A3(elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var elm$browser$Debugger$History$Done = F3(
	function (a, b, c) {
		return {$: 'Done', a: a, b: b, c: c};
	});
var elm$browser$Reader$Hooks$updateExec = _Reader_updateExec;
var elm$browser$Reader$updateExec = elm$browser$Reader$Hooks$updateExec;
var elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			if (!n) {
				var _n1 = A3(elm$browser$Reader$updateExec, update, msg, model);
				var newModel = _n1.a;
				var readerModel = _n1.b;
				return A3(elm$browser$Debugger$History$Done, msg, newModel, readerModel);
			} else {
				return A2(
					elm$browser$Debugger$History$Stepping,
					n - 1,
					A2(update, msg, model).a);
			}
		}
	});
var elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			var readerModel = getResult.c;
			return _Utils_Tuple3(model, msg, readerModel);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return elm$browser$Debugger$History$undone(
					A3(
						elm$core$List$foldr,
						elm$browser$Debugger$History$getHelp(update),
						A2(elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _n0 = A2(elm$core$Array$get, (index / elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_n0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _n0.a.model;
					var messages = _n0.a.messages;
					return elm$browser$Debugger$History$undone(
						A3(
							elm$core$Array$foldr,
							elm$browser$Debugger$History$getHelp(update),
							A2(elm$browser$Debugger$History$Stepping, index % elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var elm$browser$Debugger$Main$Paused = F3(
	function (a, b, c) {
		return {$: 'Paused', a: a, b: b, c: c};
	});
var elm$browser$Debugger$History$elmToJs = _Debugger_unsafeCoerce;
var elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3(elm$core$Array$foldl, elm$core$List$cons, allMessages, snapshot.messages);
	});
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var elm$browser$Debugger$History$encode = function (_n0) {
	var snapshots = _n0.snapshots;
	var recent = _n0.recent;
	return A2(
		elm$json$Json$Encode$list,
		elm$browser$Debugger$History$elmToJs,
		A3(
			elm$core$Array$foldr,
			elm$browser$Debugger$History$encodeHelp,
			elm$core$List$reverse(recent.messages),
			snapshots));
};
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$browser$Debugger$Metadata$encodeAlias = function (_n0) {
	var args = _n0.args;
	var tipe = _n0.tipe;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				elm$json$Json$Encode$string(tipe))
			]));
};
var elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return elm$json$Json$Encode$object(
			elm$core$Dict$toList(
				A2(
					elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var elm$browser$Debugger$Metadata$encodeUnion = function (_n0) {
	var args = _n0.args;
	var tags = _n0.tags;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					elm$browser$Debugger$Metadata$encodeDict,
					elm$json$Json$Encode$list(elm$json$Json$Encode$string),
					tags))
			]));
};
var elm$browser$Debugger$Metadata$encodeTypes = function (_n0) {
	var message = _n0.message;
	var unions = _n0.unions;
	var aliases = _n0.aliases;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2(elm$browser$Debugger$Metadata$encodeDict, elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2(elm$browser$Debugger$Metadata$encodeDict, elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var elm$browser$Debugger$Metadata$encodeVersions = function (_n0) {
	var elm = _n0.elm;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				elm$json$Json$Encode$string(elm))
			]));
};
var elm$browser$Debugger$Metadata$encode = function (_n0) {
	var versions = _n0.versions;
	var types = _n0.types;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var json = elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'metadata',
					elm$browser$Debugger$Metadata$encode(metadata)),
					_Utils_Tuple2(
					'history',
					elm$browser$Debugger$History$encode(history))
				]));
		var historyLength = elm$browser$Debugger$History$size(history);
		return A2(
			elm$core$Task$perform,
			function (_n0) {
				return elm$browser$Debugger$Main$NoOp;
			},
			A2(_Debugger_download, historyLength, json));
	});
var elm$browser$Debugger$History$jsToElm = _Debugger_unsafeCoerce;
var elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _n0) {
				var model = _n0.a;
				var history = _n0.b;
				var msg = elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3(elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			elm$json$Json$Decode$map,
			updateModel,
			elm$json$Json$Decode$list(elm$json$Json$Decode$value));
	});
var elm$browser$Debugger$History$getInitialModel = function (_n0) {
	var snapshots = _n0.snapshots;
	var recent = _n0.recent;
	var _n1 = A2(elm$core$Array$get, 0, snapshots);
	if (_n1.$ === 'Just') {
		var model = _n1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var elm$browser$Debugger$Overlay$corruptImport = elm$browser$Debugger$Overlay$BadImport(elm$browser$Debugger$Report$CorruptHistory);
var elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2(elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _n0 = A2(elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_n0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: elm$browser$Debugger$Overlay$corruptImport}),
				elm$core$Platform$Cmd$none);
		} else {
			var _n1 = _n0.a;
			var latestUserModel = _n1.a;
			var newHistory = _n1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expando: elm$browser$Debugger$Expando$init(latestUserModel),
						history: newHistory,
						overlay: elm$browser$Debugger$Overlay$none,
						state: elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				elm$core$Platform$Cmd$none);
		}
	});
var elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		elm$core$Task$perform,
		elm$core$Basics$always(elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var elm$browser$Debugger$Main$upload = A2(
	elm$core$Task$perform,
	elm$browser$Debugger$Main$Upload,
	_Debugger_upload(_Utils_Tuple0));
var elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var elm$browser$Debugger$Overlay$badMetadata = elm$browser$Debugger$Overlay$BadMetadata;
var elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _n0 = model.metadata;
		if (_n0.$ === 'Ok') {
			var metadata = _n0.a;
			return func(metadata);
		} else {
			var error = _n0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				elm$core$Platform$Cmd$none);
		}
	});
var elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			elm$core$List$cons,
			elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _n0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2(elm$core$List$cons, tag, changes.added)
			});
	});
var elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2(elm$core$List$cons, tag, changes.changed)
			});
	});
var elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _n0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2(elm$core$List$cons, tag, changes.removed)
			});
	});
var elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4(elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4(elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			elm$core$Dict$merge,
			elm$browser$Debugger$Metadata$removeTag,
			elm$browser$Debugger$Metadata$checkTag,
			elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			elm$core$List$cons,
			A2(elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2(elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : elm$browser$Debugger$Report$SomethingChanged(
			A6(
				elm$core$Dict$merge,
				elm$browser$Debugger$Metadata$ignore,
				elm$browser$Debugger$Metadata$checkUnion,
				elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6(elm$core$Dict$merge, elm$browser$Debugger$Metadata$ignore, elm$browser$Debugger$Metadata$checkAlias, elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2(elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2(elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var elm$browser$Debugger$Overlay$uploadDecoder = A3(
	elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2(elm$json$Json$Decode$field, 'metadata', elm$browser$Debugger$Metadata$decoder),
	A2(elm$json$Json$Decode$field, 'history', elm$json$Json$Decode$value));
var elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var elm$browser$Debugger$Report$some = function (list) {
	return !elm$core$List$isEmpty(list);
};
var elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || (elm$browser$Debugger$Report$some(changed) || elm$browser$Debugger$Report$some(removed))) ? elm$browser$Debugger$Report$Impossible : (elm$browser$Debugger$Report$some(added) ? elm$browser$Debugger$Report$Risky : elm$browser$Debugger$Report$Fine);
	}
};
var elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _n1 = statusList.a;
						return elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _n2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _n3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				elm$browser$Debugger$Report$worstCase,
				elm$browser$Debugger$Report$Fine,
				A2(elm$core$List$map, elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _n0 = A2(elm$json$Json$Decode$decodeString, elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_n0.$ === 'Err') {
			return elm$core$Result$Err(elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _n1 = _n0.a;
			var foreignMetadata = _n1.a;
			var rawHistory = _n1.b;
			var report = A2(elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _n2 = elm$browser$Debugger$Report$evaluate(report);
			switch (_n2.$) {
				case 'Impossible':
					return elm$core$Result$Err(
						elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return elm$core$Result$Err(
						A2(elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return elm$core$Result$Ok(rawHistory);
			}
		}
	});
var elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return elm$core$Maybe$Nothing;
			case 'BadImport':
				return elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return elm$core$Maybe$Nothing;
				} else {
					return elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var elm$browser$Reader$adaptModel = F2(
	function (old, _new) {
		var _n0 = _Utils_Tuple2(old, _new);
		_n0$2:
		while (true) {
			if (_n0.a.$ === 'Just') {
				if ((_n0.a.a.$ === 'ProgramDataReceived') && (_n0.b.$ === 'ProgramDataReceived')) {
					var oldModel = _n0.a.a.a;
					var newModel = _n0.b.a;
					var _n1 = elm$core$List$head(newModel.tracesOutline.topLevelInstrumented);
					if (_n1.$ === 'Just') {
						var trace = _n1.a;
						return elm$browser$Reader$ProgramDataReceived(
							_Utils_update(
								newModel,
								{
									stackUI: A3(
										elm$browser$Reader$StackUI$adaptFromTrace,
										newModel.sources,
										oldModel.stackUI,
										elm$browser$Reader$TraceData$Instrumented(trace))
								}));
					} else {
						return _new;
					}
				} else {
					break _n0$2;
				}
			} else {
				if (_n0.b.$ === 'ProgramDataReceived') {
					var _n2 = _n0.a;
					var newModel = _n0.b.a;
					var _n3 = elm$core$List$head(newModel.tracesOutline.topLevelInstrumented);
					if (_n3.$ === 'Just') {
						var trace = _n3.a;
						return elm$browser$Reader$ProgramDataReceived(
							_Utils_update(
								newModel,
								{
									stackUI: A3(
										elm$browser$Reader$StackUI$adaptFromTrace,
										newModel.sources,
										elm$core$Maybe$Nothing,
										elm$browser$Reader$TraceData$Instrumented(trace))
								}));
					} else {
						return _new;
					}
				} else {
					break _n0$2;
				}
			}
		}
		return _new;
	});
var elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3(elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _n1 = A2(update, userMsg, userModel);
					var newUserModel = _n1.a;
					var userCmds = _n1.b;
					var commands = A2(elm$core$Platform$Cmd$map, elm$browser$Debugger$Main$UserMsg, userCmds);
					var _n2 = model.state;
					if (_n2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expando: A2(elm$browser$Debugger$Expando$merge, newUserModel, model.expando),
									history: newHistory,
									state: elm$browser$Debugger$Main$Running(newUserModel)
								}),
							elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _n2.a;
						var indexModel = _n2.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A3(elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel)
								}),
							commands);
					}
				case 'ExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expando: A2(elm$browser$Debugger$Expando$update, eMsg, model.expando)
							}),
						elm$core$Platform$Cmd$none);
				case 'ReaderMsg':
					var readerMsg = msg.a;
					var _n3 = model.reader;
					if (_n3.$ === 'Just') {
						var readerModel = _n3.a;
						var _n4 = A2(elm$browser$Reader$update, readerMsg, readerModel);
						var newReaderModel = _n4.a;
						var cmd = _n4.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									reader: elm$core$Maybe$Just(newReaderModel)
								}),
							A2(elm$core$Platform$Cmd$map, elm$browser$Debugger$Main$ReaderMsg, cmd));
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 'Resume':
					var _n5 = model.state;
					if (_n5.$ === 'Running') {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var userModel = _n5.c;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expando: A2(elm$browser$Debugger$Expando$merge, userModel, model.expando),
									reader: elm$core$Maybe$Nothing,
									state: elm$browser$Debugger$Main$Running(userModel)
								}),
							elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					var _n6 = A3(elm$browser$Debugger$History$get, update, index, model.history);
					var indexModel = _n6.a;
					var indexMsg = _n6.b;
					var readerModel_ = _n6.c;
					var readerModel = A2(elm$browser$Reader$adaptModel, model.reader, readerModel_);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expando: A2(elm$browser$Debugger$Expando$merge, indexModel, model.expando),
								reader: elm$core$Maybe$Just(readerModel),
								state: A3(
									elm$browser$Debugger$Main$Paused,
									index,
									indexModel,
									elm$browser$Debugger$Main$getLatestModel(model.state))
							}),
						elm$core$Platform$Cmd$none);
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							elm$core$Task$perform,
							function (_n7) {
								return elm$browser$Debugger$Main$NoOp;
							},
							_Debugger_open(model.popout)));
				case 'Up':
					var index = function () {
						var _n8 = model.state;
						if (_n8.$ === 'Paused') {
							var i = _n8.a;
							return i;
						} else {
							return elm$browser$Debugger$History$size(model.history);
						}
					}();
					if (index > 0) {
						var $temp$update = update,
							$temp$msg = elm$browser$Debugger$Main$Jump(index - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 'Down':
					var _n9 = model.state;
					if (_n9.$ === 'Running') {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var index = _n9.a;
						var userModel = _n9.c;
						if (_Utils_eq(
							index,
							elm$browser$Debugger$History$size(model.history) - 1)) {
							var $temp$update = update,
								$temp$msg = elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = elm$browser$Debugger$Main$Jump(index + 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Import':
					return A2(
						elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_n10) {
							return _Utils_Tuple2(model, elm$browser$Debugger$Main$upload);
						});
				case 'Export':
					return A2(
						elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2(elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _n11 = A2(elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_n11.$ === 'Err') {
								var newOverlay = _n11.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _n11.a;
								return A3(elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				default:
					var overlayMsg = msg.a;
					var _n12 = A2(elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_n12.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: elm$browser$Debugger$Overlay$none}),
							elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _n12.a;
						return A3(elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
			}
		}
	});
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = A2(
	_Reader_recordFrame,
	'{     "module": {         "package": "author/project",         "module": "Main"     },     "def": "main",     "frame_index": 0 }',
	function (_n0) {
		var temp2 = elm$browser$Browser$element;
		var temp3 = A2(
			_Reader_recordExpr,
			1,
			{
				init: function () {
					var temp0 = elm$core$Basics$always;
					var temp1 = A2(_Reader_recordExpr, 3, author$project$Main$init);
					return A3(
						_Reader_recordCall,
						2,
						temp0,
						function (_n2) {
							return temp0(temp1);
						});
				}(),
				subscriptions: A2(_Reader_recordExpr, 4, author$project$Main$subscriptions),
				update: A2(_Reader_recordExpr, 5, author$project$Main$update),
				view: A2(_Reader_recordExpr, 6, author$project$Main$view)
			});
		return A3(
			_Reader_recordCall,
			0,
			temp2,
			function (_n1) {
				return temp2(temp3);
			});
	});
_Platform_export({'Main':{'init':author$project$Main$main(