class ApplicationMailer < ActionMailer::Base
    require 'mandrill'

    MANDRIL_API = Mandrill::API.new(Rails.application.secrets.mandrill_api_key)
end