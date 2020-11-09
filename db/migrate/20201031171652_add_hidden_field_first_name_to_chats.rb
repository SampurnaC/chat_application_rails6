class AddHiddenFieldFirstNameToChats < ActiveRecord::Migration[6.0]
  def change
    add_column :chats, :first_name, :string
  end
end
