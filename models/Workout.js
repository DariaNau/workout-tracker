const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  // totalDuration: Number,
  exercises: [
    {
      type: {
        type: String,
        required: "Please enter a type"
      },
      name: {
        type: String,
        required: "Please enter a name"
      },
      duration: {
        type: Number,
        required: "Please enter a duration in minutes"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      },
    }
  ]
}, {
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function(){
  let totalDuration = 0;

  for(var i = 0; i < this.exercises.length; i++){
    totalDuration += this.exercises[i].duration
  }

  return totalDuration
})

// WorkoutSchema.virtual("totalWeight").get(function(){
//   let totalWeight = 0;

//   for(var i = 0; i < this.exercises.length; i++){
//     totalWeight += this.exercises[i].weight
//   }

//   return totalWeight
// })

// WorkoutSchema.virtual("totalSets").get(function(){
//   let totalSets = 0;

//   for(var i = 0; i < this.exercises.length; i++){
//     totalSets += this.exercises[i].sets
//   }

//   return totalSets
// })

// WorkoutSchema.virtual("totalReps").get(function(){
//   let totalReps = 0;

//   for(var i = 0; i < this.exercises.length; i++){
//     totalReps += this.exercises[i].reps
//   }

//   return totalReps
// })


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;