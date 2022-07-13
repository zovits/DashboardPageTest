function readTextFile(file, callback) {
	const rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

const barColors = [
	'rgba(0, 162, 255, 0.8)',
	'rgba(1, 60, 128, 0.8)',
	'rgba(12, 109, 219, 0.8)',
];

// Code Coverage
readTextFile("/data/code-coverage.json", function(coverageReport){
	const rawData = JSON.parse(coverageReport);

	const labels = [];
	const linesDataset = {
		label: '% lines covered by tests',
		borderWidth: 0,
		data: [],
		backgroundColor: [],
	};
	const funcsDataset = {
		label: '% functions covered by tests',
		borderWidth: 0,
		data: [],
		backgroundColor: [],
	};

	for (label in rawData) {
		labels.push(label);
		linesDataset.data.push(rawData[label].lines);
		funcsDataset.data.push(rawData[label].functions);
		linesDataset.backgroundColor.push(barColors[0]);
		funcsDataset.backgroundColor.push(barColors[1]);
	}


	const coverageCtx = document.getElementById('codeCoverage').getContext('2d');
	const coverageChart = new Chart(coverageCtx, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [linesDataset, funcsDataset],
		},
		options: {
			scales: {
				y: {
					min: 0, max: 100,
				}
			}
		},
		plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        console.log(context);
                        return context.dataset.label;
                    }
                }
            },
        },
	});
});