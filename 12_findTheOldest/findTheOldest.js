const findTheOldest = function(people) {
    // reduce the list based on highest age of each person
    return people.reduce( (prev,current) => {
        // if person is alive: set to their current age; 
        // else set to diff between death and birth
        const prevAge = ((typeof prev['yearOfDeath'] === 'undefined') ? 2022-prev['yearOfBirth'] : prev['yearOfDeath']-prev['yearOfBirth']);
        const currentAge = ((typeof current['yearOfDeath'] === 'undefined') ? 2022-current['yearOfBirth'] : current['yearOfDeath']-current['yearOfBirth']);
        return ((currentAge > prevAge) ? current : prev);

    }, people[0]);
    
};

// Do not edit below this line
module.exports = findTheOldest;
