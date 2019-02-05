class OwnersController < ApplicationController

  def show
    # /owners/:id
    @owner = Owner.find(params[:id])
    render :show
  end
end
