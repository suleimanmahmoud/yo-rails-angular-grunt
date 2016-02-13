class CreateMcquestions < ActiveRecord::Migration
  def change
    create_table :mcquestions do |t|
      t.text :stem, null: false

      t.timestamps null: false
    end
  end
end
