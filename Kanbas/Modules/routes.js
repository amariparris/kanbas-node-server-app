import * as dao from "./dao.js";

export default function ModuleRoutes(app) {


  const findAllModules = async (req, res) => {
    const { cid } = req.params;
    console.log(cid)

      const modules = await dao.findModulesByCourse(cid);
      console.log(modules)
      res.json(modules);
  };


  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };
  
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  app.get("/api/courses/:cid/modules", findAllModules);

  app.post("/api/courses/:cid/modules", createModule);

  app.put("/api/modules/:mid", updateModule);

  app.delete("/api/modules/:mid", deleteModule);
}