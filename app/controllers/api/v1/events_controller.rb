class Api::V1::EventsController < Api::ApiController

  def index
    events = Event.all

    render json: events.group_by(&:day)
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render_object_errors(event)
    end
  end

  def update
    event = Event.find(params[:id])
    if event.update(event_params)
      render json: event
    else
      render_object_errors(event)
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    render json: event
  end

  private

  def event_params
    params.require(:event).permit(:day, :start_time, :end_time, :location, :note)
  end
end
