import mongoose, { Schema } from "mongoose";

const taskModel = mongoose.model(
  "Task_Manager",
  new Schema({
    name: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      //   required: true,
    },
    tasks: [
      {
        title: {
          type: String,
          minlength: [3, "Task name needs to be at least 3 characters long"],
          maxlength: [50, "Task name cannot exceed 50 characters"],
        },
        description: {
          type: String,
          maxlength: [200, "Description cannot exceed 200 characters"],
        },
        status: {
          type: String,
          enum: ["pending", "in-progress", "completed"],
          default: "pending",
        },
        dueDate: {
          type: Date,
          default: null,
        },
        priority: {
          type: String,
          enum: ["low", "medium", "high"],
          default: "medium",
        },
      },
    ],
  })
);

export { taskModel };
