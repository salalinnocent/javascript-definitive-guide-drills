class Node {
    constructor(data, next = null || undefined ) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null || undefined;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }

    insertLast(data) {
        this.tail = new Node(data, this.tail)
    }

    insertatIndex(data){
        let array = [];
       for(let i = 0; i <= data.length -1; i++){
            i = data[i];
            data[i] = array
            
       }
       return array;
    }

    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;

        }
    }
}

//Insert first node 

//Insert last node


//Insert at index

//Get at Index

//Remove at index

//Clear list

//Print list data
