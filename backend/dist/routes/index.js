"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import express
const express_2 = require("express");
const Note_1 = __importDefault(require("../models/Note"));
const router = (0, express_2.Router)();
// Middleware to parse JSON in the request body
router.use(express_1.default.json());
router.get('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield Note_1.default.find({});
        res.send(notes);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
router.post('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield Note_1.default.create(req.body);
        res.send(note);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
router.get('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield Note_1.default.findById(req.params.id);
        res.send(note);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
router.put('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield Note_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(note);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
router.delete('/notes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield Note_1.default.findByIdAndDelete(req.params.id);
        res.send(note);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
exports.default = router;
