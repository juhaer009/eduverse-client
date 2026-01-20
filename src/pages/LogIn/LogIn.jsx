import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaExclamationTriangle,
  FaSpinner
} from "react-icons/fa";

const LogIn = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // State management
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Auto-fill demo credentials
  const fillDemoCredentials = () => {
    setFormData({
      email: "ben@ten.com",
      password: "Ben1234"
    });
    // Clear any existing errors
    setErrors({});
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleLogIn = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const result = await logIn(formData.email, formData.password);
      toast.success("Login successful!");
      navigate(location.state || "/");
    } catch (error) {
      console.error("Login error:", error);
      
      // Handle specific Firebase auth errors
      let errorMessage = "Login failed. Please try again.";
      
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email address";
          setErrors({ email: errorMessage });
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          setErrors({ password: errorMessage });
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          setErrors({ email: errorMessage });
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many failed attempts. Please try again later";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
        case "auth/invalid-credential":
          errorMessage = "Invalid email or password";
          setErrors({ 
            email: "Invalid credentials",
            password: "Invalid credentials"
          });
          break;
        default:
          errorMessage = error.message || "An unexpected error occurred";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogIn = async () => {
    setIsGoogleLoading(true);
    setErrors({});

    try {
      const result = await googleLogIn();
      toast.success("Google login successful!");
      navigate(location.state || "/");
    } catch (error) {
      console.error("Google login error:", error);
      
      let errorMessage = "Google login failed. Please try again.";
      
      switch (error.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Login cancelled";
          break;
        case "auth/popup-blocked":
          errorMessage = "Popup blocked. Please allow popups and try again";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
        default:
          errorMessage = error.message || "Google login failed";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center py-8 px-4">
      <Helmet>
        <title>Login - Eduverse</title>
        <meta name="description" content="Login to your Eduverse account" />
      </Helmet>
      
      <div className="w-full max-w-md">
        <div className="bg-base-100 rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
              Welcome Back!
            </h1>
            <p className="text-base-content/70">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Demo Account Info */}
          <div className="bg-info/10 border border-info/20 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-info">Try Demo Account</p>
                <p className="text-xs text-info/80">ben@ten.com • Ben1234</p>
              </div>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="btn btn-info btn-xs"
                disabled={isLoading}
              >
                Auto Fill
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogIn} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 ${
                    errors.email ? 'input-error' : ''
                  }`}
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`input input-bordered w-full pl-10 pr-10 ${
                    errors.password ? 'input-error' : ''
                  }`}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 mt-1 text-error text-sm">
                  <FaExclamationTriangle />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            {/* Forgot Password & Demo Account */}
            <div className="flex justify-between items-center">
              <a href="#" className="link link-primary text-sm">
                Forgot password?
              </a>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="btn btn-ghost btn-xs text-secondary hover:bg-secondary/10"
                disabled={isLoading}
              >
                Use Demo Account
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogIn}
            disabled={isGoogleLoading || isLoading}
            className="btn btn-outline w-full"
          >
            {isGoogleLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Signing In...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </button>

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Don't have an account?{" "}
              <Link
                to="/register"
                state={location?.state}
                className="link link-primary font-medium"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
