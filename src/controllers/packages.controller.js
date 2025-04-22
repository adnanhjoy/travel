const prisma = require("../../prisma/client");

const createPackages = async (req, res) => {
    try {
        const package = await prisma.package.create({ data: req.body });
        res.status(200).json({
            succes: true,
            message: "Package create succussfull",
            data: package
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}



const getAllPackages = async (req, res) => {
    try {
        const package = await prisma.package.findMany({
            include: {
                destination: true
            }
        });
        res.status(200).json({
            succes: true,
            message: "Package get succussfull",
            data: package
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}


module.exports = {
    createPackages,
    getAllPackages
}