class Api::V1::EventsController < ApplicationController

  def index
    events = Event.all

    render json: events.group_by(&:day)
  end
end
