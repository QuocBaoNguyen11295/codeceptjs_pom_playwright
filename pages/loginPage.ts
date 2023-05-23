const {user_on_login_page} = inject()
module.exports = {
  username_field: '#user_login',
  password_field: '#user_password',
  sign_in_button: 'input[value="Sign in"]',
  fill_username(username){
    user_on_login_page.fillField(this.username_field,username)
  },
  fill_password(password){
    user_on_login_page.fillField(this.password_field,password)
  },
  click_sign_in(){
    user_on_login_page.click(this.sign_in_button)
  },
  check_error_message_displayed(){
    user_on_login_page.see('Login and/or password are wrong.')
  }
}
