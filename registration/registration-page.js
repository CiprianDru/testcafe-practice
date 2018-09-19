import { Selector, ClientFunction } from 'testcafe';
import Page from '../page-model';

export const registrationPage = new Page( );

registrationPage.loginButton = Selector( ".login" );
registrationPage.emailInput = Selector( "#email_create" );
registrationPage.radioGenderMale = Selector( "#id_gender1" );
registrationPage.radioGenderFemale = Selector( "#id_gender2" );
registrationPage.firstNameInputPI = Selector( "#customer_firstname" );
registrationPage.lastNameInputPI = Selector( "#customer_lastname" );
registrationPage.passwordInputPI = Selector( "#passwd" );
registrationPage.daysDropdownPI = Selector( "#days");
registrationPage.monthsDropdownPI = Selector( "#months" );
registrationPage.yearDropdownPI = Selector( "#years" );
registrationPage.firstNameInAddress = Selector( "#firstname" );
registrationPage.lastNameInAddress = Selector( "#lastname" );
registrationPage.companyInput = Selector( "#company" );
registrationPage.addressInput = Selector( "#address1");
registrationPage.cityInput = Selector ("#city" );
registrationPage.stateInput = Selector ( "#id_state");
registrationPage.ZipInput = Selector( "#postcode" );
registrationPage.countryDropdown = Selector( '#id_country');
registrationPage.phoneInput = Selector( "#phone_mobile");
registrationPage.alisInput = Selector( "#alias");
registrationPage.submit =  Selector( "#submitAccount");
registrationPage.header = Selector( "h1");
registrationPage.successMessage = Selector( ".info-account");
registrationPage.registeredEmail = Selector( "#email" );
registrationPage.registeredPassword = Selector( "#passwd");
registrationPage.forgotPasswordLink = Selector( ".lost_password" );
registrationPage.signInButton = Selector( "#SubmitLogin");
registrationPage.loginErrors = Selector( "#center_column > .alert-danger p")


export const getCurrentUrl = async function( ) {
  const getWindowLocation = ClientFunction(() => window.location );
  let location = await getWindowLocation();
  return location.href;
};


export const randomEmail = "ciprian" + Math.round( Math.random( ) * 148234257 ) + "@mailinator.com"
export const password = "adminadmin";
