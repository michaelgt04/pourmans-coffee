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

  def show
    product = Product.find(params[:id])
    render json: product
  end

  def create
    product = Product.new(create_params)
    if product.save
      render json: product
    else
      render_object_errors(product)
    end
  end

  def update
    product = Product.find(params[:id])
    if product.update(update_params)
      render json: product
    else
      render_object_errors(product)
    end
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    render json: product
  end


  private

  def create_params
    params.require(:product).permit(:title, :description, :group)
  end

  def update_params
    params.require(:product).permit(:id, :title, :description, :group)
  end
end
