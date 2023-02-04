import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
	res.send(users);
};
export const createUser = (req, res) => {
	const user = req.body;

	users.push({ ...user, id: uuid() });
	res.send("User Successfully Added Thank you");
};
export const getUser = (req, res) => {
	const singleUser = users.filter((user) => user.id === req.params.id);
	res.send(singleUser);
};
export const deleteUser = (req, res) => {
	users = users.filter((user) => user.id !== req.params.id);
	res.send("User deleted Successfully");
};
export const updateUser = (req, res) => {
	const user = users.find((user) => user.id === req.params.id);
	user.name = req.body.name;
	user.midname = req.body.midname;
	user.lastname = req.body.lastname;
	user.selectclass = req.body.selectclass;
	user.selectdivision = req.body.selectdivision;
	user.rollno = req.body.rollno;
	user.adress1 = req.body.adress1;
	user.adress2 = req.body.adress2;
	user.landmark = req.body.landmark;
	user.city = req.body.city;
	user.pincode = req.body.pincode;
	res.send("User updated Successfully");
};
// user.name =req.name
// user.midname =req.body
// user.lastname =req.body
// user.selectclass =req.body
// user.selectdivision =req.body
// user.rollno =req.body
// user.adress1 =req.body
// user.adress2 =req.body
// user.landmark =req.body
// user.city =req.body
// user.pincode =req.body
