
import { combineReducers } from "@reduxjs/toolkit";

import auth from "./Auth";
import posts from "./posts"

export default combineReducers({ auth,posts })
