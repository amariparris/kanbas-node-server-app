import ModuleObject from "./module.js";
import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
const Lab5 = (app) => {
    app.get("/lab5/welcome", (req,res) => {
        res.send("Welcome to Assignment 5");
    });
    app.get('/lab5/add/:a/:b/', (req, res) => {
        const a = parseInt(req.params.a);
        const b = parseInt(req.params.b);
        const sum = a+b
        res.send(sum.toString());
    });
    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app);
    ModuleObject(app);
    WorkingWithArrays(app);
}; 
export default Lab5;