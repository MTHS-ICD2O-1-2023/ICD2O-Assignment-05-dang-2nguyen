// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: May 2024
// This file contains the JS functions for index.html

function checking() {
  let fibArray = [0,1]
  const number = parseInt(document.getElementById("number").value)

  for (let counter = 2; counter < number; counter++) {
    fibArray[counter] = fibArray[counter - 1] + fibArray[counter - 2]
  }
  document.getElementById("result").innerHTML = fibArray
}