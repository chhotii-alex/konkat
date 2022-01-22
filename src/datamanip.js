/* Group objects by a particular key.
Input: 
    objects: a collection of objects
    key: a key that every object in the collection must have
Output:
    Object that maps the distinct values for key to arrays
        containing those objects having that value for the key.
Example:
    key = "foo"
    objects = [
        { foo: 'a', bar: 1},
        { foo: 'b', bar: 2},
        { foo: 'a', bar: 3}
    ]
    output = {
        'a' : [
            { foo: 'a', bar: 1},
            { foo: 'a', bar: 3}
        ],
        'b' : [
            { foo: 'b', bar: 2}
        ]
    }
*/
function collectByValue(objects, key) {
    let c = {};
    for (let i = 0; i < objects.length; ++i) {
        let o = objects[i];
        let val = o[key];
        if (!(val in c)) {
            c[val] = [];
        }
        c[val].push(o);
    }
    return c;
}

/*
    Given an object, return an array of objects.
    Each object will be:
        keyName -> a key from the original object
        valueName -> the corresponding value in the original object
    Importantly, the array will be sorted by key.
    Example:
    c = {
        'b' : 777,
        'a' : 999
    }
    keyName = 'foo'
    valueName = 'things'
    output = [
        {
            'foo' : 'a',
            'things' : 999
        },
        {
            'foo' : 'b',
            'things' : 777
        }
    ]
    Notice that in the sample output, foo: 'a' comes before foo: 'b'.
*/
function sortDataByKeys(c, keyName, valueName) {
    let keys = Object.keys(c).sort();
    let result = [];
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const value = c[key];
        const newObj = {};
        newObj[keyName] = key;
        newObj[valueName] = value;
        result.push(newObj);
    }
    return result;
}
