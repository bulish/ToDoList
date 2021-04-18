function Cards () {

    /* getting the text from textInput */

    if (document.querySelector('.theInput').value != "") {
    var inputText = document.querySelector('.theInput').value;

    /* creating the card with task
    HTML structure of the card:
    <div class="mainDiv"><div class="card">TASK</div><div class="check"><i class="fas fa-check-circle" onclick="deleteTheCard(event)"></i></div></div>
    */

    var mainDiv = document.createElement("div");
    mainDiv.classList = "mainDiv";

    var list = document.querySelector('#list');
	list.appendChild(mainDiv);

	var card = document.createElement('div');
	card.classList = 'card';
	card.innerHTML = inputText;
    mainDiv.appendChild(card);

	var check = document.createElement('div');
	check.classList = 'check';
	check.innerHTML = '<i class="fas fa-check-circle" onclick="deleteTheCard(event)">';
	mainDiv.appendChild(check);

    /* when the card is created, delete text in textInput*/

	document.querySelector('.theInput').value = '';
    }

    /* styles */

    style1 = card.style;
    style1.display = 'inline-block';
    style1.width = '90%';
    style1.background = 'white';
    style1.margin = '0.5rem';
    style1.padding = '0.5rem';
    style1.fontWeight = 'bold';
    style1.position = 'relative';
    style1.overflow = 'hidden';

    style2 = check.style;
    style2.fontSize = '1.75rem';
    style2.position = 'relative';
    style2.top = '-1rem';
    style2.display = 'inline-block';

    check.addEventListener('mouseenter', function() {
        style2.color = 'rgb(82, 75, 77)';
    })

    check.addEventListener('mouseleave', function () {
		style2.color = 'black';
	});
}

/* calling the function on click and on keydown (enter) */

document.querySelector('.inputCheck').addEventListener('click', Cards);

document.addEventListener("keydown", function(e){
    if(e.keyCode == 13) {
        Cards();
    }
})

function deleteTheCard(event) {
    card = document.querySelectorAll('.card');
    check = document.querySelectorAll('.check');

    // delete the icon check
    event.target.style.display = 'none';

    // if icon check in mainDiv has display:none, delete the mainDiv
    mainDivs = document.querySelectorAll(".mainDiv");
    for (let i = 0; i < mainDivs.length; i++) {
        if ((mainDivs[i].querySelector('.fas').style.display == 'none')) {
					mainDivs[i].style.display = 'none';
				}
    }
}