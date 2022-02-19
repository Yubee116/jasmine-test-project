describe('Address Book', () => {
    it('should be able to add a contact', ()=>{
        // Arrange
        addressBook = new AddressBook();
        contact = new Contact();

        //Act
        addressBook.addContact(contact);

        //Assert
        expect(addressBook.getContact(0)).toBe(contact);
    })

    it('should be able to delete a contact', ()=>{
        //Arrange
        addressBook = new AddressBook();
        contact = new Contact();

        //Act
        addressBook.addContact(contact);
        addressBook.deleteContact(0);

        //Assert
        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});
