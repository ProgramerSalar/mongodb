const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: { type: String, required: true },
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
  /// # how to create a data
  //   const ss = new Student({
  //     name: "ABhi",
  //     workout: true,
  //     height: 4,
  //   });

  //   await ss.save();

  //   const ssr = await Student.create({
  //     name: "rahul",
  //     workout: true,
  //     height: 3,
  //   });

  //   console.log(ssr);

  /// # how to find a data
  //   const ss = await Student.find();
  //   console.log(ss);

  const ss = await Student.find({ height: { $eq: 4 } });
  console.log(ss);
};

adder();
