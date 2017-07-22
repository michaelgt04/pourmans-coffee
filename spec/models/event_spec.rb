require 'rails_helper'

RSpec.describe Event, type: :model do

  it { should have_valid(:day).when("Monday", "Tuesday", "Thursday") }
  it { should_not have_valid(:day).when(nil, "never", "forever") }

  it { should have_valid(:start_time).when("12:00", "5:00") }
  it { should_not have_valid(:start_time).when(nil) }

  it { should have_valid(:end_time).when("12:00", "5:00") }
  it { should_not have_valid(:end_time).when(nil) }

  it { should have_valid(:location).when("Dewey Square", "Post Office Square") }
  it { should_not have_valid(:location).when(nil) }

  it { should have_valid(:note).when("Every other week", nil) }
end
