
 let box = document.getElementById("input")
 let buttonPassword = document.getElementById("select")

   buttonPassword.onclick = async () => {
    const url = 'https://random-password-generator-api.p.rapidapi.com/api/Password';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '01d7612bcemsh003b3bc2f694316p1b5bf2jsna14e71c0f8a2',
            'X-RapidAPI-Host': 'random-password-generator-api.p.rapidapi.com'
        }
    };
          fetch(url,options)
          .then(respnse => respnse.text())
          .then(text => {
            box.value = text
          })     
    
   }
     const copyPassword = () => {
         box.select();
         document.execCommand("copy");
     }
