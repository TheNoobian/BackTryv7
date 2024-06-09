"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const responseController_1 = require("../controllers/responseController");
const router = (0, express_1.Router)();
router.post('/responses', responseController_1.createResponse);
router.get('/responses/all', responseController_1.getAllResponses);
exports.default = router;
