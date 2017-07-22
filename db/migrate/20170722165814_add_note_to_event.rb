class AddNoteToEvent < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :note, :string
  end
end
