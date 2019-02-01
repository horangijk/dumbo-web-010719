class CarsController < ApplicationController

  # get "/cars" do
  # @cars = Car.all
  # erb :'/cars/index'
  # end

  def index
    @cars = Car.all
    render :index
  end

  def show
    # GET /cars/:id
    @car = Car.find(params[:id])
    render :show
  end

  def new
    render :new
  end

  def create
    # byebug
    # Strong params we will talk about Monday
    # I will create a thing
    car = Car.create(name: params[:name], color: params[:color], make: params[:make])

    # after I create, I need to know where I go
    redirect_to "/cars/#{car.id}"
  end

  def edit
    # GET /cars/:id/edit
    @car = Car.find(params[:id])
    render :edit
  end

  def update
    # PATCH /cars/:id
    car = Car.find(params[:id])
    car.update(name: params[:name], color: params[:color], make: params[:make])
    redirect_to "/cars/#{car.id}"
  end

  def destroy
    car = Car.find(params[:id])
    car.delete

    redirect_to "/cars"
  end















end
