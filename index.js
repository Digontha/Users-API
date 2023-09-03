



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
            // console.log(users)
            
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
                  
             
              <button class="btn btn-primary ml-24 mt-2" onclick="my_modal_${users.id}.showModal()">Details</button>
              <dialog id="my_modal_${users.id}" class="modal">
              
                <form method="dialog" class="modal-box">
                <img class="ml-20" src="${users.image}">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  <h3 class="font-bold text-lg">Name :${users.lastName}</h3>
                  <p class="py-4">Age: ${users.age}</p>
                  <p class="py-4">Gender: ${users.gender}</p>
                  <p class="py-4">BirthDate: ${users.birthDate}</p>
                  <p class="py-4">City: ${users.address.city}</p>
                  <p class="py-4">Password: ${users.password}</p>
                  <p class="py-4">IP :${users.ip}</p>
                </form>
              </dialog>
            `
          cardContainer.appendChild(div)

         });

}

const DetailsModalOpen = (Maindata)=>{

    my_modal_3.showModal()
}


loadData()