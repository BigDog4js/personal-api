const express = require("express");
const bodyParser = require("body-parser");

const user = require('./user.js');
console.log(user.name)
const app = express();

const occupationRouter = require('./routes/occupation_router.js')


app.use(bodyParser.json());

const middleware = require(`./controllers/middleware.js`);

const mainCtrl = require(`./controllers/mainCtrl.js`);

app.use(middleware.addHeaders);

app.use('/occupations', occupationRouter)

app.get(`/name`,mainCtrl.getName)

app.get(`/location`,mainCtrl.getLocation)

//app.get(`/occupations`,mainCtrl.getOccupations)
////
////app.get(`/occupations/latest`,mainCtrl.getOccupationsLatest)

app.get(`/hobbies`, mainCtrl.getHobbies)

app.get(`/hobbies/:type`, mainCtrl.getHobbiesByType)

app.get('/family', mainCtrl.getFamilyMembers)

app.get(`/family/:gender`, mainCtrl.getFamilyGender)

app.get(`/restaurants`, mainCtrl.getRestaurants)

app.get(`/restaurants/:name`,mainCtrl.getRestaurantsName)

app.put(`/name`, mainCtrl.changeName)

app.put(`/location`,mainCtrl.changeLocation)

app.post(`/hobbies`,mainCtrl.postHobby)

app.post(`/family`,mainCtrl.postFamily)

app.post(`/restaurants`,mainCtrl.postRestaurant)

app.get(`/skills`,mainCtrl.getSkills)

app.post(`/skills`,middleware.generateId,mainCtrl.postSkills)

app.get(`/secrets/:username/:pin`,middleware.verifyUser,mainCtrl.getSecrets)



app.listen(3000)

