class FamilyMember {
    constructor(name, birthdate, parent=null) {
        this.name = name;
        this.birthdate = birthdate;
        this.parent = parent;
        this.children = [];
    }

    addChild(child) {
        child.parent = this;
        this.children.push(child);
    }
}

// Construct the family tree
const thirdGenParent = new FamilyMember('Eleanor Smith', '1905-01-01');

const secondGenParentA = new FamilyMember('Charles Smith', '1930-02-10');
thirdGenParent.addChild(secondGenParentA);

const secondGenParentB = new FamilyMember('Martha Smith', '1935-03-15');
thirdGenParent.addChild(secondGenParentB);

const firstGenParentA = new FamilyMember('William Smith', '1960-04-20');
secondGenParentA.addChild(firstGenParentA);

const firstGenParentB = new FamilyMember('Lucy Smith', '1965-05-25');
secondGenParentB.addChild(firstGenParentB);

const me = new FamilyMember('Alex Smith', '1990-06-30');
firstGenParentA.addChild(me);

// Traversals

// Pre-order
function preOrder(node) {
    if (!node) return;
    console.log(`${node.name} (${node.birthdate})`);
    for (let child of node.children) {
        preOrder(child);
    }
}

// Post-order
function postOrder(node) {
    if (!node) return;
    for (let child of node.children) {
        postOrder(child);
    }
    console.log(`${node.name} (${node.birthdate})`);
}

// In-order (assumes maximum 2 children for simplicity)
function inOrder(node) {
    if (!node) return;

    if (node.children[0]) {
        inOrder(node.children[0]);
    }
    
    console.log(`${node.name} (${node.birthdate})`);

    if (node.children[1]) {
        inOrder(node.children[1]);
    }
}

// Display the family tree

console.log("Pre-order Traversal:");
preOrder(thirdGenParent);

console.log("\nPost-order Traversal:");
postOrder(thirdGenParent);

console.log("\nIn-order Traversal:");
inOrder(thirdGenParent);
