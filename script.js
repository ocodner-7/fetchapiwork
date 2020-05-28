fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addItemToWall(data))



function addItemToWall (list) {
   list.forEach(function (item){
     let scndList = document.createElement('li')
     let finalList = document.createTextNode(item)
     scndList.appendChild(finalList)
     let currentList = document.getElementById("list")
     document.body.insertBefore(scndList, currentList)
     console.log(item)
   })
}

function addItemToList() {
  let addItem = document.getElementById("attach")[0].value;
  fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: addItem})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
})
}