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
  var row = `
  <li>
					<div class="item">
					  <div class="name">
						<span>${obj.name}</span>
					  </div>
					  <div class="phone">
						<span>${obj.age}</span>
					  </div>
					  <div class="issue">
						<span>${obj.hieght}</span>
					  </div>
					  <div class="status">
						<span class="open">No</span>
					  </div>
					</div>
				  </li>`;

  $(".results").prepend(row);
}
