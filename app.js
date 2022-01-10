const tbody = document.querySelector('.data table tbody');

devs.map((data, index) => {

    tbody.innerHTML += `
    

    <tr>
                <td>${index+1}</td>
                <td>${data.Name}</td>
                <td>${data.skill}</td>
                <td>${data.age}</td>
                <td>${data.location}</td>
                <td><img style="width:50px;height:"50px;" src="${data.photo}"</td>
                
    </tr>
    
    
    `;

});