// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {firebaseConfig} from './lib/config/configFirebase.js';
import {createUserWithPassword, signInWithPassword} from './lib/auth/authetication.js';

firebase.initializeApp(firebaseConfig);
firebase.analytics();
// createUserWithPassword("quijadabnicolea@gmail.com", "123456", "nicole");
signInWithPassword("quijadabnicolea@gmail.com", "123456");


myFunction();
