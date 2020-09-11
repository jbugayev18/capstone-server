const xss = require('xss')
const Treeize = require('treeize')

const TutorsService = {
    getAllTutors(db){
        return db 
            .select('*')
            .from('tutors')
            
    }, 

    getById(db, id){
        return db
        .from('tutors')
        .select('*')
        .where('id', id)
        .first()
    }, 

    getByZipCode(db, zipcode){
        return db
        .from('tutors') //from the db table
        .select('*')
        .where('zipcode', zipcode)
        .first()
    },

    
    serializeTutors(tutors){
        return tutors.map(this.serializeTutors)
    },

    serializeTutors(tutors){
        const tutorTree = new Treeize()

    const tutorsData = tutorTree.grow([ thing ]).getData()[0]

    return {
        id: tutorsData.id, 
        title: xss(tutorsData.title), 
        content: xss(tutorsData.content), 
        date_created: tutorsData.date_created, 
        image: tutorsData.image, 
        user: tutorsData.user || {}, 
        zipcode:tutorsData.zipcode
    }
    },
}

const userFields = [
    'usr.id AS user:id', 
    'usr.user_name AS user: user_name', 
    'usr.full_name AS user:full_name', 
    'usr.date_created AS user:date_created', 
]



module.exports = TutorsService