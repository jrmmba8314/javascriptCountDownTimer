////////////////////////////////////////
// Name:  myCountDownTimer
// Parameter: Count Down Date in the text form "MMM DD, YYYY hh:mm:ss a"
// Author:  John Mitchell
// Date:    March 2, 2018
//
// the following lines needs to be added to the main content page
// the recommendation is not to nest javascript libraries
// <script src="http://cybersecurity.portangelesschools.org/moment.js" type="text/javascript"></script>
////////////////////////////////////////

function myCountDownTimer(TXTcountDownDate) 
{
   var countDownDate = moment(TXTcountDownDate, "MMM DD, YYYY hh:mm:ss a");
   var now = moment();
   var myTimers = {years:   0,
                   days:    0,
                   hours:   0,
                   minutes: 0,
                   seconds: 0};
   var timeToEnd = moment.duration(countDownDate.diff(now));
   
   if (timeToEnd > 0)
   {
      myTimers.years = Math.floor(timeToEnd.asYears());
      timeToEnd.subtract(myTimers.years, 'years');
  
      myTimers.days = Math.floor(timeToEnd.asDays());
      timeToEnd.subtract(myTimers.days, 'days');
  
      myTimers.hours = Math.floor(timeToEnd.asHours());
      timeToEnd.subtract(myTimers.hours, 'hours');
  
      myTimers.minutes = Math.floor(timeToEnd.asMinutes());
      timeToEnd.subtract(myTimers.minutes, 'minutes');
  
      myTimers.seconds = Math.floor(timeToEnd.asSeconds());
   }

   return myTimers;
}
