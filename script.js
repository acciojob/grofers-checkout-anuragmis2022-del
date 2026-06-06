const getSumBtn = document.createElement("button");
const table = document.querySelector("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const price=document.querySelectorAll(".price");
  let sum=0

  for (let item of price )
  {
    sum+=Number(item.innerText)
    
  }
const td = document.createElement("td");
 const tr = document.createElement("tr");
td.innerText=sum


 tr.append(td)
 table.append(tr)
  

}

getSumBtn.addEventListener("click", getSum);

