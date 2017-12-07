var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1425136738262-212551713a58?auto=format&fit=crop&w=889&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies elementum vehicula. Integer elementum massa sed justo imperdiet feugiat. Vestibulum efficitur bibendum vehicula. Mauris porttitor, ligula sed ultrices hendrerit, tortor nulla cursus nisl, nec viverra quam eros id velit. Phasellus faucibus tellus id nibh rhoncus, et maximus nunc ultrices. Ut ut nisl libero. Sed convallis eget elit at varius. Duis ligula mi, mattis a nunc imperdiet, elementum gravida nisi. In at convallis tortor. Vivamus sagittis elit et elit dictum, eget ultricies turpis dapibus. Vivamus at imperdiet velit, at cursus purus. In accumsan metus ipsum, sed congue leo aliquet sit amet. Morbi aliquet a nunc et viverra."
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1476802551633-1f9a222c2ddd?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies elementum vehicula. Integer elementum massa sed justo imperdiet feugiat. Vestibulum efficitur bibendum vehicula. Mauris porttitor, ligula sed ultrices hendrerit, tortor nulla cursus nisl, nec viverra quam eros id velit. Phasellus faucibus tellus id nibh rhoncus, et maximus nunc ultrices. Ut ut nisl libero. Sed convallis eget elit at varius. Duis ligula mi, mattis a nunc imperdiet, elementum gravida nisi. In at convallis tortor. Vivamus sagittis elit et elit dictum, eget ultricies turpis dapibus. Vivamus at imperdiet velit, at cursus purus. In accumsan metus ipsum, sed congue leo aliquet sit amet. Morbi aliquet a nunc et viverra."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1494105254923-392470cb7bb1?auto=format&fit=crop&w=889&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies elementum vehicula. Integer elementum massa sed justo imperdiet feugiat. Vestibulum efficitur bibendum vehicula. Mauris porttitor, ligula sed ultrices hendrerit, tortor nulla cursus nisl, nec viverra quam eros id velit. Phasellus faucibus tellus id nibh rhoncus, et maximus nunc ultrices. Ut ut nisl libero. Sed convallis eget elit at varius. Duis ligula mi, mattis a nunc imperdiet, elementum gravida nisi. In at convallis tortor. Vivamus sagittis elit et elit dictum, eget ultricies turpis dapibus. Vivamus at imperdiet velit, at cursus purus. In accumsan metus ipsum, sed congue leo aliquet sit amet. Morbi aliquet a nunc et viverra."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground!");
                    // create acomment
                    Comment.create(
                        {
                            text: "This place is great!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                        });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;