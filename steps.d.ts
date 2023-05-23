/// <reference types='codeceptjs' />
declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, basePage: basePage, user_on_base_page: I, user_on_login_page: I }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
