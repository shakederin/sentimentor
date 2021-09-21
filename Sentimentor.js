async function checkAttitude() {
    const answerZone = document.getElementById("result");
    answerZone.innerText = "LOADING...."
    const text = document.getElementById("input");
    try {
        const response = await fetch("https://sentim-api.herokuapp.com/api/v1/", { 
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body : JSON.stringify({ "text": text.value  }),
            method : "POST"
            }
            );
            const result = (await response.json());
            answerZone.innerText = "This text expresses " + result.result.type + " emotions. " + "Polarity: " + result.result.polarity;
            answerZone.style.color = "grey";
            if (result.result.type == "negative"){
                answerZone.style.color = "red";
            }
            if (result.result.type == "positive"){
                answerZone.style.color = "greenyellow";
            }
    } catch (error) {
        answerZone.innerText = "Please enter valide text"
    }
    
} 