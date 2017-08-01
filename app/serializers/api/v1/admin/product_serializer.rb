class Api::V1::Admin::ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :group
end
