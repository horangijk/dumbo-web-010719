# We first need to install our packages
# Then we must "require" the package
require "rest-client"
require "json"
require "pry"

# 1. Make a request to reddit
raw_response = RestClient.get("https://reddit.com/.json")
# 2. Parse that request for Ruby
json_response = JSON.parse(raw_response.body)

binding.pry
# puts json_response
# 3. Output the data that we care about
# 3a. Change the data to match whatever the user should see
json_response["data"]["children"].each do |post|
  puts post["data"]["title"]
end