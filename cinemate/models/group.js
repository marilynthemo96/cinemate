import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Define the schema for users
const groupSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true	
	},
	password: {
		type: String,
		required: true	
	}
});
// Create the model from the schema and export it
export default mongoose.model('Group', groupSchema)