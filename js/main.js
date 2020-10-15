// import your packages here. Because they are at the top, they are public to the entire file
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component specific stuff
    
    // set up the XMLHttp object 
    let myReq = new XMLHttpRequest;

    // make sure we can handle whatever data comes back, or any errors
    myReq.addEventListener("readystatechange", handleRequest);

    // open a request and pass thru the URL of the data we want
    myReq.open('GET', '../DataSet.json');

    // actually make the request
    myReq.send();

    // handleRequest function goes here

    function handleRequest() {
        if (myReq.readyState === XMLHttpRequest.DONE) {
            // check status here and proceed
            if (myReq.status === 200) {
                debugger;
                // 200 means done and dusted, ready to go with the dataset, everything is good!
                debugger;
                handleDataSet(JSON.parse(myReq.responseText));
//parse turns it back into a javascript object, w/o the quotes
            } else {
                // probably got some kind of error code, so handle that a 404, 500, etc.... render appropriate error messages here
                console.error(`${myReq.status} : oops, something broke`);
            }

        } else {
            //request isn't ready yet, keep waiting....
            console.log(`Request state: ${myReq.readyState}. Still Processing...`);
        }
    }


    let userSection = document.querySelector(".users-section"),
        userTemplate = document.querySelector("#profs-template").content;


    debugger;

    // select our user elements and load the content

    function handleDataSet(data) {

        debugger;

        //  in index.html, we're cloning a master user. Clone the node and all its content (from profs template ie). This will copy everything and return a fresh copy for that div. it will populate the content inside for us. TRUE grabs everything in the div.
        //  every elemnt you write in your html is considered a node = in this case the div in the template tag 
        //clone node w a loop is a fancy way of copy and pasting an html element... info will populate in the element by it's relative data module info
        // we need a new copy of the template each time so it makes sense to move our let statement into our LOOP (the for statement)

// tvr's notes: 
// make a copy of our template here and then populate the children (text elements) with the static data from the Team object
// end tvr notes

        // run a loop bc we wanna loop through our data set
        for (let user in data) {

            debugger;
            
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

    // handleDataSet(Team);

})();

//array based.. first child is 0, second is 1, etc.

