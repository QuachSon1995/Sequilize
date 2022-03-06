module.exports = {
    resdsa: (res, message, data) => {
        res.status(400).json({
            code: 110,
            message,
            data
        })
    }
} 