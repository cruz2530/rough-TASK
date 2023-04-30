fetch('course.json')
	.then(response => response.json())
	.then(data => {
		for (const course of data.courses)

			var container = document.getElementById("course-grid");

			data.courses.forEach(course=> {
			const gridItem = document.createElement('div');
			gridItem.classList.add('grid-item');

			const courseName = document.createElement('h2');
			courseName.textContent = course.course_name;

			const courseIcon = document.createElement('img');
			courseIcon.src = course.courseicon;

			const courseLevel = document.createElement('p');
			courseLevel.innerHTML = "<b>COURSE LEVEL: </b>" + course.level;

			const courseDuration = document.createElement('p');
			courseDuration.innerHTML = "<b>COURSE DURATION: </b>" + course.duration;

			const courseStarting = document.createElement('p');
			courseStarting.innerHTML = "<b>COURSE STARTING: </b>" + course.starting;

			const courseRequirement = document.createElement('p');
			courseRequirement.innerHTML = "<b>COURSE REQUIRMENT: </b>" + course.entry_requirements;


			gridItem.appendChild(courseName);
			gridItem.appendChild(courseIcon);
			gridItem.appendChild(courseLevel);
			gridItem.appendChild(courseDuration);
			gridItem.appendChild(courseStarting);
			gridItem.appendChild(courseRequirement);

			container.appendChild(gridItem);
			});

	})
	.catch(error => console.error(error));
