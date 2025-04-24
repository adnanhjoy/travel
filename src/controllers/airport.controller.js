const prisma = require("../../prisma/client");

const createAirport = async (req, res) => {
    try {
        const data = await prisma.destination.create({ data: req.body })

        res.status(200).json({
            succes: true,
            message: "Airport Create Successfull",
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


const getAllAirport = async (req, res) => {
    try {
        const data = await prisma.destination.findMany()

        res.status(200).json({
            succes: true,
            message: "Airport Get Successfull",
            data
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}




const updateAirport = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedDestination = await prisma.destination.update({
            where: { id },
            data: updateData,
        });

        res.status(200).json({
            success: true,
            message: "Airport updated successfully",
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




const deleteAirport = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await prisma.destination.delete({ where: { id } });

        res.status(200).json({
            succes: true,
            message: "Airport delete successfull",
            data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error",
        });
    }
}


module.exports = {
    createAirport,
    getAllAirport,
    updateAirport,
    deleteAirport
}