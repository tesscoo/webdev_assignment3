// Javascript for Calendar Assignment

var holidays = new Array();
	holidays[0] = ["09/01/2014", "This is Labor Day. NYU is not in session.", "images/laborday.jpg"];
	holidays[1] = ["10/13/2014", "This is fall break. NYU is not in session.", "images/leaf.png"];
	holidays[2]=["10/14/2014", "This is fall break. NYU is not in session.", "images/leaf.png"];
	holidays[3] = ["11/27/2014", "This is Thanksgiving. NYU is not in session.", "images/thanksgiving.png"];
	holidays[4] = ["11/28/2014", "This is Thanksgiving. NYU is not in session.", "images/thanksgiving.png"];
	holidays[5]=["12/13/2014","This is a reading day. NYU students do not have classes.", "images/book.png"];
	holidays[6] = ["12/14/2014","This is a reading day. NYU students do not have classes.", "images/book.png"];
	holidays[7] = ["12/20/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[8] = ["12/21/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[9] = ["12/22/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[10] = ["12/23/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[11] = ["12/24/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[12] = ["12/25/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[13] = ["12/26/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[14] = ["12/27/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[15] = ["12/28/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[16] = ["12/29/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[17] = ["12/30/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[18] = ["12/31/2014","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[19] = ["01/01/2015","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[20] = ["01/02/2015","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[21] = ["01/03/2015","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[22] = ["01/04/2015","This is Winter Recess. NYU is not in session.", "images/winter.jpg"];
	holidays[23]=["01/19/2015","This is Martin Luther King Jr Day. NYU students do not have classes.", "images/mlk.jpg"];
	holidays[24] = ["02/16/2015","This is President's Day. NYU students do not have classes.", "images/presidents.jpg"];
	holidays[25] = ["03/16/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[26] = ["03/17/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[27] = ["03/18/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[28] = ["03/19/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[29] = ["03/20/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[30] = ["03/21/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[31] = ["03/22/2015","This is Spring Break. NYU students do not have classes.", "images/spring.jpg"];
	holidays[32]=["05/12/2015","This is a reading day. NYU students do not have classes.", "images/book.png"];
	holidays[33]=["05/25/2015","This is Memorial Day. NYU is not in session.", "images/memorialday.jpg"];


function calendar(){
	var user = document.getElementById("date").value;
	var values = user.split("-");
	var month = values[1];
	var day = values[2];
	var year = values[0];
	document.getElementById("returndate").innerHTML= values[1] + "-" + values[2] +"-"+values[0];
	var fulldate = String(month + "/" + day + "/" + year)
	
		for (var i = 0; i < holidays.length; i++) {
			var element = holidays[i]
				if (element[0]==fulldate){
					document.getElementById("output").innerHTML = element[1] + "<br><br>"+"<img src="+element[2]+">";
					break;}
				else {
			document.getElementById("output").innerHTML = "This is not an NYU holiday. Class remains in session." + "<br><br>" + "<img src='images/mad.png'>" ;
					}
				}
		console.log("Calendar function ran.");
		}
