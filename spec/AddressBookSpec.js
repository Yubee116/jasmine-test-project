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
    beforeEach(function(done){
        // Arrange
        addressBook = new AddressBook();
        
        //Act
        addressBook.getInitialContacts(()=>{
            done();
        });

    })
    
    it('should retrieve inital contacts', (done)=>{
        //Assert
        expect(addressBook.initialComplete).toBe(true);
        done();
    })


});
