// the basic logic of unit tests
describe('Modal Component', () => {
    it('opens on click', () => {
        expect(true).toBe(true)
    })
})


// basic practicing
describe(`${FirstPerson.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new FirstPerson()
    })

    describe('default values', () => {
        it('first name defaults to empty string', () => {
            //assert
            expect(model.firstName).toBe('');
        });
        it('last name defaults to empty string', () => {
            //assert
            expect(model.lastName).toBe('');
        });
        it('middle name defaults to empty string', () => {
            //assert
            expect(model.middleName).toBe('');
        });
    })

    // spies
    describe('say my name', () => {
        it('alerts the full name of user', () => {
            //arange
            model.firstName = 'Dylan';
            model.lastName = 'Israel';
            spyOn(window, 'alert');

            //act
            model.sayMyName()
            
            //assert
            expect(window.alert).toHaveBeenCalledWith(model.fullName);

        });
    })

    describe('get code name', () => {
        it('when confirmed is a testing god', () => {
            //arange
            spyOn(window, 'confirm').and.returnValue(true);

            //act
            const result = model.getCodeName();
            
            //assert
            expect(result).toBe('TESTING GOD');
        });

        it('when confirmed is NOT a testing god', () => {
          //arange
          spyOn(window, 'confirm').and.returnValue(false);

          //act
          const result = model.getCodeName();
          
          //assert
          expect(result).toBe('NOT A TESTING GOD');
        });
    })

    // Additional matchers
    describe('additional matchers examples', () => {
        it('gets full name pieces', () => {
            //arrange
            const firstName = 'Dylan';
            const middleName = 'Chris';
            const lastName = 'Israel';

            //act
            model = new FirstPerson({firstName, middleName, lastName });

            //assert
            expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
        });
        it('fullName has my first name', () => {
            //arrange
            const firstName = 'Dylan';
            const lastName = 'Israel';

            //act
            model = new FirstPerson({firstName, lastName });

            //assert
            expect(model.fullName).toMatch(/Dylan/);
        });
    })
});

describe('full name', () => {
    let model;

    beforeEach(() => {
        model = new FirstPerson({
            firstName: 'Dylan',
            lastName: 'Israel'
        })
    })

        it('middle initial when middle name is defined with first and last ', () => {
            //arrange
            model.middleName = 'Christopher';
            
            //act
            const result = model.fullName

            //audit
            const {firstName: fn, lastName: ln, middleName: mn} = model;

            //assert
            expect(result).toBe(`${fn} ${mn[0]}. ${ln}`);
        });
        it('when NO middle name returns just first and last', () => {
              //arrange
              model.middleName = '';
            
              //act
              const result = model.fullName
  
              //audit
              const {firstName: fn, lastName: ln} = model;
  
              //assert
              expect(result).toBe(`${fn} ${ln}`);
        });
    
});
