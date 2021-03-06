const router = require('express').Router(); 
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
            .then((exercises) => res.json(exercises) )
            .catch(err => res.json('Error : ' + err) )
})

router.route('/add').post((req, res) =>  {
    const username = req.body.username; 
    const description = req.body.description;
    const interval = Number(req.body.interval)
    const details = req.body.details; 
    const date = Date.parse(req.body.date); 

    console.log(username)
    const newExercise = new Exercise({
        username, description, interval, details,  date
    })

    newExercise.save()
                .then((exercise) => res.json(exercise))
                .catch(err => res.status(400).json('Could not run ' + err))
})

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            console.log(exercise)
        })
        .catch(err => res.json('Error : ' + err))
})

router.route('/:id/update').post((req, res) => {
    Exercise.findById(res.params.id, )
        .then(exercise => {
            exercise.username += req.body.username; 
            exercise.save() 
                .then(() => res.json('This one is done'))
        })
        .catch(err => err.json('Error : ' + err))
})

router.route('/:id/delete').delete((req, res) => {
    Exercise.findByIdAndDelete(res.params.id) 
        .then(exercise => {
            res.json('Deleted')
        })
        .catch(err => err.json('Error : ' + err))
})


module.exports = router; 