const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')
const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {
    res.redirect("/about")
})

server.get("/about", function(req, res) {
    res.render("about")
})

server.get("/portfolio", function(req, res) {
    res.render("portfolio", { itens: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video) {
        if (video.id == id) {
            return true
        }
    })

    if (!video) res.send("Video not found!") 

    res.render("video", { item: video })
})

server.listen("5000", function() {
    console.log("server is running!")
})