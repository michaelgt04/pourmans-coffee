require "rails_helper"

describe Api::V1::ProductsController do
  let!(:drink) { FactoryGirl.create(:drink) }
  let!(:food) { FactoryGirl.create(:food) }

  describe "#index" do
    let!(:expected_json) {
      {
        "products" => {
          "drinks" => [
            {
              "id" => drink.id,
              "title" => "Coconut Cold Brew",
              "description" => "The most amazing coffee ever",
              "group" => "drink"
            }
          ],
          "food" => [
            {  
              "id" => food.id,
              "title" => "Dark Chocolate Brownie",
              "description" => "Incredibly fudgey",
              "group" => "food"
            }
          ]
        }
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
end
