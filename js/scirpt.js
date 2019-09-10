var userNames = [
   'Joosep',
   'joosep123',
   'xddddd39',
   'Robandcoot73',
   'Nefmer30',
   'SawyerMiasma',
   'Disseize',
   'KingklyeCalash',
   'karla'
];


var liveTwaats = [
    'jyri ratas on lahe #kKond',
    'kuidas see t66tab',
    'The mysterious diary records the voice.',
    'Writing a list of random sentences is harder than I initially thought it would be',
    'She always speaks to him in a loud voice.',
    'Joe made the sugar cookies; Susan decorated them.',
    'sixty-Four comes asking for bread??.',
    'they got there early, and they got really good seats',
    'tervist, kas kuskil saia saab osta?'
];

/* Setting username and text for twaat*/
window.onload=function() {
    var rand = this.getRandomInt(9);
    setName("userName",this.userNames[rand]);
    setText("liveTwaat", this.liveTwaats[rand]);
}  

/* Function for getting text for tweet*/
function setText(id, liveTwaats) {
    var t = document.getElementById(id);
    t.innerHTML = liveTwaats;
}

/* Function for getting username for tweet*/
function setName(id,userNames) {
    var s= document.getElementById(id);
    s.innerHTML = userNames;
}    

/* Makes random int for array*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}









    