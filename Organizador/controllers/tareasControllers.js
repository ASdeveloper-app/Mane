const Task = require("../models/Task")

exports.tareaView = async (req, res) => {
    console.log('entra plis')
    const {
        _id
    } = req.user

    const tareas = await Task.find()

    console.log(tareas)

    res.render("admin/eventos/tareas/detalle", {
        user: req.user,
        tareas
    });
};

exports.createTareaView = (req, res) => {
    res.render("admin/eventos/datos");
};

exports.createTarea = async (req, res) => {
    const {
        _id
    } = req.user
    const {
        name,
        description,
        prioridad
    } = req.body;
    const newTarea = {
        userID: _id,
        name,
        description,
        prioridad
    };
    await Task.create(newTarea)
    res.redirect("/admin/eventos/tareas/detalles");
};

exports.getAllTarea = async (req, res) => {
    
    const tareas = await Task.find();
    console.log(tareas)
    res.render("/admin/eventos/tareas/detalle", {
        tareas
    })
};


exports.updateTareaView = async (req, res) => {
    const {
        _id
    } = req.user
    const tareas = await Task.find({
        userID: _id
    });
    const tarea = await Task.findById(req.params.id);
    res.render("/admin/eventos/tareas/datos", {
        tarea,
        tareas
    });
};

exports.updateTarea = async (req, res) => {
    const editTarea = {
        userID,
        name,
        description,
        prioridad
    } = req.body;

    await Task.findByIdAndUpdate(req.params.taskId, editTarea)
    res.redirect("/admin/eventos/tareas/datos");
};

exports.deleteTarea = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/admin/eventos/tareas/detalle");
}

exports.tareaGet = async (req, res) => {
    console.log('holi consoli')
    const tareita = await Task.findById(req.params.id)
    res.render("/admin/eventos/tareas/detalle", tareita);
}