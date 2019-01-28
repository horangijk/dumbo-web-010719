require 'sinatra'


# GET request -> It says get
# Some path -> .... '/'
# Return the response -> "Hello World"
get '/' do
  'Hello World'
end

get '/prince' do
  "Hello Corgi Kings"
end

get '/string-cheese' do
  "Prince is the new mod instructor"
end
