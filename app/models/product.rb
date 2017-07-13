class Product < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :img_url, presence: true
end
