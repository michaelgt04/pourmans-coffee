class Api::V1::EventSerializer < ActiveModel::Serializer
  attributes :day, :start_time, :end_time, :location
end
