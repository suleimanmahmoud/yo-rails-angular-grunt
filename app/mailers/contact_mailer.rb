class ContactMailer < ApplicationMailer
  def message_received(contact)
    template_name = "contact-message-received"

    message = {to:[email: contact.email, type: "to"],
               merge: true,
               async: true,
               global_merge_vars: [
                   {name: "CONTACT_NAME", content: contact.name}
               ]
    }

    MANDRIL_API.messages.send_template(template_name, [], message)
  end
end