// mocking
describe(`${SecondPerson.name} Class`, () => {
    let model;
    let mockPersonService;

    beforeEach(() => {
        const data = { firstName: 'Dylan', middleName: ' Chris', lastName: 'Israel', id: 1};
        mockPersonService = {
            lastId: null,
            user: {},
            getUserById(id) {
                this.lastId = id;

                return this.user;
            }
        };
        
        model = new SecondPerson(data, mockPersonService);
    })

    describe('getMyFullUserData', () => {
        it('gets user data by id', async () => {
            //arrange
            mockPersonService.lastId = null;
            mockPersonService.user = { 
                firstName: 'Dylan', 
                middleName: ' Chris', 
                lastName: 'Israel', 
                id: 1
            };
            
             //act
             const result = await model.getMyFullUserData();
        
             //assert
             expect(mockPersonService.lastId).toBe(1);
        });
    });
});