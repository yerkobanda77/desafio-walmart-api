"use strict";
const mongoose = require("mongoose");

async function healthcheckController(ctx) {
  let status;
  let body;
  try {
    if (mongoose.connection.readyState === 1) {
      status = 200;
      body = { server: "OK", bd: "OK" };
    } else {
      status = 500;
      body = {  server: "OK", bd: "NOOK" };
    }    
    ctx.response.status = status;
    ctx.response.body = { estado: status, mensaje: body };
  } catch (error) {
    status = 500;
    body = {  server: "NOOK", bd: "NOOK", error };    
    ctx.response.status = status;
    ctx.response.body = { estado: status, mensaje: body };
  }
}

module.exports = {healthcheckController};
