class Api::V1::AboutController < ApplicationController

  def index
    about = About.all

    render json: about
  end
end
