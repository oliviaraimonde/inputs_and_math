$("body").on("keyup keydown keypress change", "input", function (e) {
	console.log("Hello!!!");
	const $this_input = $(this);
	const $this_row = $this_input.closest("[data-tariff-percent]");
	//closest is for ancestors and find is for descendants
	const $span_pre_total = $this_row.find(".pre_total").find("span");
	const $span_post_total = $this_row.find(".post_total").find("span");
	let qty = $this_row.find(".qty").find("input").val();
	let cost = $this_row.find(".cost").find("input").val();
	let tariff = $this_row.data("tariff-percent");

	qty = parseFloat(qty); //in JS what happens on the right side of the = sign happens first, so this is taking the qty running it though parseFloat and then storing it on the left
	cost = parseFloat(cost);
	tariff = parseFloat(tariff);

	let tariff_decimal = tariff / 100; //this converts percentages to decimals
	let pre_tariff = qty * cost; //JS follows PEMDAS
	let post_tariff = ((qty * cost) * (1 + tariff_decimal));

	console.log("Qty", qty);
	console.log("Cost", cost);
	console.log("Tariff", tariff);

	console.log("pre_tariff", pre_tariff);
	console.log("post_tariff", post_tariff);

	$span_pre_total.text(pre_tariff);
	$span_post_total.text(post_tariff);
});

$("body").on("click", ".calculate", function (e) {
	e.preventDefault();

	let pre_total = 0;
	$(".pre_total").each(function () {
		const $this_div = $(this);
		const $this_pre_total_span = $this_div.find("span");
		const $span_pre_total = $this_div.find("#pre_total").find("span");
		let value = $this_pre_total_span.text();
		value = parseFloat(value);
		pre_total = pre_total + value;

	});
	console.log("Working!");
	console.log(pre_total);

	$("#pre_total").find("span").text(pre_total)


});

$("body").on("click", ".calculate", function (e) {
	e.preventDefault();

	let post_total = 0;
	$(".post_total").each(function () {
		const $this_post_total = $(this);
		const $this_post_total_span = $this_post_total.find("span");
		let value = $this_post_total_span.text();
		value = parseFloat(value);
		post_total = post_total + value;

	});
	console.log("You did it!");
	console.log(post_total);

	$("#post_total").find("span").text(post_total)
});

//below here is fucked up