class CarOwnersController < ApplicationController
  def new
    @car_owner = CarOwner.new
    render :new
  end

  def create
    # byebug

    car_owner = CarOwner.create(car_owner_params)
    redirect_to owner_path(car_owner.owner)
  end

  private
  def car_owner_params
    params.require(:car_owner).permit(:owner_id, :car_id, :years_held)
  end
end
