class ToysController < ApplicationController

  # What is supposed to be here?
  # Our Actions; RESTFUL
  # new, create, index, edit, update, show, destroy
  def index
    # List all of the toys
    @toys = Toy.all

    # render needs to be told that it is a specific format
    # the format is json
    render json: @toys
  end

  def show
    # GET /toys/:id
    @toy = Toy.find(params[:id])
    render json: @toy
  end


  def create
    # POST /toys
    @toy = Toy.create(toy_params)
    render json: @toy
  end

  def update
    # PATCH /toys/:id
    @toy = Toy.find(params[:id])
    @toy.update(toy_params)
    render json: @toy
  end



  private
  def toy_params
    # {
    #   name: "Pikachu",
    #   image: "some_url"
    # }
    params.permit(:name, :image, :likes)
  end









end
