# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Schedule.delete_all

Child.create(name: "Malik", age: "9", grade: "fourth")
Schedule.create(weekday: "Monday", subject: "Math", content: "Completed chapter 1 of Go Math", child_id: 1, week: 1)
Schedule.create(weekday: "Tuesday", subject: "Reading", content: "Completed chapter 1 of Lost", child_id: 1, week: 1)
Schedule.create(weekday: "Wednesday", subject: "Creative Writing", content: "Wrote a story about my Favorite things to eat", child_id: 1, week: 1)
Schedule.create(weekday: "Thursday", subject: "Physical Education", content: "Did 15 Jumping Jacks and 15 Sit Ups", child_id: 1, week: 1)
Schedule.create(weekday: "Friday", subject: "Music", content: "Listened to Beethoven on You Tube", child_id: 1, week: 1)
Schedule.create(weekday: "Monday", subject: "Math", content: "Completed chapter 2 of Go Math", child_id: 1, week: 2)
Schedule.create(weekday: "Tuesday", subject: "Reading", content: "Completed chapter 2 of Lost", child_id: 1, week: 2)
Schedule.create(weekday: "Wednesday", subject: "Creative Writing", content: "Wrote a story about my family", child_id: 1, week: 2)


