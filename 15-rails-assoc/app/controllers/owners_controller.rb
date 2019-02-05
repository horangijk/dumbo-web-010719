class OwnersController < ApplicationController

  def show
    # /owners/:id
    @owner = Owner.find(params[:id])
    @car_owner = CarOwner.new
    render :show
  end
end
