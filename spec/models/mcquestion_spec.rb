require 'rails_helper'

RSpec.describe Mcquestion, type: :model do
  before do
    @mcquestion = Mcquestion.new(stem: "Ben Franklin Labs")
  end
 
  subject { @mcquestion }
 
  describe "when stem is not present" do
    before { @mcquestion.stem = " " }
    it { should_not be_valid }
  end
end