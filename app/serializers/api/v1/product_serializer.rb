class Api::V1::ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url
end
