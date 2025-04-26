const prisma = require("../../prisma/client")

const createTourPackage = async (req, res) => {
    try {
        const result = await prisma.tourPackage.create({ data: req.body });

        res.status(200).json({
            success: true,
            message: "Tour package create successfull",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}


module.exports = {
    createTourPackage
}