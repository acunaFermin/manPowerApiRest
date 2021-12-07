"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/prueba", (req, res) => {
    res.json({
        ok: true,
        mensaje: "todo funca joya",
    });
});
userRoutes.post("/sumar", (req, res) => {
    const number1 = parseInt(req.body.num1);
    const number2 = parseInt(req.body.num2);
    const number3 = number1 + number2;
    res.json({
        suma: number3,
    });
});
exports.default = userRoutes;
