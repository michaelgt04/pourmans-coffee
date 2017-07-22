class Api::V1::ProductsController < Api::ApiController

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

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render_object_errors(product)
    end
  end

  def destroy
  end

  private

  def product_params
    params.require(:product).permit(:title, :description, :group)
  end
end
