function AddressBook(){
    this.contacts = [];
    
}

AddressBook.prototype.getContact = function(index){
    return this.contacts[index];

}

AddressBook.prototype.addContact = function(contact){
    this.contacts.push(contact);
}

AddressBook.prototype.deleteContact = function(index){
    this.contacts.splice(index,1);
}