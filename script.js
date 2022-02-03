// La un click sa trimiti continutul din partea ta cu albastru, la double click ca sa trimiti continutul de la alt utilizator cu sur

const btn =document.querySelector("#send")
const chatMessage = document.querySelector("#chat_messages")
const  chat_input = document.querySelector("#chat_input")

btn.addEventListener("click", ev=>{

    console.log(ev);

    let valueInput = chat_input.value

    // console.log(chat_input.value)
    // console.log(valueInput);
    const profileOtherProfile = document.createElement("div");
const imgProfileOtherProfile = document.createElement("img");
const spanProfileOtherProfile = document.createElement("span");

profileOtherProfile.classList.add("profile", "other-profile")
imgProfileOtherProfile.setAttribute("src","https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed")
    imgProfileOtherProfile.setAttribute("height", "30");
    imgProfileOtherProfile.setAttribute("width", "30");
chatMessage.appendChild(profileOtherProfile)
    profileOtherProfile.appendChild(imgProfileOtherProfile)
    profileOtherProfile.appendChild(spanProfileOtherProfile)
    spanProfileOtherProfile.textContent = "Other profile"
    const messageOtherMessage = document.createElement("div")
    messageOtherMessage.classList.add("message", "other-message")
    chatMessage.appendChild(messageOtherMessage)
    messageOtherMessage.textContent = valueInput
})



btn.addEventListener("contextmenu", ev=>{
    ev.preventDefault()
    console.log(ev);

    let valueInput = chat_input.value


    const profileMyProfile = document.createElement("div");
    const imgProfileMyProfile = document.createElement("img");
    const spanProfileMyProfile = document.createElement("span");

    profileMyProfile.classList.add("profile", "my-profile");
    imgProfileMyProfile.setAttribute("src","https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619");
    imgProfileMyProfile.setAttribute("height", "30");
    imgProfileMyProfile.setAttribute("width", "30");
    chatMessage.appendChild(profileMyProfile)
    profileMyProfile.appendChild(imgProfileMyProfile)
    profileMyProfile.appendChild(imgProfileMyProfile)
    spanProfileMyProfile.textContent = "Other profile"
    const messageMyMessage = document.createElement("div")
    messageMyMessage.classList.add("message", "my-message")
    chatMessage.appendChild(messageMyMessage)
    messageMyMessage.textContent = valueInput
})