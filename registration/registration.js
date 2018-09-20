import { registrationPage, randomEmail, password, getCurrentUrl, selectDateOfBirth } from "./registration-page";

fixture `Getting Started`
    .page `http://automationpractice.com/index.php`;

test('Registration', async t => {
  await t
    .click(registrationPage.loginButton)
    .typeText(registrationPage.emailInput, randomEmail )
    .click( "#SubmitCreate" )
    .click( registrationPage.radioGenderMale )
    .typeText( registrationPage.firstNameInputPI, "Ciprian")
    .typeText( registrationPage.lastNameInputPI, "Druhora")
    .typeText( registrationPage.passwordInputPI, "Asdf1234!")

  await selectDateOfBirth( t, "25", "12", "1988" )

  await t
    .typeText( registrationPage.firstNameInAddress, "Ciprian", { replace: true } )
    .typeText( registrationPage.lastNameInAddress, "Druhora", { replace: true } )
    .typeText( registrationPage.companyInput , "tuttiFrutti" )
    .typeText( registrationPage.addressInput, "Calea Turzii, nr.1222" )
    .typeText( registrationPage.cityInput, "Kolosjvar" )


    .click( registrationPage.stateInput )
    .click( registrationPage.stateInput.child( "option" ).withText( "Arkansas" ) )

    .typeText( registrationPage.ZipInput, "47000" )

    .click( registrationPage.countryDropdown )
    .click( registrationPage.countryDropdown.child("option" ).withText( "United States" ) )

    .typeText( registrationPage.phoneInput, "07453474245" )
    .typeText( registrationPage.aliasInput, "Alias")

    .click( registrationPage.submitAccount )

    .wait( 2000 )

  const successMessage = "Welcome to your account. Here you can manage all of your personal information and orders.";
  const currentURL = await getCurrentUrl(  )
  await t
    .expect( currentURL ).eql( "http://automationpractice.com/index.php?controller=my-account" )
    .expect( registrationPage.successMessage.innerText).eql( successMessage )
    .expect( registrationPage.header.innerText).eql( "MY ACCOUNT")

});

test( "Login", async t => {
  await t
    .click('.login')
    .typeText( '#email', "cipri@mailinator.com" )
    .typeText( '#passwd', password )
    .click( registrationPage.signInButton )

  const successMessage = "Welcome to your account. Here you can manage all of your personal information and orders.";
  const currentURL = await getCurrentUrl( t )
  await t
    .expect( currentURL ).eql( "http://automationpractice.com/index.php?controller=my-account" )
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
