const logInUrl = (username, password) => {
	return `http://127.0.0.1:5500/json/${username}.json`;
};

const getUserSuccessUrl = () => {
	return `http://127.0.0.1:5500/json/user1.json`;
};

const getUserFailedUrl = () => {
	return `http://127.0.0.1:5500/json/userFailed.json`;
};

class UserService {
	static defaultUser = {
		videos: {
			likes: [],
		},
	};

	constructor() {
		console.log(this.constructor.defaultUser);
		this.currentUser = this.constructor.defaultUser;
	}

	getCurrentUser = () => {
		console.log(this.currentUser);
		return this.currentUser;
	};

	redirectIfUserLogin = (path) => {
		const user = this.getCurrentUser();
		console.log(user);
		if (user.id) {
			window.location.pathname = path;
		}
	};

	getUserFromServer = async () => {
		const url = getUserFailedUrl();

		const response = await fetch(url);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		this.currentUser = await response.json();
		console.log(this.currentUser);
		return new Promise((resolve, reject) => {
			resolve(this.currentUser);
		});
	};

	logIn = async (username, password) => {
		const url = logInUrl(username, password);
		const response = await fetch(url);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		this.currentUser = await response.json();

		return new Promise((resolve, reject) => {
			resolve(this.currentUser);
		});
	};
}

export default UserService;
