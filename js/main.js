(() => {
    // start with a fetch all
    
    fetch('./DataSet.json') // this grabs the data from the source indicated in the brackets
        .then(res => res.json()) // this translates the JSON to plain JS)
        .then(data => { // then we get our data
            // this is our data (dataSet.json)
            // conbverted into a plain JavaScript object
            handleDataSet(data);
        })
    .catch((error) => console.log(error));

    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;  
            // note: you can't access the template directly, you have to dig in to grab the content

        debugger;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = './images/${data[user].avatar}.jpg'; // image
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        console.log(data);
    }
})();