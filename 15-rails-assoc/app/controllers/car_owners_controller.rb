class CarOwnersController < ApplicationController
  def new
    @car_owner = CarOwner.new
    render :new
  end

  def create


    car_owner = CarOwner.create(car_owner_params)
    if car_owner.valid?
      redirect_to owner_path(car_owner.owner)
      # "/owners/1"
    else
      byebug
      flash[:error] = car_owner.errors.full_messages
      @car_owner = CarOwner.new
      render :new
    end
  end

  private
  def car_owner_params
    params.require(:car_owner).permit(:owner_id, :car_id, :years_held)
  end
end
