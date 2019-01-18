require_relative '../config/environment.rb'

puts "Welcome to our restaurant app"
puts "What is your name"
name = gets.chomp
puts "what is your birthdate"
birthdate = gets.chomp
customer = Customer.create(name: name, birthdate:birthdate)

puts "Welcome to Yelp"
