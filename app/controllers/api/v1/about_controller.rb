class Api::V1::AboutController < Api::ApiController
  
  def index
    about = About.all.first

    render json: about
  end

  def create
    about = About.new(about_params)
    if about.save
      render json: about
    else
      render_object_errors(about)
    end
  end

  private

  def about_params
    params.require(:about).permit(:blurb)
  end
end
