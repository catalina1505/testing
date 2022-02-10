class FirstPerson {
    firstName;
    lastName;
    middleName;
    fullNamePieces;

     constructor(data = {}) {

        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
        this.fullNamePieces = [data.firstName, data.middleName, data.lastName];

    }

    get fullName() {
        if(this.middleName.length > 0) {
            return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
        }
        return `${this.firstName} ${this.lastName}`;
    }

    sayMyName() {
        window.alert(this.fullName);
    }

    getCodeName() {
        const isATestingGod = confirm('Are you a testing God?');

        if(isATestingGod) {
            return 'TESTING GOD'
        } else {
            return 'NOT A TESTING GOD'
        }
    }
}
