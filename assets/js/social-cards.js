const numberOfComments = 6;
const randomNumber = Math.floor(Math.random() * Math.floor(numberOfComments))+1;
$(`#social-card-${randomNumber}`).removeClass("invisible");
