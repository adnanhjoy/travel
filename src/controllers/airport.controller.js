const prisma = require("../../prisma/client");

const createAirport = async (req, res) => {
    try {
        const data = await prisma.airport.create({ data: req.body })

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
    const { airport } = req.query || {};

    try {
        let data = [];

        const findByField = async (field) => {
            return await prisma.airport.findMany({
                where: {
                    [field]: {
                        contains: airport
                    },
                },
            });
        };

        if (airport) {
            const priorityFields = ['airportCode', 'airportName', 'countryCode', 'countryName'];

            for (const field of priorityFields) {
                data = await findByField(field);
                if (data.length > 0) break;
            }
        } else {
            data = await prisma.airport.findMany();
        }

        return res.status(200).json({
            success: true,
            message: "Airport fetch successful",
            total: data?.length,
            data,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "There was a server-side error",
        });
    }
};






const updateAirport = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updateAirport = await prisma.airport.update({
            where: { id },
            data: updateData,
        });

        res.status(200).json({
            success: true,
            message: "Airport updated successfully",
            data: updateAirport,
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
        const data = await prisma.airport.delete({ where: { id } });

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