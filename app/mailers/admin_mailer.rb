class AdminMailer < ApplicationMailer
  def message_received(contact)
    template_name = "admin-message-received"

    message = {to:[email: "contact@suleimanaugusto.me", type: "to"],
               merge: true,
               async: true,
               global_merge_vars: [
                   {name: "CONTACT_NAME", content: contact.name},
                   {name: "CONTACT_EMAIL", content: contact.email},
                   {name: "CONTACT_SUBJECT", content: contact.subject},
                   {name: "CONTACT_MESSAGE", content: contact.message}
               ]
    }

    MANDRIL_API.messages.send_template(template_name, [], message)
  end
end