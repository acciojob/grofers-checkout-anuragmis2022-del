const getSumBtn = document.createElement("button");
const table = document.querySelector("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices=document.querySelectorAll(".prices");
  let sum=0

  for (let item of prices )
  {
    sum+=Number(item.innerText)
    
  }
const td = document.createElement("td");
	td.setAttribute("id","ans")
 const tr = document.createElement("tr");
td.innerText=sum


 tr.append(td)
 table.append(tr)
  

}

getSumBtn.addEventListener("click", getSum);

