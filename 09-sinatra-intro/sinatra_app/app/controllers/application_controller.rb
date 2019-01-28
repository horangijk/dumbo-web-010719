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


  # I want to see all of the films in the database
  get '/films' do
    # Think about this as if I were in the rake console
    @films = Film.all

    # What view to show
    erb :films # '/views/films.erb'
  end

  get '/films/:id' do
    # binding.pry
    @film = Film.find(params[:id])

    erb :show
  end

  # get '/dogs' do
  #   # Get all the Dogs (Who let the dogs out)
  # end


end
