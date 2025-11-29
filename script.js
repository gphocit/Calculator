let currentValue = "", a = "", b = "", c = "";
let result;
let isSecondNumber = false;
function initialize()
{
    currentValue = a = b = c = "";
    isSecondNumber = false;
}
function string_to_int()
{
    a = Number(a);
    c = Number(c);
}
function saveValue(x)
{
  currentValue += x;
  document.getElementById("screen").value = currentValue;
    if ((x >= "0" && x <= "9" || x == ".") && !isSecondNumber)
        a += x;
    else if (x == "+" || x == "-" || x == "×" || x == "÷")
    {
        b = x;
        isSecondNumber = true;
    }
    else
        c += x;
}
function valid()
{
  let idx = -1;
  for (let i = 0; i < currentValue.length; i++)
    if (currentValue[i] < "0" || currentValue[i] > "9") {
      idx = i;
      break;
    }
  if (idx == -1)
    return false;
  let x = currentValue[0];
  let y = currentValue[currentValue.length - 1];
  if (x >= "0" && x <= "9 " && y >= "0" && y <= "9")
    return true;
  return false;
}

function calculate()
{
  if (!valid())
  {
    initialize();
    document.getElementById("screen").value = "ERROR";
    return;
  }
  string_to_int();
  switch (b)
  {
    case "+": result = a + c; break;
    case "-": result = a - c; break;
    case "×": result = a * c; break;
    case "÷": result = a / c; break;
  }
  document.getElementById("screen").value = result;
  
  //3 dong nay muc dich de tien hanh phep tinh tiep theo tu so result
    initialize();
    a = String(result);
    currentValue += a; 
}
function AC()
{
    document.getElementById("screen").value = "";
    initialize();
}
function DEL()
{
  // let k = "";
  // for (let i = 0; i < currentValue.length - 1; i++)
  //   k += currentValue[i];
  currentValue = currentValue.substring(0, currentValue.length - 1);
  document.getElementById("screen").value = currentValue;
  let idx = -1;
  for (let i = 0; i < currentValue.length; i++)
    if (currentValue[i] < "0" || currentValue[i] > "9")
    {
      idx = i;
      break;
    }      
  if (idx == -1)
    a = currentValue;
  else
  {
    a = currentValue.substring(0, idx);
    c = currentValue.substring(idx + 1);
  }
}
