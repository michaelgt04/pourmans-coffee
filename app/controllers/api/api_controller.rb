class Api::ApiController < ApplicationController
  def render_object_errors(object)
    render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
  end
end
