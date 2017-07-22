class Api::V1::EventSerializer < ActiveModel::Serializer
  attributes :id, :day, :start_time, :end_time, :location, :note
end
