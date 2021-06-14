"use strict";
const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const list = document.querySelector("#list");
const likes = document.querySelector(".likes");
const commentForm = document.querySelector("#comment-form");

let count = 0;

const timerUp = function () {
  counter.textContent = count;
  return (count = count + 1);
};

timerUp();
let intervalID;
const timerFn = function () {
  intervalID = window.setInterval(timerUp, 1000);
};
let num = 0;
const pauser = function () {
  if (num % 2 == 0) {
    clearInterval(intervalID);
    pause.textContent = "Restart";
  }
  if (num % 2 == 1) {
    timerFn();
    pause.textContent = "Pause";
  }
  return (num = num + 1);
};

const liker = function () {
  let li = document.createElement("li");
  li.textContent = `${count} has been liked!`;
  likes.append(li);
};

const submitComment = function (e) {
  e.preventDefault();
  let li = document.createElement("li");
  li.textContent = e.target.comment.value;
  list.append(li);
};

document.addEventListener("DOMContentLoaded", timerFn);
minus.addEventListener("click", () => (count = count - 1));
plus.addEventListener("click", () => (count = count + 1));
pause.addEventListener("click", pauser);
heart.addEventListener("click", liker);
commentForm.addEventListener("submit", submitComment);
