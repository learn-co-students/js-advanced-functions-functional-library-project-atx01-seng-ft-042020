const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        let keys = Object.keys(collection)
        for (let i = 0; i < keys.length; i++) {
          callback(collection[keys[i]], keys[i], collection)
        }
      }
      // return original collection
      return collection;
    },

    map: function (collection, callback) {
      const newArr = []
      this.each(collection, (val, i, coll) => {
        newArr.push(callback(val, i, coll))
      })
      return newArr;
    },

    reduce: function (collection, callback, acc) {
      let i = 0
      if (acc == undefined) {
        i = 1
        acc = collection[0]
      }
      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function (collection, predicate) {
      let filteredArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filteredArray.push(collection[i])
        }
      }
      return filteredArray
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length
      }
      return Object.keys(collection).length
    },

    first: function (array, n) {
      if (n) {
        return array.slice(0, n)
      }
      return array[0]
    },

    last: function (array, n) {
      if (n) {
        return array.slice(-n)
      }
      return array[array.length - 1]
    },

    compact: function (array) {
      return this.filter(array, (val) => val)
    },

    sortBy: function (array, callback) {
      return [...array].sort((a, b) => callback(a) - callback(b))
    },

    flatten: function (array, shallow) {
      const flattenedArray = []

      function flat(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i]) && !shallow) {
            // flatten all arrays
            flat(arr[i])
          } else if (Array.isArray(arr[i])) {
            // flatten shallow (1 nested array deep)
            arr[i].forEach(ele => {
              flattenedArray.push(ele)
            });
          } else {
            flattenedArray.push(arr[i])
          }
        }
      }
      flat(array)
      return flattenedArray
    },
    uniq: function (array, isSorted, callback) {
      const uniqArr = []
      const transformedArr = []
      if (isSorted) {
        array.sort()
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i]
        let transformed;
        if (callback) {
          transformed = callback(current)
          transformedArr.push(transformed)
          if (transformedArr.indexOf(transformed) == i) {
            uniqArr.push(current)
          }
        } else {
          if (array.indexOf(current) == i) {
            uniqArr.push(current)
          }
        }

      }
      return uniqArr;
    },
    keys: function (object) {
      return Object.keys(object)
    },
    values: function (object) {
      const vals = []
      this.keys(object).forEach(key => vals.push(object[key]))
      return vals;
    },
    functions: function (fi) {
      const functionsArr = [];
      for (let key in fi) {
        if (typeof fi[key] === "function") {
          functionsArr.push(key)
        }
      }
      return functionsArr.sort()
    }
  }
})()

fi.libraryMethod()
