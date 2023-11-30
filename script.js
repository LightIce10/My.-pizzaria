// INPUT
/* document.getElementById("size").addEventListener("click", newOrder);
document.getElementById("first").addEventListener("click", firstOne);
document.getElementById("second").addEventListener("click", secondOne);
*/

document.getElementById("btn").addEventListener("click", doneOrder);

// function
function doneOrder() {
  let sizes = document.getElementById("size").value;
  let fT = document.getElementById("first").value;
  let sT = document.getElementById("second").value;

  // testing
  console.log(sizes);
  console.log(fT);
  console.log(sT);

  // process
  let changetext = `You have ordered a ${sizes} pizza with:
  <ul>
   <li>${fT}</li> 
   <li>${sT} </li>
    </ul>
   Thank you for ordering from <a href="https://www.pizza73.com/store/1/delivery" target="_blank">Pizza 73</a>! Your pizza will be ready in 20 minutes!`;

  document.getElementById("pizza-out").innerHTML = changetext;

  document.getElementById(
    "bot-img"
  ).innerHTML = `<img width="500px" id="bot-pic" src="images/pizza.jpg">`;
}

// OUTPUT
