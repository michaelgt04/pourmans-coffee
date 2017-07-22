require "rails_helper"

describe Api::V1::AboutController do
  let!(:about) { FactoryGirl.create(:about) }
  let(:json_parsed_response) { JSON.parse(response.body) }

  let!(:correct_about_params) { { blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" } }
  let!(:incorrect_about_params) { { blurb: "" } }

  describe "#index" do
    let!(:expected_json) {
      [
        {
          "id" => about.id,
          "blurb" => "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
      ]
    }

    it "should return a json representation of the user's about section" do
      get :index

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.code).to eq("200")
      expect(parsed).to eq(expected_json)
    end
  end

  describe "POST #create" do
    it "creates a new about" do
      expect { post :create, params: { about: correct_about_params } }.to change { About.count }.by 1
    end

    it "returns the products as JSON" do
      post :create, params: { about: correct_about_params }

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(json_parsed_response.keys).to eq ["id", "blurb"]
      expect(json_parsed_response.values).to include(correct_about_params[:blurb])
    end

    it "returns an error when the payload is incorrect" do
      post :create, params: { about: incorrect_about_params }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_parsed_response.keys).to eq ["errors"]
      expect(json_parsed_response["errors"]).to eq ["Blurb can't be blank"]
    end
  end
end
