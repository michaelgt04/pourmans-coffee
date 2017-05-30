require "rails_helper"

describe Api::V1::EventsController do
  let!(:event) { FactoryGirl.create(:event) }

  describe "#index" do
    let!(:expected_json) {
      [
        {
          "id" => event.id,
          "day" => "Tuesday",
          "start_time" => "12:30",
          "end_time" => "1:30",
          "location" => "Dewey Square"
        }
      ]
    }

    it "should return a json representation of all the events in the database" do
      get :index

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.code).to eq("200")
      expect(parsed).to eq(expected_json)
    end
  end
end
