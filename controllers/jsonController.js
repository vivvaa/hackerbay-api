import jsonpatch from 'jsonpatch'

exports.json_patch = function (req, res, error) {

    if (req.method == "POST") {

        let mydoc =  req.body.mydoc
        let thepatch = req.body.thepatch

        let patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
        res.send({
            success:true , 
            patcheddoc: patcheddoc
         })
       
    }
}