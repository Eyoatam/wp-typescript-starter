import { logAnotherUser } from "./app";

let user = {
	name: "John",
	age: 24,
};

export function logUser() {
	console.log(user);
}

logAnotherUser();
