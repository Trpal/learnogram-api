import mongoose from "mongoose";

const schema = new mongoose.Schema({
	title: { type: String, required: true },
	source: { type: String, required: true },
	userId: { type: mongoose.Schema.Types.ObjectId, required: false },
	finished: { type: Boolean, required: false }
});

export default mongoose.model("Resource", schema);
