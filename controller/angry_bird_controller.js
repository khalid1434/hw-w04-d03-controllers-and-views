var express = require('express');

var router = express.Router();

var angry_birds = require('../modules/angry_birds');

router.get('/', function(request, response){

    var mustacheVariables = {

        bird_list:angry_birds['birds']
    }

    response.render('./index', mustacheVariables);

    router.get('/:bird', function(request, response){

        var bird_Id = request.params.bird;
        var birds = angry_birds['birds'][bird_Id];
        var mustacheVariables = {

            name: birds[name],
            abilities: birds['abilities'],
            image: birds['image'],
            group: birds[group],
            feels: birds['feels']
        }

        response.render('./show', mustacheVariables);

    })
})


module.exports = router;