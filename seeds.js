let mongoose = require("mongoose");
let Campground = require("./models/campground")
let Comment = require("./models/comment")

let data = [
    {
        name: "Camp Exotica, Kullu",
        image: "https://www.holidify.com/images/cmsuploads/compressed/tent-1208201_1920_20190212172038.jpg",
        description: "The Camp Exotica is a perfect weekend getaway option located in Kullu in the Manali district of Himachal Pradesh. The accommodation provided is world class and the tents simply leave you connecting with nature like never before. The location of these tents is such that it gives a panoramic view of the surrounding mountains. The food provided is of fine quality and the incredible view will simply leave you in awe of this adventure. Make sure to take out time for this pleasure full camping trip."
    },
    {
        name:"Nameri Eco Camp, Assam",
        image: "https://www.holidify.com/images/cmsuploads/compressed/4877785757_958e85201d_z_20190212174518.jpg",
        description: "Going by the name one thing must be clear that it is a 100% eco-friendly camp. This camp has become one of the most sought after because of its superb location and the environmental protection efforts. It is located in the district of Sonetpur which is the 3rd National Park of Assam. This camp is not only known for its splendid location but also its various adventure activities. You can go on a hike in the nearby woods or for an exciting rafting session in the Bhoroli River. The best part of this place is the chance of spotting over 300 species of birds. This does sound like a bird lover’s paradise."
    },
    {
        name: "Mehar, Jaisalmer",
        image: "https://www.holidify.com/images/cmsuploads/compressed/25439743351_5e7c669338_z_20190212183635.jpg",
        description: "For those of you looking for a stay in the deserts of Rajasthan, Mehar is the perfect place to plan your stay. Located near the dunes, the Mehar camp lets you experience the arid deserts of Jaisalmer from up close. It has been defined by tourists as a place to eat, drink and be merry! The camps have all the facilities to make it a comfortable stay and have your day packed with fun-filled activities. The main advantage of this place is its proximity to touristy places like Kuldhara, Damodara, Lodhruva and the other abandoned villages."
    },
]



function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    //add a few comments
}

module.exports = seedDB;