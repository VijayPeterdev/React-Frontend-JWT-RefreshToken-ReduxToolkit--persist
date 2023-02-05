import axios from "axios";
import { useState } from "react";
import "./App.css";
// jwt decode time compair pana use pannurom
import jwtDecode from "jwt-decode";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useState(null);

  console.log(email, password);

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", {
        refreshtoken: user.refreshToken,
      });

      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });

      return res.data;
    } catch (err) {
      setEmail(err);
    }
  };

  // token expiry aana vati protected route iruku so athuku thirumpa datavaa get pannurom

  const axiosJWT = axios.create();

  // automatic refresh Token get panna axio interceptors

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();

      // current time and jwt time compair panne request process pannurom
      // athuku jwt-decode library use pannurom so install pannanum npm i jwt-decode

      const decodedToken = jwtDecode(user.accessToken);

      // console.log(jwtDecode(user.accessToken));

      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const newRefreshDataToken = await refreshToken();

        config.headers["refreshtoken"] =
          "Bearer " + newRefreshDataToken.accessToken;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/signin", {
        email,
        password,
      });

      setUser(res.data);
    } catch (err) {
      setError(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = axiosJWT.delete(`/find/${id}`, {
        headers: {
          token: "Bearer " + user.accessToken,
        },
      });
      setUser(res.data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="App">
      {user && user.username ? (
        <>
         
         
              <span key={user._id}> {user.email}</span>

              <div>
                <span>{user.username}</span>
                <button onClick={() => deleteUser(user._id)}>
                  delete {user.username}
                </button>
              </div>
          
      

          <div>
            <span>Fake</span>
            <button onClick={() => deleteUser("12233")}>delete Fake </button>
          </div>
        </>
      ) : (
        <>
          <h1>JWT Test</h1>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" onClick={(e) => handleLogin(e)} />
          {error && <span> {error}</span>}
        </>
      )}
    </div>
  );
}

export default App;
