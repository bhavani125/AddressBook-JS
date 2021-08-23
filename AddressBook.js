/**
 * Ability to create a Address Book Contact with,
 * first and last names,address, city, state, zip, phone numberand email...
 */
//welcome message
console.log("Welcome to The Address Book JS Program ") 

//Creating class
class Contact
{
    //properties
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    //Creatinng a method constructor 
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

//Creating object
let contact1 = new Contact("Bhavani", " Girineni", "jayanagar", "Bangalore", "Karnataka",500085,8309483421, "girinenibhavani12@gmail.com")
//calling the onject here
console.log(contact1)