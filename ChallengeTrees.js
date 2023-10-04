class Person {
    constructor(firstName, lastName, birthdate) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdate = birthdate;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  }
  
  const grandma = new Person("Alice", "Johnson", "1930-01-15");
  const grandpa = new Person("Bob", "Johnson", "1928-07-22");
  
  const mom = new Person("Carol", "Smith", "1955-03-10");
  mom.addChild(new Person("David", "Smith", "1978-09-05"));
  mom.addChild(new Person("Emily", "Smith", "1981-11-20"));
  
  const dad = new Person("Edward", "Johnson", "1952-12-01");
  dad.addChild(new Person("Frank", "Johnson", "1976-06-15"));
  dad.addChild(new Person("Grace", "Johnson", "1984-02-28"));
  
  grandma.addChild(mom);
  grandpa.addChild(dad);
  
  console.log("Family Tree (Pre-order):");
  function preOrderTraversal(person) {
    console.log(`${person.firstName} ${person.lastName} (${person.birthdate})`);
    person.children.forEach(child => preOrderTraversal(child));
  }
  preOrderTraversal(grandma);
  
  console.log("\nFamily Tree (Post-order):");
  function postOrderTraversal(person) {
    person.children.forEach(child => postOrderTraversal(child));
    console.log(`${person.firstName} ${person.lastName} (${person.birthdate})`);
  }
  postOrderTraversal(grandma);
  
  console.log("\nFamily Tree (In-order):");
  function inOrderTraversal(person) {
    if (person.children.length > 0) {
      inOrderTraversal(person.children[0]);
    }
    console.log(`${person.firstName} ${person.lastName} (${person.birthdate})`);
    if (person.children.length > 1) {
      inOrderTraversal(person.children[1]);
    }
  }
  inOrderTraversal(grandma);
  