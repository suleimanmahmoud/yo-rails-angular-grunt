class Mcquestion < ActiveRecord::Base
  	validates :stem, presence: true
end

