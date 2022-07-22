function readTextFile(file, callback) {
	const rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

// Code Coverage
readTextFile("data/details.json", function (detailsJSON) {
	const details = JSON.parse(detailsJSON);

	const date = new Date(details.timestamp * 1000);

	const label = document.getElementById('pageDetails')
	label.innerHTML = `<a href="${details.repo}" target="_blank">${details.name}</a> as of ${date.toUTCString()}.`;
});