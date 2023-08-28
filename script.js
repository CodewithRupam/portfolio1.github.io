window.addEventListener("load", () => {
  setTimeout(
    function open(event){
      alert("Welcome to my portfolio website.");
    }
  , 5000)
})
var typed = new Typed('#id', {
  strings: ['<i>Web developer</i>', '<i>UI/ UX designer</i>', '<i>Video edittor</i>'],
  typeSpeed: 25,
});

var typed = new Typed('#text', {
  strings: ['<strong>Rupam</strong>'],
  typeSpeed: 50,
});
let space = document.getElementById("open");
let message = document.getElementById("message");
let button = document.getElementById("button");

window.addEventListener("load", () => {
  setTimeout(
    function open(event) {
      document.querySelector("#open").style.display = "block";
      document.querySelector("#message").style.display = "block";
    }
    , 5000)
})

button.addEventListener("click", () => {
  space.style.display = "none";
  message.style.display = "none"
})
var ctx = document.getElementById('webchart').getContext('2d');
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['HTML', 'CSS', 'Javascript'],
    datasets: [{
      data: [40, 30, 20],
      backgroundColor: ['pink', 'green', 'lightblue'],
    }],
  },
  options: {
    responsive: false, 
    maintainAspectRatio: false, 
  }
});
var ctx = document.getElementById('UI').getContext('2d');
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Colour theory', 'Layout', 'Responsive design', 'Typography'],
    datasets: [{
      data: [20, 30, 30, 20],
      backgroundColor: ['pink', 'green', 'lightblue', 'violet'],
    }],
  },
  options: {
    responsive: false, 
    maintainAspectRatio: false, 
  }
});