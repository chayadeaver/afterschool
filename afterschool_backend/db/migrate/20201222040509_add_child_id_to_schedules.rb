class AddChildIdToSchedules < ActiveRecord::Migration[6.0]
  def change
    add_column :schedules, :child_id, :integer
  end
end
