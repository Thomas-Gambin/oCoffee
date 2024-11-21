export const error404Middleware = function (req, res, next) {
    res.status(404).render("404.ejs");
}