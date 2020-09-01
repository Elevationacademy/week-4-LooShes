const consts = require('./consts')

const handleComplaints = function(complaint){
    if(complaint.type === "finance"){
        console.log("Money doesn't grow on trees, you know.")
    }

    if(complaint.type === "emotions"){
        console.log("It'll pass, as all things do, with time.")
    }
}

module.exports.handleComplaints = handleComplaints

