const prisma = require("../../prisma/client")
const jwt = require('jsonwebtoken')

const createBooking = async (req, res) => {
    try {
        const result = await prisma.booking.create({ data: req.body });

        res.status(200).json({
            success: true,
            message: "Booking Successfull",
            data: result
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}


const getAllBooking = async (req, res) => {
    try {
        const result = await prisma.booking.findMany({
            include: {
                user: true,
                package: true
            }
        });

        res.status(200).json({
            success: true,
            message: "Booking Successfull",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}


const getBookingByUser = async (req, res) => {
    const token = req.headers.authorization || {}
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

    try {
        if (decoded?.email) {
            const result = await prisma.booking.findMany({
                where: {
                    userId: decoded?.id
                },
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    },
                    package: true,
                }
            });
            res.status(200).json({
                success: true,
                message: "Booking List Successfull",
                data: result
            })
        } else {
            res.status(404).json({
                success: false,
                message: "User not found",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "There was a server side error"
        })
    }
}

module.exports = {
    createBooking,
    getAllBooking,
    getBookingByUser
}