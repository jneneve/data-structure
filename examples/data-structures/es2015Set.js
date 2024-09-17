const set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size);

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size);

set.delete(1);
console.log(set.values());

set.delete(2);
console.log(set.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

// Union
const union = (set1, set2) => {
    const unionAB = new Set();
    set1.forEach(value => unionAB.add(value));
    set2.forEach(value => unionAB.add(value));
    return unionAB;
}

console.log(union(setA, setB));
console.log(new Set([...setA, ...setB]));

// Intersection
const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if (set2.has(value)) {
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};

console.log(intersection(setA, setB));
console.log(new Set([...setA].filter(x => setB.has(x))));

// Difference
const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if (!set2.has(value)) {
            differenceSet.add(value);
        }
    });
    return differenceSet;
};

console.log(difference(setA, setB));
console.log(new Set([...setA].filter(x => !setB.has(x))));
