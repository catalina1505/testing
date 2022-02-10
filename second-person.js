class SecondPerson {
    firstName;
    lastName;
    middleName;
    fullNamePieces;

    constructor(data, personService) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
        this.fullNamePieces = [data.firstName, data.middleName, data.lastName];
        this.id = data.id;
        this.personService = personService;
    }

    async getMyFullUserData() {
        return this.personService.getUserById(this.id);
    }
}
