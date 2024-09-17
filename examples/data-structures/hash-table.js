import HashTable from "../../data-structures/hash-table.js";

const hash = new HashTable;

hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.hashCode("Gandalf") + " - Gandalf");
console.log(hash.hashCode("John") + " - John");
console.log(hash.hashCode("Tyrion") + " - Tyrion");

console.log(hash.get("Gandalf"));
console.log(hash.get("Loiane"));

hash.remove("Gandalf");
console.log(hash.get("Gandalf"));

hash.put("Ygritte", "ygritte@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Jack", "jack@email.com");
hash.put("Jasmine", "jasmine@email.com");
hash.put("Jake", "jake@email.com");
hash.put("Nathan", "nathan@email.com");
hash.put("Athelstan", "athelstan@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Aethelwulf", "aethelwulf@email.com");
hash.put("Sargeras", "sargeras@email.com");

console.log(hash.hashCode("Ygritte") + " - Ygritte");
console.log(hash.hashCode("Jonathan") + " - Jonathan");
console.log(hash.hashCode("Jamie") + " - Jamie");
console.log(hash.hashCode("Jack") + " - Jack");
console.log(hash.hashCode("Jasmine") + " - Jasmine");
console.log(hash.hashCode("Jake") + " - Jake");
console.log(hash.hashCode("Nathan") + " - Nathan");
console.log(hash.hashCode("Athelstan") + " - Athelstan");
console.log(hash.hashCode("Sue") + " - Sue");
console.log(hash.hashCode("Aethelwulf") + " - Aethelwulf");
console.log(hash.hashCode("Sargeras") + " - Sargeras");

console.log("**** Printing Hash **** ");
console.log(hash.toString());
