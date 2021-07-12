//fetch github users

fetch('https://api.github.com/users/adarshmaharjan')
	.then((response) => response.json())
	.then(function (data) {
		//fetch github user
		// console.log(data);
		document.getElementById('full-name').textContent = data['login'];
		document.getElementById('profile-image').src = data['avatar_url'];
		document.getElementById('github-link').href = data['html_url'];
		document.getElementById('bio').textContent = data['bio'];
		//followers
		let followersCount = data['followers'];
		let followersInfo = `I have been followed by ${followersCount} on my github account`;
		document.getElementById('followers-info').textContent = followersInfo;
		document.getElementById('main-container').style.visibility = 'visible';
		document.getElementById('loading').hidden = true;

		//fetch github repo
		// const repoURL = data['repos_url'];
		// console.log(repoURL);
		//fetching
		// fetch(repoURL)
		// 	.then((response) => response.json())
		// 	.then((repository) => {
		// console.log(repository);
		// 		const githubRepo = document.getElementById(
		// 			'repository-container'
		// 		);
		// 		githubRepo.innerHTML = repository.map((items) => {
		// 			const { name } = items;
		// console.log(name);
		// 			return `<li>${name}</li>`;
		// 		});
		// 	});
	});
//fetch github repo
