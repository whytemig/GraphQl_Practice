const notFound = (req, res) => res.send("Route not found").status(404);

module.exports = notFound;
