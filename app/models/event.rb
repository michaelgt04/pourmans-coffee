class Event < ApplicationRecord
  validates :day, presence: true, inclusion: { in: %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)}, case_sensitive: false

  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :location, presence: true
end
