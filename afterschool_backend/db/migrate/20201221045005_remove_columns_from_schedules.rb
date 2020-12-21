class RemoveColumnsFromSchedules < ActiveRecord::Migration[6.0]
  def change
    remove_column :schedules, :child_id, :integer
    remove_column :schedules, :week, :integer
  end
end
