var _ = require('lodash');

module.exports = function(overrideArrayPrototype = false) {
	
	var arrayFunctions = [
		"chunk",
		"compact",
		"concat",
		"difference",
		"differenceBy",
		"differenceWith", 
		"drop",
		"dropRight",
		"dropRightWhile",
		"dropWhile",
		"fill",
		"findIndex",
		"findLastIndex",
		"first",
		"flatten",
		"flattenDeep",
		"flattenDepth",
		"fromPairs",
		"head",
		"indexOf",
		"initial",
		"intersection",
		"intersectionBy",
		"intersectionWith",
		"join",
		"last",
		"lastIndexOf",
		"nth",
		"pull",
		"pullAll",
		"pullAllBy",
		"pullAllWith",
		"pullAt",
		"remove",
		"reverse",
		"slice",
		"sortedIndex",
		"sortedIndexBy",
		"sortedIndexOf",
		"sortedLastIndex",
		"sortedLastIndexBy",
		"sortedLastIndexOf",
		"sortedUniq",
		"sortedUniqBy",
		"tail",
		"take",
		"takeRight",
		"takeRightWhile",
		"takeWhile",
		"union",
		"unionBy",
		"unionWith",
		"uniq",
		"uniqBy",
		"uniqWith",
		"unzip",
		"unzipWith",
		"without",
		"xor",
		"xorBy",
		"xorWith",
		"zip",
		"zipObject",
		"zipObjectDeep",
		"zipWith"
	];

	arrayFunctions.forEach(function(fnName) {
		var isNativeFunction = Array.prototype.hasOwnProperty(fnName);
		
		if(isNativeFunction && overrideArrayPrototype === false) {
			return;
		}

		Array.prototype[fnName] = function(...args) {
			return _[fnName](this, ...args)
		}

	});

	var collectionFunctions = [
		"countBy",
		"each",
		"eachRight",
		"every",
		"filter",
		"find",
		"findLast",
		"flatMap",
		"flatMapDeep",
		"flatMapDepth",
		"forEach",
		"forEachRight",
		"groupBy",
		"includes",
		"invokeMap",
		"keyBy",
		"map",
		"orderBy",
		"partition",
		"reduce",
		"reduceRight",
		"reject",
		"sample",
		"sampleSize",
		"shuffle",
		"size",
		"some",
		"sortBy"
	];

	collectionFunctions.forEach(function(fnName) {
		var isNativeFunction = Array.prototype.hasOwnProperty(fnName);
		
		if(isNativeFunction && overrideArrayPrototype === false) {
			return;
		}

		Array.prototype[fnName] = function(...args) {
			return _[fnName](this, ...args)
		}

	});

	var dateFunctions = [
		"now"
	];

	dateFunctions.forEach(function(fnName) {
		var isNativeFunction = Array.prototype.hasOwnProperty(fnName);
		
		if(isNativeFunction && overrideArrayPrototype === false) {
			return;
		}

		Date.prototype[fnName] = function(...args) {
			return _[fnName](this, ...args)
		}

	});

	var stringFunctions = [
		"camelCase",
		"capitalize",
		"deburr",
		"endsWith",
		"escape",
		"escapeRegExp",
		"kebabCase",
		"lowerCase",
		"lowerFirst",
		"pad",
		"padEnd",
		"padStart",
		"parseInt",
		"repeat",
		"replace",
		"snakeCase",
		"split",
		"startCase",
		"startsWith",
		"template",
		"toLower",
		"toUpper",
		"trim",
		"trimEnd",
		"trimStart",
		"truncate",
		"unescape",
		"upperCase",
		"upperFirst",
		"words"
	];

	stringFunctions.forEach(function(fnName) {
		var isNativeFunction = Array.prototype.hasOwnProperty(fnName);
		
		if(isNativeFunction && overrideArrayPrototype === false) {
			return;
		}

		String.prototype[fnName] = function(...args) {
			return _[fnName](this, ...args)
		}

	});
};
