Feature('login Page').tag('@login');
Before(({ I })=>{
    I.openPage()
})
Scenario('Login to the page successfully', async ({ I, loginPage,basePage}) => {
    basePage.sign_in_page()
    loginPage.fill_username('username')
    loginPage.fill_password('password')
    loginPage.click_sign_in()
    I.openPage()
    basePage.check_login_successfully('username')
});

Scenario('Login to the page unsuccessfully', async ({ loginPage,basePage}) => {
    basePage.sign_in_page()
    loginPage.fill_username('username1')
    loginPage.fill_password('password')
    loginPage.click_sign_in()
    loginPage.check_error_message_displayed()
});
