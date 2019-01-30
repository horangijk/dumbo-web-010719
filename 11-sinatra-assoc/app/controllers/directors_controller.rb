class DirectorsController < ApplicationController

  get '/directors/new' do
    erb :'/directors/new'
  end

  # http://localhost:3000/directors/1
  get "/directors/:id" do
    @director = Director.find(params[:id])
    erb :'/directors/show'
  end

  post "/directors" do
    director = Director.create(params[:director])

    redirect to("/directors/#{director.id}")
  end



end
