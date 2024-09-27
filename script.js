
const problems = [];


document.getElementById('problemForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const problem = document.getElementById('problem').value;
    const location = document.getElementById('location').value;
    
  
    problems.push({ problem, location });
    
   
    document.getElementById('problemForm').reset();
    
    
    updateSolutionList();
});


function updateSolutionList() {
    const solutionList = document.getElementById('solutionList');
    solutionList.innerHTML = ''; 
    
    problems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Problema: ${item.problem} (Localização: ${item.location})`;
        solutionList.appendChild(listItem);
    });
}


function initMap() {
    const map = L.map('map').setView([-18.973, 35.529], 6); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

  
    problems.forEach(item => {
        L.marker([-18.973, 35.529]) 
            .addTo(map)
            .bindPopup(item.problem);
    });
}


window.onload = initMap;
