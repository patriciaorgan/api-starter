const  {sign} = require('jsonwebtoken'),
       {secretOrKey} = require('../../config').jwt
       signToken = payload => sign( payload, secretOrKey)

module.exports = Model =>({

  _authenticate: (req, res) =>  res.json({token: signToken({_id: req.user._id, admin:req.user.admin})}),

  _user: ()=> Model.modelName==='User' ? (req,res)=> res.json(req.user) : false,

  _params: (req, res, next, _id)=> Model.findById(_id).then(modelFromDB=>{
            if(!modelFromDB){
              next(res.status(400).send('No documents with that id!'))
            }
            req.model = modelFromDB
            next()
        }).catch(e=>next(e)),

  _get: (req, res)=>Model.find().select('-password').then(models=>res.json(models)),

  _getOne: (req, res) => Model.findById(req.params._id).select('-password')
        .then(model=>res.json(model))
        .catch(e=>res.status(400).send(e.message)),

  _post: (req, res)=> new Model(req.body).save()
    .then(({admin, _id}) => res.json({token: signToken({admin,_id})}))
    .catch(e=> res.status(400).send(e)),

  _put: (req, res)=>{
    const {model, body} = req
    Object.assign(model, body)
    model.save()
      .then(updatedModel => res.json(updatedModel))
      .catch(e=>res.status(400).send(e.message))
  },

  _delete: (req, res)=> Model.findByIdAndRemove(req.params._id)
    .then(deletedModel=>res.json(deletedModel))
    .catch(e=>res.status(400).send(e.message)),


})
