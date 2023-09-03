



const loadData = async () =>{
           
       const response = await fetch(`https://dummyjson.com/users`);
       const MainData = await response.json();
       const data = MainData.users;
    //    console.log(data)
       singleData(data)

}
 
const singleData =(data)=>{

           const cardContainer = document.getElementById("card-container")

         data.forEach(users => {
            console.log(users)
            
            const div = document.createElement("div")
            div.classList = `card card-compact border`;
            div.innerHTML= `

            <div class="card h-[400px]  bg-slate-300 shadow-xl ">
            
            <figure><img class="w-[50%]" src="${users.image}" alt="Shoes" /></figure>
            <div class="ml-8 mt-6 font-semibold">
              <h2 class="">Name :${users.firstName +' '+ users.maidenName +' ' +users.lastName}</h2>
              <p>User :  ${users.username}</p>
              <p>Phone:  ${users.phone}</p>
              <p>Email:  ${users.email}</p>
              <p>BG   :  ${users.bloodGroup}</p>
            </div>
            <div class="text-center mt-3">  <button class="btn btn-primary ">Details</button></div>

             
            
            </div>

            `
          cardContainer.appendChild(div)

         });

}

loadData()