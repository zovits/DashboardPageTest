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
readTextFile("data/code-coverage.json", function(coverageReport){
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
		const datapoint = rawData[label];
		const date = new Date(datapoint.timestamp*1000);
		labels.push(`${label} - ${date.toLocaleDateString()}`);
		linesDataset.data.push(datapoint.lines);
		funcsDataset.data.push(datapoint.functions);
		linesDataset.backgroundColor.push(barColors[0]);
		funcsDataset.backgroundColor.push(barColors[1]);
	}


	const codeCoverageCtx = document.getElementById('codeCoverage').getContext('2d');
	const codeCoverageChart = new Chart(codeCoverageCtx, {
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
			},
		},
	});
});

// Type Coverage
const typeCoverageCtx = document.getElementById('typeCoverage').getContext('2d');
const typeCoverageChart = new Chart(typeCoverageCtx, {
	type: 'bar',
	data: {
		labels: ["TODO"],
		datasets: [{
			label: 'TODO',
			borderWidth: 0,
			data: [0],
			backgroundColor: [barColors[2]],
		}],
	},
	options: {
		scales: {
			y: {
				min: 0, max: 100,
			}
		},
	},
});
// Flag Combinatorics
const flagCombinatoricsCtx = document.getElementById('flagCombinatorics').getContext('2d');
const flagCombinatoricsChart = new Chart(flagCombinatoricsCtx, {
	type: 'bar',
	data: {
		labels: ["TODO"],
		datasets: [{
			label: 'TODO',
			borderWidth: 0,
			data: [0],
			backgroundColor: [barColors[2]],
		}],
	},
	options: {
		scales: {
			y: {
				min: 0, max: 100,
			}
		}
	},
});
// Cyclomatic Complexity
const cyclomaticComplexityCtx = document.getElementById('cyclomaticComplexity').getContext('2d');
const cyclomaticComplexityChart = new Chart(cyclomaticComplexityCtx, {
	type: 'bar',
	data: {
		labels: ["TODO"],
		datasets: [{
			label: 'TODO',
			borderWidth: 0,
			data: [0],
			backgroundColor: [barColors[2]],
		}],
	},
	options: {
		scales: {
			y: {
				min: 0, max: 100,
			}
		}
	},
});
// Code Duplication
const codeDuplicationCtx = document.getElementById('codeDuplication').getContext('2d');
const codeDuplicationChart = new Chart(codeDuplicationCtx, {
	type: 'bar',
	data: {
		labels: ["TODO"],
		datasets: [{
			label: 'TODO',
			borderWidth: 0,
			data: [0],
			backgroundColor: [barColors[2]],
		}],
	},
	options: {
		scales: {
			y: {
				min: 0, max: 100,
			}
		}
	},
});