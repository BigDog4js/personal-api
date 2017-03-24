const user = require(`../user.js`);
const skills = require(`../skills.js`);
const secrets = require(`../secrets.js`);


module.exports = {
    getName: function(req, res, next) {
        return res.status(200).json({name: user.name})
    },
    
    getLocation: function(req, res, next) {
        return res.status(200).json(user.location)
    },
    
    getOccupations: function(req, res, next) {
        // Make a copy so we can sort
        var occupations = user.occupations.slice();
        
        if (req.query.order === 'asc') {
            occupations.sort();
            return res.status(200).json({occupations: occupations})
        } else if (req.query.order === 'desc') {
            occupations.reverse();
            return res.status(200).json({occupations: occupations})
        }
        return res.status(200).json({occupations: occupations})
        
    },
    getOccupationsLatest: function(req, res, next) {
        // Some javascript logic, like a toy problem
        return res.status(200).json(user.occupations[user.occupations.length - 1])
//        return res.status(200).json(user.occupations.slice(-1))
        //Then return the result 
    }, 
    getHobbies: function(req, res, next) {
        return res.status(200).json({hobbies: user.hobbies})
    },
    getHobbiesByType: function(req, res, next) {
        var filteredHobbies = 
        // Long form
//        user.hobbies.filter(function(hobby) {
//            if (hobby.type === req.params.type) {
//                return true
//            } else {
//                return false
//            }
//        })
        // Short form
        user.hobbies.filter(hobby => hobby.type === req.params.type)
        
        return res.status(200).json({hobbies: filteredHobbies})
    },
    getFamilyMembers: function(req, res, next) {
        // Check for a query on req.query
        if (req.query.name) {
            var filteredFamily = user.family.filter(person => person.name === req.query.name)
            return res.status(200).json({family: filteredFamily})
        }        
      return res.status(200).json({family: user.family})  
    },
    getFamilyGender: function(req, res, next) {
//        var newFamily = []
//        for (var member of user.family) {
//            if(member.gender === req.params.gender) {
//                newFamily.push(member)
//            }
//        }
        var filteredFamily = user.family.filter(person => person.gender === req.params.gender)
      return res.status(200).json({family: filteredFamily})          
    },
    getRestaurants: function(req, res, next) {
        if (req.query.rating) {
            // Filter the restaurants based on the rating
            var filteredRating = user.restaurants.filter(eats => eats.rating >= req.query.rating)
            // Send the filtered restaurants
            return res.status(200).json({restaurants: filteredRating})
        }
        return res.status(200).json({restaurants: user.restaurants})
    },
    getRestaurantsName: function(req, res, next) {
        var filteredRestaurants = user.restaurants.filter(eats => eats.name.includes(req.params.name))
        return res.status(200).json({restaurants: filteredRestaurants})
    },
    
    changeName: function(req, res, next) {
        user.name = req.body.name
        return res.status(200).json({newName:user.name})
        
    },
    
    changeLocation: function(req, res, next) {
        user.location = req.body.location
        return res.status(200).json({newLocation:user.location})
    },
    
    postHobby: function(req, res, next) {
        user.hobbies.push(req.body)
        return res.status(200).json({hobbies:user.hobbies})
    },
    
    postOccupations: function(req, res, next) {
        user.occupations.push(req.body.occupation)
        return res.status(200).json({occupations:user.occupations})
    },
    
    postFamily: function(req, res, next) {
        user.family.push(req.body)
        return res.status(200).json({family:user.family})
    },
    
    postRestaurant: function(req, res, next) {
        user.restaurants.push(req.body)
        return res.status(200).json({restaurants:user.restaurants})
    },

    getSkills: function(req, res, next) {
        if (req.query.experience) {
            var filteredSkills = skills.filter(skill => skill.experience >= req.query.experience)
            // Send the filtered restaurants
            return res.status(200).json({skills: filteredSkills})
        }
        return res.status(200).json({skills: skills})
    },
    
    postSkills: function(req, res, next) {
        skills.push(req.body)
         return res.status(200).json({skills: skills})
    },
    getSecrets: function(req, res, next) {
        return res.status(200).json({secrets: secrets})
        
    }
    
    
    
}
