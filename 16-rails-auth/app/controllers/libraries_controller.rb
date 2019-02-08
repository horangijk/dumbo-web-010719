class LibrariesController < ApplicationController
  before_action :authorized

  def index
    @libraries = Library.all
    render :index
  end

end
