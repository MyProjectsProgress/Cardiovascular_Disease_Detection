$.ajax({
  method: "GET",
  url: "http://localhost:8000/",
  success: (respone) => {
    console.log(respone);
    const data = respone;
    data.forEach((item) => {
      showData(item);
    });
  },
});
function showData(obj) {
	let result = 'No'
	if (obj.cardio[1] == 1) {
		result = 'Yes'
	} 
  let row = `
  <li>
					<div class="item">
					  <div class="name">
						<span>${obj.name}</span>
					  </div>
					  <div class="phone">
						<span>${obj.age}</span>
					  </div>
					  <div class="issue">
						<span>${obj.height}</span>
					  </div>
					  <div class="status">
						<span class="${result}">${result}</span>
					  </div>
					</div>
				  </li>`;

  $(".results").prepend(row);
}
