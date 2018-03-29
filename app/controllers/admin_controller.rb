class AdminController < ApplicationController
  def index
    @current_user = current_user
  end

  def new
  end

  def create
    user = User.find_by(email: params[:email])
    
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/admin'
    else
      flash[:error] = "Please try again, those credentials weren't valid"
      redirect_to '/admin/new'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/admin/new'
  end
end

