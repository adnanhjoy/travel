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




const getSinglePackage = async (req, res) => {
    const { id } = req.params
    try {
        const data = await prisma.package.findUnique({
            where: { id },
            include: {
                destination: true
            }
        });

        res.status(200).json({
            success: true,
            message: "Get package successfull",
            data
        })

    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "There was a server side error"
        })
    }
}



const updatePackage = async (req, res) => {
    const { id } = req.params
    try {
        const data = await prisma.package.update({
            where: { id },
            data: req.body
        },);

        res.status(200).json({
            success: true,
            message: "Package Update Successfull",
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}



const deletePackage = async (req, res) => {
    const { id } = req.params
    try {
        const data = await prisma.package.delete({ where: { id } });
        res.status(200).json({
            success: true,
            message: "Package Deleted Successfull",
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}

module.exports = {
    createPackages,
    getAllPackages,
    getSinglePackage,
    updatePackage,
    deletePackage
}