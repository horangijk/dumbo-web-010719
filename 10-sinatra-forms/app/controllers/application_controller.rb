# ApplicationController
# =====================
#  - Represents the top-level controller for our application
#  - A controller will **inherit** from Sinatra::Base
class ApplicationController < Sinatra::Base

  # Since we are writing a non-standard Sinatra application
  # (a.k.a. we are writing it with folders and a modular pattern),
  # we need to say where the root is and where the app is supposed
  # to find its views.
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, File.join(root, "views")


  # Remember that when building out a route, we want
  # to tell people the request method and the URL

  # Here I want to see all of the films in the database
  get '/films' do
    # We're going to tell the controller what to do when it sees this request
    # Think about this as if I were in the rake console
    @films = Film.all

    # Then we need to tell it what view to show
    # erb is looking for a file path and so it is expecting a symbol
    erb :films # '/views/films.erb'
  end

  # Here we are going to get a *specifc* item
  # We need to have the variable input so that way we can show
  # different things depending on the route
  get '/films/:id' do
    # We can also test what data is coming by using binding.pry still
    # binding.pry
    @film = Film.find(params[:id])
    erb :show
  end
end
