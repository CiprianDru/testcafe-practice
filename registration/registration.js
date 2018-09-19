

import { Selector, ClientFunction } from 'testcafe';
import { registrationPage, randomEmail, password, getCurrentUrl } from "./registration-page";

fixture `Getting Started`
    .page `http://automationpractice.com/index.php`;

test('Registration', async t => {
  await t
    .click('.login')
    .typeText(' #email_create', randomEmail )
    .click( "#SubmitCreate" )
    .click( registrationPage.radioGenderMale )
    .typeText( registrationPage.firstNameInputPI, "Ciprian")
    .typeText( registrationPage.lastNameInputPI, "Druhora")
    .typeText( registrationPage.passwordInputPI, "adminadmin")
    .click( registrationPage.daysDropdownPI )
    .click( registrationPage.daysDropdownPI.child( "option").nth( 24 ) )
    .click( registrationPage.monthsDropdownPI )
    .click( registrationPage.monthsDropdownPI.child("option").nth(11) )
    .click( registrationPage.yearDropdownPI )
    .click( registrationPage.yearDropdownPI.child("option").nth( 16 ) )
    .typeText( registrationPage.firstNameInAddress, "Ciprian" )
    .typeText( registrationPage.lastNameInAddress, "Druhora" )
    .typeText( registrationPage.companyInput , "tuttiFrutti" )
    .typeText( registrationPage.addressInput, "Calea Turzii, nr.122" )
    .typeText( registrationPage.cityInput, "Kolosjvar" )
    .click( registrationPage.stateInput )
    .click( registrationPage.stateInput.child( "option").nth( 4 ))
    .typeText( registrationPage.ZipInput, "47000" )
    .click( registrationPage.countryDropdown )
    .click( registrationPage.countryDropdown.child( "option").nth( 1) )
    .typeText( registrationPage.phoneInput, "0742374245" )
    .typeText( registrationPage.alisInput, "what eva' man!")
    .click( registrationPage.submit )
    .wait( 2000 )

  const successMessage = "Welcome to your account. Here you can manage all of your personal information and orders.";
  const currentURL = await getCurrentUrl( t )
  await t
    .expect( currentURL ).eql( "this is where I am" )
    .expect( registrationPage.successMessage.innerText).eql( successMessage )
    .expect( registrationPage.header.innerText).eql( "MY ACCOUNT")

});

test.only( "Login", async t => {
  await t
    .click('.login')
    .typeText( '#email', "cipri@mailinator.com" )
    .typeText( '#passwd', password )
    .click( registrationPage.signInButton )

  const successMessage = "Welcome to your account. Here you can manage all of your personal information and orders.";
  const currentURL = await getCurrentUrl( t )
  await t
    .expect( currentURL ).eql( "this is where I am" )
    .expect( registrationPage.successMessage.innerText).eql( successMessage )
    .expect( registrationPage.header.innerText).eql( "MY ACCOUNT")

} );

test( "Loging in with a  unregistered account will display an error", async t => {
  await t
    .click('.login')
    .typeText( '#email', "rares@mailinator.com" )
    .typeText( '#passwd', password )
    .click( registrationPage.signInButton )
    .expect( registrationPage.loginErrors.innerText).eql( "There is 1 error" )

});
