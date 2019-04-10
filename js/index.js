	function signup(){
		var signin = document.getElementById('myModal_2');
		
		if(signin.style.display=""){
			signin.style.display="none";
		}

		var modal = document.getElementById('myModal_1');

		var btn = document.getElementById("myBtn1");

		var span = document.getElementsByClassName("close")[0];

		  modal.style.display = "block";

		span.onclick = function() {
		  modal.style.display = "none";
		};

		window.onclick = function(event) {
		  if (event.target === modal) {
		    modal.style.display = "none";
		  }
		}
	}	
	
	function signin(){
        const modal = document.getElementById('myModal_2');

        const btn = document.getElementById('myBtn2');

        const span = document.getElementsByClassName("close")[1];

        modal.style.display = "block";

		span.onclick = function() {
		  modal.style.display = "none";
		};

		window.onclick = function(event) {
		  if (event.target === modal) {
		    modal.style.display = "none";
		  }
		}
	}

	function createPost(){
        var modal = document.getElementById('myModal_3');

        var btn = document.getElementById('myBtn3');
        var span = document.getElementsByClassName("close")[2];
        var span1 = document.getElementsByClassName("close")[3];

        modal.style.display = "block";
        span.onclick = function () {
        	modal.style.display = "none";
		};
        span1.onclick = function(){
            modal.style.display = "none";
        };
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

	}