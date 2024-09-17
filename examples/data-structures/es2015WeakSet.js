var set = new WeakSet();

const ob1 = { name: 'Gandalf' };
const ob2 = { name: 'John' };
const ob3 = { name: 'Tyrion' };

set.add(ob1);
set.add(ob2);
set.add(ob3);

console.log(set.has(ob1));
console.log(set.has(ob2));
console.log(set.has(ob3));

set.delete(ob2);
console.log(set.has(ob2));
