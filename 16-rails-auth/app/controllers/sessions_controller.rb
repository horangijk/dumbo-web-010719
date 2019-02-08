class SessionsController < ApplicationController

  # Creating a new session
  def new
    # This is the login page
    render :new
  end

  def create
    # This is how to make sure we logged in
    # byebug
    flash[:error] = nil
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to libraries_path
    else
      flash[:error] = "INVALID LOGIN"
      render :new
    end
  end

  def destroy
    session.delete :user_id
    redirect_to "/sessions/new"
  end





  # Deleting A Session

end
