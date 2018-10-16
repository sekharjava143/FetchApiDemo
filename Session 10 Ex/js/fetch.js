function getAllStudents()
{
    fetch("http://localhost:3000/contacts").then(response =>{
        console.log(response);
        if(response.status==200)
        {
            return Promise.resolve(response.json());
        }
        else
        {
            return Promise.reject(new Error("Unable to fetch the data"));
        }
    }).then(studentListResponse =>{
        console.log(studentListResponse);

        studentListResponse.sort((student1,student2)=>
        (student1.name == student2.name)?0:(student1.name>student2.name)?1:-1);

        const tbody = document.getElementsByTagName('tbody')[0];

        let tbodyInnnerHtml = ' ';

        studentListResponse.forEach(student => {
            console.log(student)
            
            tbodyInnnerHtml = tbodyInnnerHtml+ `
            <tr>
                <td>${student.name}</td>
                <td>${student.contactno}</td>
                <td>${student.email}</td>
                <td><button onClick=updateStudentInfo(${student.id})>Update</button></td>
                <td><button onClick=removeStudentInfo(${student.id})>Delete</button></td>
            </tr>
            `
        });
        tbody.innerHTML = tbodyInnnerHtml;
    });
}


function addStudentToJson(event)
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactno = document.getElementById('contactno').value;

    const student = {
        'name':name,
        'email':email,
        'contactno':contactno
    }

    console.log(name);

    fetch("http://localhost:3000/contacts",{
        method:'POST',
        body:JSON.stringify(student),
        headers :{
            'content-type':'application/json'
        }
        }).then(response =>{
            console.log(response.json);
        });
    }