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
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}




const updateDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedDestination = await prisma.destination.update({
            where: { id },
            data: updateData,
        });

        res.status(200).json({
            success: true,
            message: "Destination updated successfully",
            data: updatedDestination,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "There was a server side error",
        });
    }
};



module.exports = {
    createDestination,
    getAllDestination,
    updateDestination
}