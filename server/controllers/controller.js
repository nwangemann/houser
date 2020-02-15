module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => {
            res.status(200).send(houses)
        }).catch(err => {
            console.log(err)
        })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipcode, image_url, mortgage, rent} = req.body
        db.add_house(name, address, city, state, zipcode, image_url, mortgage, rent).then(houses => {
            res.status(200).send(houses)
        }).catch(err => {
            console.log(err)
        })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house(id).then(houses => {
            res.status(200).send(houses)
        }).catch(err => {
            console.log(err)
        })
    }
}