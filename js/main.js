// import your packages here. Because they are at the top, they are public to the entire file
import Person from "./modules/DataModule.js";
import NavSystem from "./modules/TheNavSystem.js";

(() => {
    // stub * just a place for non-component specific stuff
    console.log('loaded');

    console.log(Person);

    console.log(NavSystem);

})();