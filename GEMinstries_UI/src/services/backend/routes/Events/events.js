var eventsBL = require('./eventsBL')

module.exports = app =>{
    app.get('/events/read', function(req, res){
        eventsBL.retrieveEvents().then(
            results => {
                res.json(results)
            }
        ).catch(
            err => {
                res.json({'message':'unable to do stuff;', err})
            }
        )
    })

    app.post('/events/add', (req,res) => {

        eventsBL.addEventBL(req.body.event).then(
            result => {
                console.log('result(s)',result)
                res.json({message: "success!"})
            }
        ).catch(
            err => res.json({message: `oops... something went wrong; error - ${err}`})
        )
    })

    app.post('/events/delete', ()=>{
        res.send('Event deleted.')
    })
}