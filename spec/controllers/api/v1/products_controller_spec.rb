require "rails_helper"

describe Api::V1::ProductsController do
  let!(:drink) { FactoryGirl.create(:drink) }
  let!(:food) { FactoryGirl.create(:food) }
  let(:json_parsed_response) { JSON.parse(response.body) }

  let(:correct_product_params) { { title: "muffin", description: "a muffin", group: "food" } }
  let(:incorrect_product_params) { { title: "", description: "a muffin", group: "food" } }

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

      expect(response.content_type).to eq("application/json")
      expect(response.code).to eq("200")
      expect(json_parsed_response).to eq(expected_json)
    end
  end

  describe "POST #create" do
    it "creates a new product" do
      expect { post :create, params: { product: correct_product_params } }.to change { Product.count }.by 1
    end

    it "returns the products as JSON" do
      post :create, params: { product: correct_product_params }

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(json_parsed_response.keys).to eq ["id", "title", "description", "group"]
      expect(json_parsed_response.values).to include("muffin", "a muffin", "food")
    end

    it "returns an error when the payload is incorrect" do
      post :create, params: { product: incorrect_product_params }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_parsed_response.keys).to eq ["errors"]
      expect(json_parsed_response["errors"]).to eq ["Title can't be blank"]
    end
  end

  describe "DELETE #destroy" do
    it "returns the deleted product as JSON" do
      delete :destory, params: { id: food.id }

      expect(response).to have_http_status(:ok)
      expect(response.content_type).to eq("application/json")
      expect(json_parsed_response.keys).to eq ["id", "title", "description", "group"]
      expect(json_parsed_response["id"]).to eq food.id
    end

    it "successfully deletes a product" do
      expect { delete :destroy, params: { id: food.id } }.to change{ Product.count }.by 1
    end
  end
end
