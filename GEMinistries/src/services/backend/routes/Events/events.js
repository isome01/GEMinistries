const eventsBL = require('./eventsBL')

module.exports = app =>{
    app.get('/events/read', function(req, res){
        eventsBL.retrieveEvents().then(
            results => {
                res.json({message: results})
            }
        ).catch(
            err => {
                res.json({message:'unable to do stuff;', err})
            }
        )
    })

    app.post('/events/add', (req,res) => {
        console.log('event:',req.body.event)
        eventsBL.addEventBL(req.body.event).then(
            result => {
                res.json({message: `Event "${result.ops.title}" created.`})
            }
        ).catch(
            err => res.json({message: `oops... something went wrong; error - ${err}`})
        )
    })

    app.post('/events/delete', ()=>{
        res.send('Event deleted.')
    })
}
