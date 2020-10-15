// import your packages here. Because they are at the top, they are public to the entire file
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component specific stuff
    let userSection = document.querySelector(".users-section"),
        userTemplate = document.querySelector("#profs-template").content;


    debugger;

    // select our user elements and load the content

    function handleDataSet(data) {

        //  in index.html, we're cloning a master user. Clone the node and all its content (from profs template ie). This will copy everything and return a fresh copy for that div. it will populate the content inside for us. TRUE grabs everything in the div.
        //  every elemnt you write in your html is considered a node = in this case the div in the template tag 
        //clone node w a loop is a fancy way of copy and pasting an html element... info will populate in the element by it's relative data module info
        // we need a new copy of the template each time so it makes sense to move our let statement into our LOOP (the for statement)

        

// tvr's notes: 
// make a copy of our template here and then populate the children (text elements) with the static data from the Team object
// end tvr notes

        // run a loop bc we wanna loop through our data set
        for (let user in data) {
            
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
            
            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;
            //our goal is to opulate the children w content and put it back on the page
            //append info into that element by doing below

            userSection.appendChild(currentUser);
        }

    }

    handleDataSet(Team);

})();

//array based.. first child is 0, second is 1, etc.

