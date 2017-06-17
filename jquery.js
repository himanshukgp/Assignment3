function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var arr = ["A","A","B","B","C","D","D","C","E","E","F","F","G","G","H","I","J","J","K","K","L","L","M","M","N","N","O","O","P","P","H","I"];
//



$(document).one('ready',function(){
	// var editid = $("#11").attr("id");
    $(".content").hide();
    arr = shuffle(arr);
    
});

var y=null,score=0,moves=0;

$(document).ready(function(){
	$(window).load(function(){
		$("#j").click(function(){
			$("#11").text(arr[0]);
			myfunction("#11");
		})

		$("#k").click(function(){
			$("#12").text(arr[1]);
			myfunction("#12");
			
		})

		$("#l").click(function(){
			$("#13").text(arr[2]);
			myfunction("#13");
		})

		$("#m").click(function(){
			$("#14").text(arr[3]);
			myfunction("#14");
		})

		$("#n").click(function(){
			$("#21").text(arr[4]);
			myfunction("#21");
		})

		$("#o").click(function(){
			$("#22").text(arr[5]);
			myfunction("#22");
		})

		$("#p").click(function(){
			$("#23").text(arr[6]);
			myfunction("#23");
		})

		$("#q").click(function(){
			$("#24").text(arr[7]);
			myfunction("#24");
		})

		$("#r").click(function(){
			$("#31").text(arr[8]);
			myfunction("#31");
		})

		$("#s").click(function(){
			$("#32").text(arr[9]);
			myfunction("#32");
		})

		$("#t").click(function(){
			$("#33").text(arr[10]);
			myfunction("#33");
		})

		$("#u").click(function(){
			$("#34").text(arr[11]);
			myfunction("#34");
		})

		$("#v").click(function(){
			$("#41").text(arr[12]);
			myfunction("#41");
		})

		$("#w").click(function(){
			$("#42").text(arr[13]);
			myfunction("#42");
		})

		$("#x").click(function(){
			$("#43").text(arr[14]);
			myfunction("#43");
		})

		$("#y").click(function(){
			$("#44").text(arr[15]);
			myfunction("#44");
		})
	})
});

function myfunction(id){
	if(y==null){
				moves++;
				$(id).show();
				y=id;
			}
	else{
		if($(y).text()==$(id).text() && y!=id){
			moves++;
			$(id).show();
			y=null;
		}
		else{ if(y!=id){
			moves++; 
			$(id).show();
			$(id).hide();
			$(y).hide();
			y=null;
		}
		}				
	}
}
