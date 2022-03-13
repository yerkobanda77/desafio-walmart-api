"use strict";

/**
 * Custom error para la capa de lógica de negocio
 */
class ModuleError extends Error {
  constructor(cause) {
    let infoCause = cause;
    if (cause instanceof Error) {
      infoCause = cause.message;
    }

    super(infoCause);
    this.name = "ModuleError";
    this.customError = true;
  }
}

module.exports = ModuleError;
