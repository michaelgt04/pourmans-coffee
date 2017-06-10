class Event < ApplicationRecord
  validates :day, presence: true, inclusion: { in: %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)}

  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :location, presence: true
end
