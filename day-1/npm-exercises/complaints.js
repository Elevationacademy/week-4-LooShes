const handleComplaints = require('./complaintsHandler')
const constss = require('./consts')

let complaint1 = {
    text: "I'm not getting enough money",
    type: constss.complaints.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: constss.complaints.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: constss.complaints.EMOTIONS
}

handleComplaints.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaints.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaints.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."
