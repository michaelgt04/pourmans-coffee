class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :day, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.string :location, null: false
    end
  end
end
