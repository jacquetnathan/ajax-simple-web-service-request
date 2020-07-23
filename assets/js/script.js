

const citation = async function () {
    const response = await fetch('https://thatsthespir.it/api');
    const jsonData = await response.json();
    console.log(jsonData);
    document.getElementById("quoteP").innerHTML = "Quote: " + jsonData.quote;
    document.getElementById("quoteFooter").innerHTML = "Author: " + jsonData.author;
    document.querySelector("img").src = jsonData.photo;
}

citation();
