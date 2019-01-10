require 'pry'
require './Tweet.rb'
require './User.rb'

helen = User.new("Helen_L")
mariel = User.new("TCF_Mariel")

# tweet1 = Tweet.new("Hello World 1", helen)
# tweet2 = Tweet.new("Hello World Again", helen)

helen.post_tweet("Hello World 1")
mariel.post_tweet("Hello World 2")

binding.pry
