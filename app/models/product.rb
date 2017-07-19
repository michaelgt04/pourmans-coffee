class Product < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :group, presence: true
end
