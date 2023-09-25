import { Injectable } from '@angular/core';

import { Store } from '@/libs/shared/store/app.store';

interface AuthState {
  isAuthenticated?: boolean;
  isSuccess?: boolean;
  message?: string;
  isLoading?: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isSuccess: false,
  message: '',
  isLoading: false,
};

@Injectable({
  providedIn: 'root',
})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(initialState);
  }

  setState(authState: AuthState) {
    this._setState((state) => ({
      ...state,
      ...authState,
    }));
  }

  resetState() {
    this._setState((state) => initialState);
  }
}
