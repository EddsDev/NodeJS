const auth = (req, res, next) => {
    console.log("authenticating user...")
    next ()
}

module.exports = auth 