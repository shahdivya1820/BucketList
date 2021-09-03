var bucketList=[];

var listItem=document.getElementById("list-container");

function addValues(){
    let value=document.getElementById("input-field").value
    bucketList.push(value);
    showList();
}
function reset(){
    bucketList=[];
    showList();
}
function showList(){
    listItem.innerHTML="";
    for(let i=0; i<bucketList.length;i++)
    {
        let li=document.createElement("li")
        li.innerHTML=bucketList[i] + 
        `<span>
        <img src="https://i1.faceprep.in/tick-mark.png" class="checked" onclick="remove(`+i+`)">
        </span>`;
        li.className="list";
        listItem.appendChild(li);
    }
}
function remove(i){
    bucketList.splice(i,1);
    showList();
}