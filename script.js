var container = document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("id","outerContainer");
document.body.appendChild(container);


var row = document.createElement("div");
row.setAttribute("class","row");
container.appendChild(row);

var col = document.createElement("div");
col.setAttribute("class","col-6");
col.setAttribute("id","headingId");
col.innerHTML="Name";
row.appendChild(col);

var val = fetch('https://60c98b39772a760017203c0a.mockapi.io/users',{
 method : "GET" 
})
.then(data => data.json())
  .then(users => userFn(users));

function userFn(users){
    for(var i=0;i<users.length;i++){
        var row = document.createElement("div");
        row.setAttribute("class","row");
        container.appendChild(row);
        
        var col1 = document.createElement("div");
        col1.setAttribute("class","col-2"); 
        row.appendChild(col1);

        var image = document.createElement("img");
        image.src = users[i].avatar;
        image.setAttribute("id","imageId");
        col1.appendChild(image);

        var col = document.createElement("div");
        col.setAttribute("class","col-4");
        col.innerHTML=`${users[i].name}
     ${users[i].createdAt}`; 
        row.appendChild(col);

        
    }
}