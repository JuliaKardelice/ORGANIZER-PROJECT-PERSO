export interface userInfo {

"userName" : "JuliaR"

}



// definition des interfaces 

export interface AuthState {
    isAuthenticated : boolean,
    token : string,
    loading : boolean,
    error : string,
    infoUser : UserProfile,
    isEditingProfile : boolean

  }

  // interface données de l'utilisateur
export interface UserProfile {
  email : string,
  firstName: string,
  lastName: string,
  userName: string,

}


export const userProfileInitial:UserProfile = {
email : '',
firstName : '',
lastName : '',
userName : ''
}