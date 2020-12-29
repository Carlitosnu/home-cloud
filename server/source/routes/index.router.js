const {Router} = require("express");
const router = Router();
const path = require("path")
const LeerDirectorio = require("../controllers/find.controller");
const createRoute = require("../controllers/dir.controllers");
const cors = require("cors")
router.get("/find", cors(), async(req,res)=>{
    res.send(LeerDirectorio("/"))
})
router.get("/find/:route", async(req,res)=>{  
    const {route} = req.params
    res.send(LeerDirectorio(route))
}
)
router.post("/create/:route", async(req,res)=>{  
    const {route} = req.params
    res.send(createRoute(req,res,+route))
}
)


module.exports = router
