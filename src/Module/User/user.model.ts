import { model, Schema } from "mongoose";
import { IUser } from "./user.Interface";

const userSchema = new Schema<IUser>({
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

// Middleware Hook pre
userSchema.pre("find", function (this, next) {
  this.find({ userStatus: { $eq: "active" } });
  next();
});

// Middleware Hook post
userSchema.post("find", function (docs, next) {
  docs.map((doc: IUser) => {
    doc.name = doc.name.toUpperCase();
  });
  next();
});

const User = model<IUser>("User", userSchema);

export default User;
