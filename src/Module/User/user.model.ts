import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email address"],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
      },
      message: `{VALUE} is not a valid email address`,
    },
  },
  photo: String,
  role: {
    type: String,
    enum: { values: ["admin", "user"], message: `{VALUE} is not a valid role` },
    default: "user",
  },
  userStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const User = model("User", userSchema);

export default User;
