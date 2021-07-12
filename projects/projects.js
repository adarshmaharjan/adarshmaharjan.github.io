//fetch github users

fetch('https://api.github.com/users/adarshmaharjan')
	.then((response) => response.json())
	.then(function (data) {
		//fetch github repo
		const repoURL = data['repos_url'];
		// console.log(repoURL);
		//fetching
		fetch(repoURL)
			.then((response) => response.json())
			.then((repository) => {
				// console.log(repository);
				const githubRepo = document.getElementById(
					'repository-container'
				);
				githubRepo.innerHTML = repository
					.map((items) => {
						const { name } = items;
						console.log(name);
						return `<li>${name}</li>`;
					})
					.join('');
			});
	});
//fetch github repo
