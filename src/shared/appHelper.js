class AppHelper {
  static getRoute () {
      return "this is route"
  }
  
  static getNavigationItems = {
    TopNav:[
      {path: "/", label: "Home", withAuth: true},
      {path: "/about-us", label: "About Us", withAuth: true}
    ],
    LeftNav: [

    ]
  }
}

export default AppHelper