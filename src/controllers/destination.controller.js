const prisma = require("../../prisma/client");

const createDestination = async (req, res) => {
    try {
        const data = await prisma.destination.create({ data: req.body })

        res.status(200).json({
            succes: true,
            message: "Destination Create Successfull",
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}


const getAllDestination = async (req, res) => {
    try {
        const data = await prisma.destination.findMany()

        res.status(200).json({
            succes: true,
            message: "Destination Get Successfull",
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}


module.exports = {
    createDestination,
    getAllDestination
}