var eventsBL = require('./eventsBL')

module.exports = (app)=>{
    app.get('/events/read', function(req, res){
        eventsBL.retrieveEvents().then(
            results => {
                res.json(results)
            }
        ).catch(
            err => {
                res.json({'message':'unable to do stuff.'})
            }
        )
    })

    app.post('/events/add', ()=>{
        res.send('event added')
    })

    app.post('/events/delete', ()=>{
        res.send('Event deleted.')
    })
}