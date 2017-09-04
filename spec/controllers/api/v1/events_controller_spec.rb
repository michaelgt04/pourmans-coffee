require "rails_helper"

describe Api::V1::EventsController do
  let!(:event) { FactoryGirl.create(:event) }
  let(:json_parsed_response) { JSON.parse(response.body) }

  let(:correct_event_params) { { day: 'Monday', start_time: '9:00', end_time: '1:00', location: 'Dewey Square', note: 'Every other week' } }
  let(:incorrect_event_params) { { day: '', start_time: '9:00', end_time: '1:00', location: 'Dewey Square', note: 'Every other week' } }

  let(:edit_params) { {id: event.id, day: 'Friday'} }

  describe "#index" do
    let!(:expected_json) {
      {
        "Tuesday" => [{
          "id" => event.id,
          "day" => "Tuesday",
          "start_time" => "12:30",
          "end_time" => "1:30",
          "location" => "Dewey Square",
          "note" => "Every other week"
        }]
      }
    }

    it "should return a json representation of all the events in the database" do
      get :index

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.code).to eq("200")
      expect(parsed).to eq(expected_json)
    end
  end

  describe "POST #create" do
    it "creates a new event" do
      expect { post :create, params: { event: correct_event_params } }.to change { Event.count }.by 1
    end

    it "returns the products as JSON" do
      post :create, params: { event: correct_event_params }

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(json_parsed_response.keys).to eq ["id", "day", "start_time", "end_time", "location", "note"]
      expect(json_parsed_response.values).to include("Monday", "9:00", "1:00", "Dewey Square", "Every other week")
    end

    it "returns an error when the payload is incorrect" do
      post :create, params: { event: incorrect_event_params }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_parsed_response.keys).to eq ["errors"]
      expect(json_parsed_response["errors"]).to eq ["Day can't be blank", "Day is not included in the list"]
    end
  end

  describe "PUT #edit" do
    let!(:expected_json) {
      {
        "id" => event.id,
        "day" => "Friday",
        "start_time" => "12:30",
        "end_time" => "1:30",
        "location" => "Dewey Square",
        "note" => "Every other week"
      }
    }

    it "updates an existing event" do
      put :update, params: {id: event.id, event: {day: "Friday"}}
      expect(event.reload.day).to eq "Friday"
    end

    it "responds with JSON representation of updated event" do
      put :update, params: {id: event.id, event: {day: "Friday"}}

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(json_parsed_response["day"]).to eq "Friday"
    end

    it "returns errors with unacceptable params" do
      put :update, params: { id: event.id, event: { day: 'Harvestday' } }

      expect(response).to have_http_status :unprocessable_entity
      expect(json_parsed_response.keys).to eq ["errors"]
    end
  end
end
