class HashTable {

    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }


    //hash function
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    //add new item 
    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }
    //retrive key
    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }
    //remove 
    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }
    //display all hash table 
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {  // Corrected from this.talbe[i]
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);  

table.set("skyler", "32");  
table.set("scarlett", "27");  

table.display();  
console.log(table.get("skyler"))