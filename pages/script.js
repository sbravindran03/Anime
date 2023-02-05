const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
open.addEventListner('click', () => container.class.add('show-nav'));
close.addEventListner('click', () => container.class.add('show-nav'));