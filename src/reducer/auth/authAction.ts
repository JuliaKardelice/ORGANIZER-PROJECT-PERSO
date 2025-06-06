import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { To} from "./authType";

const API_BASE_URL = 'http://localhost:3001/api/v1';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    credentials: { email: string; password: string; rememberMe: boolean },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/login`,
        credentials
      );
      const token = response.data.body.token; 
      return token;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        'La connexion a échoué. Veuillez vérifier vos identifiants.'
      ); //rejectwithvalue quand l'utilisateur n'est pas identifié et peut être réutiliser pour des composants ou reducers qui nécéssite l'authentification
    }
  }
);
//on recupere les donnée
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue('Le token est vide');
    }
    try {
      const response = await axios.get(`${API_BASE_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.body;   ///On aura les info de l'utilisateur
    } catch (error) {
      console.error(error);
      return rejectWithValue('Échec de la récupération du profil utilisateur.');
    }
  }
);
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (userName: string, { getState, rejectWithValue }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    try {
      const response = await axios.put(
        `${API_BASE_URL}/user/profile`,
        { userName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data.body;
    } catch (error) {
      console.error(error);
      return rejectWithValue('Échec de la mise à jour du profil utilisateur.');
    }
  }
);