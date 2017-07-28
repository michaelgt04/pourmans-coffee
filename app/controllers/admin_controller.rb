class AdminController < ApplicationController
  def index
    @current_user = ENV['ADMIN'] 
  end
end

