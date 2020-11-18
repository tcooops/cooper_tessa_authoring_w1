import { fetchData, postData } from "./modules/TheDataMiner.js";

(() => {
// this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function popErrorBox(message) {
        alert("something has gone wrong");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;  
            // note: you can't access the template directly, you have to dig in to grab the content

        //debugger;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

                //NOTE when grabbing elements from a database, they are CASE SeNsItIvE! 

            currentUserText[1].src = `./images/${data[user].Avatar}`; // image
            currentUserText[2].textContent = data[user].Name;
            currentUserText[3].textContent = data[user].Role;
            currentUserText[4].textContent = data[user].Nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }
    }

    // fetch data then do this with it (function above) then catch errors
fetchData('./includes/functions.php').then(data => handleDataSet(data)).catch(err => console.log(err));

})();