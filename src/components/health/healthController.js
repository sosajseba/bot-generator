module.exports = {

    getHealth: async function (req, res) {
        return res.status(200).json({
            status: "Healthy"
        })
    }, 
}