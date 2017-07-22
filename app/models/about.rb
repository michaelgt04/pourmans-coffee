class About < ApplicationRecord
  validates :blurb,
    presence: true,
    length: { maximum: 865 }
end
