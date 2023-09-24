function Node(data) {
  this.data = data;
  this.next = null;
}   
   
function insertNth(head, index, data) { 
  if (index < 0) {
    throw new Error("Invalid index value: index must be non-negative.");
  }

  if (index === 0) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let previous = null;
  let count = 0;

  while (count < index && current !== null) {
    previous = current;
    current = current.next;
    count++;
  }

  if (count < index) {
    throw new Error("Invalid index value: index is larger than the length of the list.");
  }

  const newNode = new Node(data);
  newNode.next = current;
  previous.next = newNode;

  return head;
}
