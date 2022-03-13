"use strict";

function getResponseFormat(resultCode, message, data) {
  return {
    code: resultCode, // Tripleta de salida, en caso de ser necesaria
    message,
    result: data
  };
}

module.exports = getResponseFormat;
