export default {
    firstName: 'John',
    lastName: 'Doe',
    set fullName(text){
        const [firstName, lastName] = text.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}