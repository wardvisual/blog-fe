import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { LoginAction } from './auth.actions';

interface Auth {
  isAuthenticated: boolean;
  message?: string;
}

@State<Auth>({
  name: 'auth',
  defaults: {
    isAuthenticated: false,
    message: '',
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static isAuthenticated(state: Auth) {
    return state.isAuthenticated;
  }

  @Selector()
  static message(state: Auth) {
    return state.message;
  }

  @Action(LoginAction)
  login(context: StateContext<Auth>, payload: Auth) {
    context.setState({
      isAuthenticated: payload.isAuthenticated,
      message: payload.message,
    });
  }
}
