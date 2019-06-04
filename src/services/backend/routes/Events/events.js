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
        eventsBL.addEventBL(req.body.event).then(
            result => {
                res.json({message: result})
            }
        ).catch(
            err => res.json({message: `oops... something went wrong; error - ${err}`})
        )
    })

    app.post('/events/update', (req, res) => {
        eventsBL.updateEventBL(req.body.event).then(
          result => {
              res.json({message: result})
          }
        ).catch(
          err => {
            res.json({message: `Unable to process event update; error - ${err}`})
          }
        )
    })

    app.post('/events/delete', ()=>{
        res.send('Event deleted.')
    })
}
