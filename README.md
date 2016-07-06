# lodash-featurefill
A module for setting lodash functions as prototype methods.  
**Currently only built for nodejs and requires nodejs v6.0.0+.**

### Usage
     $ npm install lodash-featurefills --save
Constructor takes a bool parameter indicating if native prototype implementations should be overwritten or not. E.g. if is set to `true`, `Array.prototype.forEach` will be overridden with lodash foreach implementation.
```js
var lodashFeaturefills = require('lodash-featurefills');
var overrideNativeImplementation = false;

lodashFeaturefills( overrideNativeImplementation );
```

##### Example
```js
var items = [0, 1, false, 2, '', 3];

//With lodash
_.compact(items); // → [1, 2, 3]

//With featurefills
items.compact(); // → [1, 2, 3]
```

### Supported API

##### Array
_.chunk  
_.compact  
_.concat  
_.difference  
_.differenceBy  
_.differenceWith  
_.drop  
_.dropRight  
_.dropRightWhile  
_.dropWhile  
_.fill  
_.findIndex  
_.findLastIndex  
_.first → head  
_.flatten  
_.flattenDeep  
_.flattenDepth  
_.fromPairs  
_.head  
_.indexOf  
_.initial  
_.intersection  
_.intersectionBy  
_.intersectionWith  
_.join  
_.last  
_.lastIndexOf  
_.nth  
_.pull  
_.pullAll  
_.pullAllBy  
_.pullAllWith  
_.pullAt  
_.remove  
_.reverse  
_.slice  
_.sortedIndex  
_.sortedIndexBy  
_.sortedIndexOf  
_.sortedLastIndex  
_.sortedLastIndexBy  
_.sortedLastIndexOf  
_.sortedUniq  
_.sortedUniqBy  
_.tail  
_.take  
_.takeRight  
_.takeRightWhile  
_.takeWhile  
_.union  
_.unionBy  
_.unionWith  
_.uniq  
_.uniqBy  
_.uniqWith  
_.unzip  
_.unzipWith  
_.without  
_.xor  
_.xorBy  
_.xorWith  
_.zip  
_.zipObject  
_.zipObjectDeep  
_.zipWith  
##### Collection
_.countBy  
_.each → forEach  
_.eachRight → forEachRight  
_.every  
_.filter  
_.find  
_.findLast  
_.flatMap  
_.flatMapDeep  
_.flatMapDepth  
_.forEach  
_.forEachRight  
_.groupBy  
_.includes  
_.invokeMap  
_.keyBy  
_.map  
_.orderBy  
_.partition  
_.reduce  
_.reduceRight  
_.reject  
_.sample  
_.sampleSize  
_.shuffle  
_.size  
_.some  
_.sortBy  

##### Date
_.now  

##### String
_.camelCase  
_.capitalize  
_.deburr  
_.endsWith  
_.escape  
_.escapeRegExp  
_.kebabCase  
_.lowerCase  
_.lowerFirst  
_.pad  
_.padEnd  
_.padStart  
_.parseInt  
_.repeat  
_.replace  
_.snakeCase  
_.split  
_.startCase  
_.startsWith  
_.template  
_.toLower  
_.toUpper  
_.trim  
_.trimEnd  
_.trimStart  
_.truncate  
_.unescape  
_.upperCase  
_.upperFirst  
_.words  