import { logUser } from "./index";

const anotherUser = {
	name: "Jane",
	age: 27,
};

export function logAnotherUser() {
	console.log(anotherUser);
}

logUser();
