const express = require("express");
const app = express();
const port = 8000;
    

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to AS Faker assignment" });
});


app.get("/api/users/new", (req, res) => {
    res.json({ newFakeUser });
    
});


app.get("/api/companies/new", (req, res) => {
    res.json({ newFakeCompany });
});

app.get("/api/user/company", (req, res) => {
    res.json({  newFakeUser ,  newFakeCompany});
    
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );



const {faker} = require('@faker-js/faker')

const createUser = () => {
    const fakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.string.uuid(),
    };
    return fakeUser;
}
const createCompany = () => {
    const fakeCompany = {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        } 
    };
    return fakeCompany;
}

const newFakeUser = createUser();
console.log(newFakeUser);
const newFakeCompany = createCompany();
console.log(newFakeCompany);



