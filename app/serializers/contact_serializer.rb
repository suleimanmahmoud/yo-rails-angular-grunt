class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :message, :updated_at
end
