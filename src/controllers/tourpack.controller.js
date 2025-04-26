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




// search tour package 
const searchTourPackage = async (req, res) => {
    const { } = req.params
    try {

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}



//get all tour package

const getAllTourPackage = async (req, res) => {
    try {
        const data = await prisma.tourPackage.findMany({
            include: {
                tour_location: {
                    select: {
                        format: true,
                        airportCode: true
                    }
                },
                
            }
        })

        res.status(200).json({
            success: true,
            message: "All Tour package get successfully",
            data,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}

module.exports = {
    createTourPackage,
    searchTourPackage,
    getAllTourPackage
}