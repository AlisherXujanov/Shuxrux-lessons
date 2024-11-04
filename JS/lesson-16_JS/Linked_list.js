class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    prepend(data) {
        const new_node = new Node(data);
        new_node.next = this.head;
        this.head = new_node;
    }
    append(data) {
        const new_node = new Node(data);
        if (this.head === null) {
            this.head = new_node;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = new_node;
    }

    insert(index, data) {
        if (index === 0) {
            this.prepend(data);
            return;
        } else if (index === -1) {
            this.append(data);
            return;
        } else if (index < 0) {
            throw new Error('Negative index is not allowed');
        }

        const new_node = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (current === null) {
                throw new Error('Index out of range');
            }
            current = current.next;
        }
        new_node.next = current.next;
        current.next = new_node;
    }

    remove(value) {
        let current = this.head;
        if (current && current.data === value) {
            this.head = current.next;
            return;
        }
        let prev = null;
        while (current && current.data !== value) {
            prev = current;
            current = current.next;
        }
        if (current === null) {
            return;
        }
        prev.next = current.next;
    }

    remove_at(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        for (let i = 0; i < index; i++) {
            if (current === null) {
                throw new Error('Index out of range');
            }
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }

    print_list() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
