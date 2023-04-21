// course.js
let tableHtml = '<table>';
tableHtml += '<tr><th>Course Name</th><th><th>Level</th><th>Duration</th><th>Starting</th><th>Entry Requirements</th><th>UK Full Time Fees</th><th>International Full Time Fees</th></tr>';

function loadData() {
	tableHtml="<table>";
	document.getElementById('course-table').innerHTML = "";
	fetch('course.json')
		.then(response => response.json())
		.then(data => {
			for (const course of data.courses) {
				tableHtml += '<tr>';
				tableHtml += `<td><img src="${course.courseicon}" alt=" width="80" height="50"></td>`;
				tableHtml += `<td>${course.course_name}</td>`;
				tableHtml += `<td>${course.level}</td>`;
				tableHtml += `<td>${course.duration}</td>`;
				tableHtml += `<td>${course.starting}</td>`;
				tableHtml += `<td>${course.entry_requirements.join('<br>')}</td>`;
				tableHtml += `<td>${course.fees.UK_FULL_TIME.annual_fee}</td>`;
				tableHtml += `<td>${course.fees.international_FULL_TIME.annual_fee}</td>`;
				tableHtml += '</tr>';
			}
			tableHtml += '</table>';
			document.getElementById('course-table').innerHTML = tableHtml;
		})
		.catch(error => console.error(error));
}

loadData();
//setInterval(loadData, 5000);

