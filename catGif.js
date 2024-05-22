let container = document.querySelector(".container");
        async function apiFunction() {
            await fetch("https://api.thecatapi.com/v1/images/search")
                .then(res => res.json())
                .then((result) => {
                    //items = result;
                    let img = document.createElement("img");
                    img.src = result[0].url;
                    container.appendChild(img);
                }),
                (error) => {
                    console.log(error);
                }
        }
        // Call the function
        apiFunction();