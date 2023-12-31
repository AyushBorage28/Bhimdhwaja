import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PrivacyPolicyScreen = () => {
  return (
    <Container className="py-3 content-container" fluid>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <div className=" container w-75 p-3" >
        <h1>Bhimdhwaja Privacy Policy</h1>
        <p style={{ color: '#000000' }}><strong>This Privacy Policy governs the manner in which Bhimdhwaja collects, uses, maintains and discloses information collected from users (each, a "User") of the bhimdhwaja.in website ("Site"). This privacy policy applies to the Site and all products and services offered by Bhimdhwaja</strong></p><br />

        <h5>Personal identification information</h5>
        <p style={{ color: '#000000' }}><strong>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</strong></p><br />

        <h5>Non-personal identification information</h5>
        <p style={{ color: '#000000' }}><strong>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</strong></p><br />

        <h5>Web browser cookies</h5>
        <p style={{ color: '#000000' }}><strong>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</strong></p><br />

        <h5>How we use collected information</h5>
        <p style={{ color: '#000000' }}><strong>We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site. </strong></p><br />

        <h5>How we protect your information</h5>
        <p style={{ color: '#000000' }}><strong>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.</strong></p><br />

        <h5>Third party websites</h5>
        <p style={{ color: '#000000' }}><strong>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.</strong></p><br />

        <h5>Compliance with children's online privacy protection act</h5>
        <p style={{ color: '#000000' }}><strong>Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.</strong></p><br />

        <h5>Changes to this privacy policy</h5>
        <p style={{ color: '#000000' }}><strong>Bhimdhwaja has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</strong></p><br />

        <h5>Your acceptance of these terms</h5>
        <p style={{ color: '#000000' }}><strong>By using this Site, you signify your acceptance of this Privacy Policy and Terms of Use. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</strong></p><br />

        <h5>Contacting us</h5>
        <p style={{ color: '#000000' }}><strong>If you have any questions about this Privacy Policy agreement, the practices of this site, or your dealings with this site, please contact us.</strong></p><br />
      </div>
    </Container>
  )
}

export default PrivacyPolicyScreen
