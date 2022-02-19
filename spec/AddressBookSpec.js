describe('Address Book', () => {
    beforeEach(()=>{
        //Arrange
        addressBook = new AddressBook();
        contact = new Contact();

    })

    it('should be able to add a contact', ()=>{
        //Act
        addressBook.addContact(contact);

        //Assert
        expect(addressBook.getContact(0)).toBe(contact);
    })

    it('should be able to delete a contact', ()=>{
        //Act
        addressBook.addContact(contact);
        addressBook.deleteContact(0);

        //Assert
        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Async AddressBook', ()=> {
    it('should retrieve inital contacts', ()=>{
        // Arrange
        addressBook = new AddressBook();

        //Act
        addressBook.getInitialContacts();

        //Assert
        expect(addressBook.initialComplete).toBe(true);
    })


});
