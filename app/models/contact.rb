class Contact < ActiveRecord::Base
  # validates :email, presence: true
  validates :name, presence: true
  validates :message, presence: true
  validates_format_of :email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
end
