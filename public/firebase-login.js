(async () => {
  // Import specific Firebase functions
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
  const { getAuth, signInWithPopup, GoogleAuthProvider } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");

  const firebaseConfig = {
    apiKey: "AIzaSyDdrj7bG7Nl_B63ReKOtgKO8xK-KRlVpgA",
    authDomain: "emailytics-firebase.firebaseapp.com",
    projectId: "emailytics-firebase",
    appId: "1:133361977705:web:ad9eb91018c8ebd09495f8",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      await fetch("https://your-backend.com/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ email: user.email }),
      });

      alert("Logged in!");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    if (loginButton) {
      loginButton.addEventListener("click", loginWithGoogle);
    }
  });
})();
