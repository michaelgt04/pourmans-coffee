class Api::V1::ProductsController < ApplicationController

  def index
    drinks = ActiveModel::Serializer::CollectionSerializer.new(
      Product.where(group: 'drink'), 
      serializer: Api::V1::ProductSerializer
    )

    food = ActiveModel::Serializer::CollectionSerializer.new(
      Product.where(group: 'food'), 
      serializer: Api::V1::ProductSerializer
    )

    render json: { products: { drinks: drinks, food: food } }
  end

end
