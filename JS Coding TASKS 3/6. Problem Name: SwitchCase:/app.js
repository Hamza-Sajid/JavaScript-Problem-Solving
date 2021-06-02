function myGrading() {
     var gscore;
     var score = document.getElementById('grade').value
     switch(true) {
case (score >85):
   gscore = 'A';
    break;
case (score <= 85 && score >= 80):
    gscore = 'A-';
     break;
case (score <= 80 && score > 70):
    gscore = 'B';
     break;
   case (score <= 70 && score > 60):
    gscore = 'C';
     break;
case (score <= 60 && score > 40):
    gscore = 'D';
    break;
    case (score <= 60 && score > 40):
    gscore = 'D';
    break;
case (score <= 40 && score >=  35):
    gscore = 'E';
    break;

default:
    gscore =' Failed';
   }

          alert("You got "+gscore)



   }
