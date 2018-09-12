export default function pullDownToRefresh() {
	var mousePosYBefore;
	var mousePosYAfter;
	
	const tolerance = 100;
	const page = document.querySelector('body');
	
	document.addEventListener('mousedown', function(e){
		mousePosYBefore = e.pageY;
		page.innerHTML += `<div class="u-mt--small">Before: ${mousePosYBefore}</div>`;
	});
	
	document.addEventListener('mouseup', function(e){
		mousePosYAfter = e.pageY;
	
		const mousePosYDifference = mousePosYAfter - mousePosYBefore;
	
		page.innerHTML += `<div class="u-mt--small">After: ${mousePosYAfter}</div>`;
		page.innerHTML += `<div class="u-mt--small">Difference: ${mousePosYDifference}</div>`;
	
		if (mousePosYBefore < mousePosYAfter && (mousePosYAfter - mousePosYBefore) > tolerance) {
			location.reload();
		}
	});
}
