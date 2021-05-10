// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

function calculateClicked () {
  // this function calculates the area of a trapezoid

  // input
  const aBase = parseInt(document.getElementById("a-base").value)
  const bBase = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const area = ((aBase + bBase) / 2) * height

  // output
  document.getElementById("user-area").innerHTML = 'The area is: ' + area + ' cm²'
}
