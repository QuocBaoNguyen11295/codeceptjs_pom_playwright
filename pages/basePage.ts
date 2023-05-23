const { user_on_base_page } = inject();

module.exports = {
  sign_in_button: 'button:text("Signin")',

  sign_in_page(){
    user_on_base_page.click(this.sign_in_button)
  },
  check_login_successfully(username){
    user_on_base_page.see(username)
  }
}
