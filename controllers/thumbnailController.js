import imageThumbnail from 'image-thumbnail'

exports.get_thumbnail = (req, res, error)=> {

    if (req.method == "POST") {

        let image_url = req.body.url
        let options = { width: 50, height: 50, responseType: 'base64', jpegOptions: { force: true, quality: 90 } }

        try {
            imageThumbnail({ uri: image_url }, options).then(thumbnail => {

                require("fs").writeFile("./downloads/out.png", thumbnail, 'base64', function(err) {

                    if (err){
                        res.send({
                            error: err,
                        })
                    }

                    res.send({
                        success: true,
                        thumbnail: thumbnail
                    })
                   
                });

                
            })

        } catch (err) {
            res.send({
                success: false,
                message: err
            })
        }

    }
}