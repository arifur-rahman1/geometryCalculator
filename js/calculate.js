function calculateTriangleArea(){
  const base= document.getElementById("triangleBase");
  const baseNum=parseFloat(base.value);
  const height=document.getElementById("triangleHeight")
  const heightNum=parseFloat(height.value);
  const area= 0.5 * baseNum *heightNum ;
  const putArea=document.getElementById('areaTriangle');
  putArea.innerText=area;
}

function calculateRectangleArea(input1,input2,input3){
  const width= getInput(input1);
  const length=getInput(input2)
  const area= width *length ;
 getInnerText(input3,area);
  
}

function getInput (field){
  const input= document.getElementById(field);
  const inputNum=parseFloat(input.value);
  return inputNum
}
function getInnerText (text,area){
  const getText=document.getElementById(text);
 getText.innerText=area;
   
}