require "rails_helper"

describe Api::V1::ProductsController do
  let!(:product) { FactoryGirl.create(:product) }

  describe "#index" do
    let!(:expected_json) {
      [
        {
          "id" => product.id,
          "title" => "Coconut Cold Brew",
          "description" => "The most amazing coffee ever",
          "img_url" => "www.amazingcoffee.com",
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
